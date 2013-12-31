/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { Button, Col, Form, Row, Divider, DynamicField, Spin } from "components";
import { UI_VALIDATION } from "constants";
// import { numberValidation } from "utils";
import { auth, db, storage } from "firebaseConfig";
import { toast } from "utils";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, setDoc, collection, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

const createPatientUIObject = () => [
  {
    id: 1,
    name: "patientname",
    label: "Patient Name",
    placeholder: "Patient Name",
    rules: [{ required: false }],
  },
  {
    id: 2,
    name: "symptoms",
    label: "Symptoms",
    placeholder: "Symptoms",
    rules: [{ required: false }],
  },
  {
    id: 3,
    name: "problem",
    label: "Problem",
    placeholder: "Enter problem detail",
    type: "TextArea",
    rules: [{ required: false }],
  },
  {
    id: 4,
    name: "reason",
    label: "Current Treatment",
    placeholder: "Enter Valid Reason. Why you nnot handle this patient",
    type: "TextArea",
    rules: [{ required: false }],
  },
  {
    id: 5,
    name: "documents",
    label: "Upload Patient Documents",
    componentType: "CustomUpload",
    width: 150,
    rules: [{ required: false }],
  },
];

const AddPatient = () => {
  const [form] = Form.useForm();
  const [user, loading] = useAuthState(auth);

  const [isLoading, setIsLoading] = useState(false);

  const uploadData = async (data, url) => {
    if (user) {
      const { uid, email } = user;
      const uploadComData = async () => {
        try {
          await addDoc(collection(db, "patient"), {
            ...data,
            documennts: url,
            user: uid,
            emailAddress: email,
            status: "PENDING",
          });
          form.resetFields();
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          toast({ type: "error" });
        }
      };
      uploadComData();
    }
  };

  const onFinish = (values) => {
    const { patientname, symptoms, problem, documents } = values;

    const data = {
      patientname,
      symptoms,
      problem,
    };

    if (documents?.fileList?.length) {
      setIsLoading(true);
      const mapArr = documents.fileList.map((i, index) => {
        const promise = new Promise((resolve, reject) => {
          const { name } = i.originFileObj;
          const file = i.originFileObj;

          const storageRef = ref(storage, `images/${name}`);

          const imageUpload = uploadBytes(storageRef, file).then((snapshot) => {
            console.log("Uploaded a blob or file!");
          });

          getDownloadURL(storageRef)
            .then((url) => {
              resolve(url);
            })
            .catch((error) => {
              reject(error);
            });
        });

        return promise;
      });

      Promise.all(mapArr)
        .then((success) => {
          uploadData(data, success);
        })
        .catch((err) => {
          console.log(err, "errerrerr");
          toast({ type: "error" });
        });
    } else {
      uploadData(data, []);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="edit-form__spin">
          <Spin size="large" tip="Loading ..." />
        </div>
      )}
      <Divider orientation="left" className="form-divider first">
        Add Patient Request
      </Divider>
      <Form
        hideRequiredMark
        form={form}
        name="addEditParticipantForm"
        layout="vertical"
        onFinish={onFinish}
        validateMessages={UI_VALIDATION}
      >
        <Row className="fields-row" gutter={20} type="flex" justify="space-between">
          <DynamicField inputsData={createPatientUIObject()} span={12} xs={24} sm={12} lg={12} />
          <Col span={24} xs={24} sm={24} lg={24} className="flex justify-end">
            <Button
              type="primary"
              additionalProps={{
                htmlType: "submit",
              }}
              text="Add Patient"
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddPatient;
