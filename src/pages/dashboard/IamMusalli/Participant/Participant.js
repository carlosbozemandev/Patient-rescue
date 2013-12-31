import {
  Button,
  Col,
  Divider,
  DynamicField as SearchField,
  Form,
  Layout,
  Row,
  Table,
} from "components";
import { UI_TEXT, UI_VALIDATION, ROUTES } from "constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getParticipant } from "redux/actions";
import { useSessionStorage } from "hooks";

// TODO: needs to adjust in to the fixtures files
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: true,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Father Name",
    dataIndex: "fatherName",
    key: "fatherName",
    sorter: true,
  },
  {
    title: "Email Address",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "Date Of Birth",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
  },
  {
    title: "Document Submission Status",
    dataIndex: "documentSubmissionStatus",
    key: "documentSubmissionStatus",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

const searchData = [
  {
    id: 1,
    name: "mosque",
    label: "Mosque",
    placeholder: "Select Mosque",
    componentType: "Select",
    rules: [{ required: true }],
    optionList: [],
    valueKey: "code",
    optionKey: "description",
  },
  {
    id: 2,
    name: "session",
    label: "Session",
    placeholder: "Select Session",
    componentType: "Select",
    rules: [{ required: true }],
    optionList: [],
    valueKey: "code",
    optionKey: "description",
  },
];

let formFieldValues = {};

// TODO: add in constant File if reuseable
const PAGE_SIZE = 10;

const ParticipantList = () => {
  const { getItem } = useSessionStorage();

  const {
    isLoading,
    participantList,
    participantResponse: { totalPages, size, totalElements },
  } = useSelector((state) => state.participant);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addParticipant = () => {
    navigate(`../${ROUTES.MUSALLI.PARTICIPANT.ADD_PARTICIPANT}`);
  };

  const fetchRecords = (page, pageSize) => {
    dispatch(
      getParticipant({
        value: formFieldValues,
        token: getItem("access_token"),
        page,
        size: pageSize,
      })
    );
  };

  useEffect(() => {
    if (participantList?.length === 0) {
      fetchRecords(0, PAGE_SIZE);
    }
  }, []);

  const onFormFinish = (value) => {
    formFieldValues = { ...value };
    fetchRecords(0, PAGE_SIZE);
  };
  const onPageChange = (page, pageSize) => {
    fetchRecords(page - 1, pageSize);
  };

  return (
    <Layout className="bg-transparent">
      <Divider orientation="left" className="form-divider first">
        {UI_TEXT.CTA.PARTICIPANT}
      </Divider>
      <Layout className="mt-5 bg-transparent">
        <Form
          hideRequiredMark
          name="participantSearch"
          initialValues={{
            remember: false,
          }}
          autoComplete="off"
          layout="vertical"
          validateMessages={UI_VALIDATION}
          onFinish={onFormFinish}
          onFinishFailed={() => {}}
        >
          <Row gutter={16}>
            <SearchField inputsData={searchData} xs={12} sm={24} lg={12} />
            {/* TODO: add this into dynamic actions, if needed */}
            <Col xs={12} sm={12} lg={6}>
              <Button
                text={UI_TEXT.CTA.SEARCH}
                additionalProps={{ htmlType: "submit", className: "w-full" }}
              />
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <Button
                text={UI_TEXT.CTA.CLEAR}
                type="default"
                additionalProps={{ className: "w-full" }}
              />
            </Col>
          </Row>
        </Form>
      </Layout>
      <Divider />
      <Row className="fields-row mb-6" gutter={20} type="flex">
        <Col span={24} xs={24} sm={24} lg={24} className="flex justify-end">
          <Button onClick={addParticipant} text={`Add ${UI_TEXT.CTA.PARTICIPANT}`} />
        </Col>
      </Row>
      <Table
        columns={columns}
        isLoading={isLoading}
        dataSource={participantList}
        totalPages={totalPages}
        pageSize={size}
        onPageChange={onPageChange}
        totalSize={totalElements}
      />
    </Layout>
  );
};
export default ParticipantList;
