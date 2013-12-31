import {
  DynamicField as SearchField,
  Table,
  Layout,
  Button,
  Col,
  Row,
  Form,
  Divider,
} from "components";
import { UI_VALIDATION, UI_TEXT } from "constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMember } from "redux/actions";
import { clearMemberNotification } from "redux/reducers";
import { numberValidation, toast } from "utils";

// TODO: needs to adjust in to the fixtures files
const columns = [
  {
    title: "Member Id",
    dataIndex: "customerCode",
    key: "customerCode",
  },
  {
    title: "Member Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Member Name",
    dataIndex: "fullName",
    key: "fullName",
  },
  {
    title: "Member Phone",
    dataIndex: "contact",
    key: "contact",
  },
];
const searchFieldsData = [
  {
    id: 1,
    name: "id",
    label: "Member ID",
    placeholder: "Member ID",
    rules: [{ required: false }, numberValidation],
    type: "Text",
    componentType: "Input",
    additionalProps: { className: "w-full", controls: false },
  },
  {
    id: 2,
    name: "email",
    label: "Member Email",
    placeholder: "Member Email",
    componentType: "Input",
    rules: [{ required: false, type: "email" }],
  },
  {
    id: 3,
    name: "name",
    label: "Member Name",
    placeholder: "Member Name",
    type: "Text",
    componentType: "Input",
    rules: [{ required: false }],
  },
  {
    id: 4,
    name: "contact",
    label: "Member Phone",
    placeholder: "Member Phone",
    rules: [{ required: false, min: 11 }, numberValidation],
    type: "Text",
    componentType: "Input",
    additionalProps: { className: "w-full", controls: false },
  },
];
let formFieldValues = {};

// TODO: add in constant File if reuseable
const PAGE_SIZE = 10;

const SearchMembership = () => {
  const {
    memberData: { size, content, totalElements },
    isLoading,
    errorMessage,
  } = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const clearMsgs = () => {
    dispatch(clearMemberNotification());
  };
  useEffect(() => {
    if (errorMessage) {
      toast({ type: "error", description: errorMessage, onClose: clearMsgs() });
    }
  }, [errorMessage]);
  const onClearForm = () => {
    form.resetFields();
  };
  const fetchRecords = (page, pageSize) => {
    dispatch(searchMember({ value: formFieldValues, page, size: pageSize }));
  };
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
        {UI_TEXT.CTA.SEARCH_MEMBERSHIP}
      </Divider>
      <Layout className="mt-5 bg-transparent">
        <Form
          form={form}
          name="searchForm"
          initialValues={{
            remember: false,
          }}
          autoComplete="off"
          layout="vertical"
          validateMessages={UI_VALIDATION}
          onFinish={(value) => onFormFinish(value)}
          onFinishFailed={() => {}}
        >
          <Row gutter={16}>
            <SearchField inputsData={searchFieldsData} xs={12} sm={12} lg={6} />
            {/* TODO: add this into dynamic actions, if needed */}
            <Col xs={12} sm={12} lg={4}>
              <Button
                text={UI_TEXT.CTA.SEARCH}
                additionalProps={{ htmlType: "submit", className: "w-full" }}
              />
            </Col>
            <Col xs={12} sm={12} lg={4}>
              <Button
                text={UI_TEXT.CTA.CLEAR}
                type="default"
                onClick={onClearForm}
                additionalProps={{ className: "w-full" }}
              />
            </Col>
          </Row>
        </Form>
      </Layout>
      <Layout className="mt-16 bg-transparent">
        <Table
          columns={columns}
          dataSource={content}
          isLoading={isLoading}
          rowId="customerIdPk"
          pageSize={size}
          totalSize={totalElements}
          onPageChange={onPageChange}
        />
      </Layout>
    </Layout>
  );
};
export default SearchMembership;
