import {
  Table,
  Layout,
  Divider,
  DynamicField as SearchField,
  Button,
  Col,
  Row,
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
    title: "Mosque Name",
    dataIndex: "name",
    key: "name",
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    sorter: true,
  },
];

const searchData = [
  {
    id: 1,
    dynamicComponent: true,
    Component: (
      <Select
        name="session"
        placeholder="Session"
        list={[]}
        // label="Session"
        validationRules={[{ required: true }]}
      />
    ),
  },
];

const MosqueList = () => (
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
        </Row>
      </Form>
    </Layout>
    <Divider />
    <Table columns={columns} />
  </Layout>
);
export default MosqueList;
