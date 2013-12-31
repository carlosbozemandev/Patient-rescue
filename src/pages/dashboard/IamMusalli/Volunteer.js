import {
  DynamicField as SearchField,
  Table,
  Layout,
  Divider,
  Row,
  Col,
  Button,
  Form,
  Select,
} from "components";
import { UI_VALIDATION, UI_TEXT } from "constants";

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
  },
  {
    title: "Mosque",
    dataIndex: "mosque",
    key: "mosque",
  },
  {
    title: "Cnic",
    dataIndex: "nic",
    key: "nic",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Contact",
    dataIndex: "contact",
    key: "contact",
  },
  {
    title: "DOB",
    dataIndex: "dateOfBirth",
    key: "dateOfBirth",
    width: 100,
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (record) => record?.addressLine,
  },
  {
    title: "City",
    dataIndex: "name",
    key: "name",
    render: (record) => record?.city,
  },
];

const searchData = [
  {
    id: 4,
    dynamicComponent: true,
    Component: (
      <Select
        name="mosque"
        placeholder="Mosque"
        list={[]}
        label="Mosque"
        validationRules={[{ required: true }]}
      />
    ),
  },
  {
    id: 4,
    dynamicComponent: true,
    Component: (
      <Select
        name="session"
        placeholder="Session"
        list={[]}
        label="Session"
        validationRules={[{ required: true }]}
      />
    ),
  },
];

const VolunteerList = () => (
  <Layout className="bg-transparent">
    <Divider orientation="left" className="form-divider first">
      {UI_TEXT.CTA.VOLUNTEER}
    </Divider>
    <Layout className="mt-5 bg-transparent">
      <Form
        name="searchForm"
        initialValues={{
          remember: false,
        }}
        autoComplete="off"
        layout="vertical"
        validateMessages={UI_VALIDATION}
        onFinish={() => {}}
        onFinishFailed={() => {}}
      >
        <Row gutter={16}>
          <SearchField inputsData={searchData} xs={12} sm={6} lg={12} />
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
    <Table columns={columns} />
  </Layout>
);
export default VolunteerList;
