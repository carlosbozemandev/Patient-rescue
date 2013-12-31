/* eslint-disable no-unused-vars */
import { Col, Divider, Layout, Row, Table, Modal } from "components";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "firebaseConfig";
import { toast } from "utils";
import { EyeFilled } from "@ant-design/icons";
import { useAuthState } from "react-firebase-hooks/auth";

// TODO: needs to adjust in to the fixtures files
const columns = (viewFun) => [
  {
    title: "Patient Name",
    dataIndex: "patientname",
    key: "patientname",
  },
  {
    title: "Problem",
    dataIndex: "problem",
    key: "problem",
  },
  {
    title: "Email",
    dataIndex: "emailAddress",
    key: "emailAddress",
    // render: (record) => console.log(record),
  },
  {
    title: "symptoms",
    dataIndex: "symptoms",
    key: "symptoms",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    key: "action",
    align: "center",
    render: (record) => (
      <Row>
        <Col span={12} xs={24} sm={12} lg={12}>
          {/* <Button type="link"> */}
          <EyeFilled onClick={() => viewFun(record)} />
          {/* </Button> */}
        </Col>
      </Row>
    ),
  },
];

const PatientList = () => {
  const [user, loading] = useAuthState(auth);

  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [recordState, setRecordState] = useState("");

  const handleCancel = () => setPreviewOpen(false);

  const getData = () => {
    setIsLoading(true);
    if (user) {
      const { uid, email } = user;
      const uploadComData = async () => {
        try {
          const q = query(collection(db, "patient"), where("emailAddress", "==", email));
          const querySnapshot = await getDocs(q);
          const dataArr = [];
          console.log({ querySnapshot });
          querySnapshot.forEach((doc) => {
            dataArr.push(doc.data());
          });
          setDataList(dataArr);

          setIsLoading(false);
        } catch (err) {
          toast({ type: "error" });
        }
      };
      uploadComData();
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(dataList);

  const viewFun = (record) => {
    setRecordState(record);
    console.log(record);
    setPreviewOpen(true);
    setPreviewTitle("View Full detail");
  };

  return (
    <Layout className="bg-transparent">
      <Divider orientation="left" className="form-divider first">
        Our Request
      </Divider>

      <Divider />

      <Table
        columns={columns(viewFun)}
        rowId="patientname"
        isLoading={isLoading}
        dataSource={dataList}
      />

      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <br />
        <h2>
          <b> Patient Name: </b> {recordState?.patientname}
        </h2>
        <br />
        <h3>
          <b> Problem: </b> {recordState?.problem}
        </h3>
        <br />
        <h3>
          <b> Symptoms: </b> {recordState?.symptoms}
        </h3>
        <br />
        <h3>
          <b> Accepted By: </b> DR. Lee (General Physician at Seven Day Hospital)
        </h3>
        <br />
        <br />
        <Divider orientation="left" className="form-divider first">
          Images
        </Divider>
        {recordState?.documennts?.length > 0 &&
          recordState?.documennts?.map((i, ind) => <img src={i} alt="" width="50%" />)}
      </Modal>
    </Layout>
  );
};
export default PatientList;
