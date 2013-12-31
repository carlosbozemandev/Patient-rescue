import { Col, Divider, Layout, Row, Table, Modal } from "components";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "firebaseConfig";
import { toast } from "utils";
import { onAuthStateChanged } from "firebase/auth";
import { EyeFilled } from "@ant-design/icons";

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
    key: "email",
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

const PatientRequest = () => {
  console.log("first");
  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const [recordState, setRecordState] = useState("");

  const handleCancel = () => setPreviewOpen(false);

  const getData = () => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid } = user;
        const uploadComData = async () => {
          try {
            const q = query(collection(db, "patient"), where("user", "!=", uid));
            const querySnapshot = await getDocs(q);
            const dataArr = [];
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
    });
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
        Patient Request
      </Divider>

      <Divider />

      <Table
        columns={columns(viewFun)}
        rowId="patientname"
        isLoading={isLoading}
        dataSource={dataList}
      />

      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <b> Email: </b> {recordState?.email}
        <br />
        <b> Problem: </b> {recordState?.problem}
        <br />
        <Divider orientation="left" className="form-divider first">
          Images
        </Divider>
        {recordState?.documennts?.length > 0 &&
          recordState?.documennts?.map((i) => (
            <>
              <img src={i} alt="" width={460} /> <Divider />
            </>
          ))}
      </Modal>
    </Layout>
  );
};
export default PatientRequest;
