import {
  Form,
  Button,
  Layout,
  Row,
  Col,
  Table,
  Divider,
  DynamicField as InputField,
} from "components";
import { UI_TEXT } from "constants";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParticipantsByMosqueAndSession, getMosqueListByActiveSession } from "redux/actions";
import { useSessionStorage } from "hooks";

const AttendanceBulk = () => {
  const { getItem } = useSessionStorage();
  const { mosqueData, isLoading: mosqueLoading } = useSelector((state) => state.mosque);
  const {
    attendanceBulkList,
    isLoading: participantLoading,
    attendanceBulkParticipantListResponce: { totalPages, size, totalElements },
  } = useSelector((state) => state.participant);
  const [selectedMosque, setSelectedMosque] = useState("");
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const clearForm = () => {
    form.resetFields();
    setSelectedMosque("");
  };
  const getMosqueAttendees = (page, pageSize) =>
    dispatch(
      getParticipantsByMosqueAndSession({
        value: `/${selectedMosque}/session/1`,
        token: getItem("access_token"),
        page,
        size: pageSize,
      })
    );
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
      title: "Father Name",
      dataIndex: "fatherName",
      key: "fatherName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];
  useEffect(() => {
    dispatch(getMosqueListByActiveSession());
  }, []);

  const searchData = [
    {
      id: 1,
      name: "mosque",
      label: "Mosque",
      placeholder: "Select Mosque",
      componentType: "Select",
      rules: [{ required: true }],
      optionList: mosqueData,
      valueKey: "id",
      uniqueKey: "id",
      optionKey: "name",
      loading: mosqueLoading,
      additionalProps: {
        showSearch: true,
        optionFilterProp: "children",
        onChange: (value) => setSelectedMosque(value),
      },
    },
    {
      id: 2,
      name: "date",
      label: "Date",
      placeholder: "Select Date",
      componentType: "Picker",
      rules: [{ required: true }],
      type: "DatePicker",
    },
  ];
  return (
    <Layout className="bg-transparent">
      <Divider orientation="left" className="form-divider first">
        {UI_TEXT.MUSALLI.ATTENDANCE_BULK}
      </Divider>
      <Form layout="vertical" form={form}>
        <Row className="fields-row" gutter={[20, 12]} type="flex">
          <InputField inputsData={searchData} xs={12} sm={24} lg={12} />

          <Col span={4} xs={24} sm={12} lg={4}>
            <Button
              text={UI_TEXT.MUSALLI.GET_ATTENDANCE}
              onClick={() => getMosqueAttendees(0, 10)}
              additionalProps={{ className: "w-full" }}
            />
          </Col>
          <Col span={4} xs={24} sm={12} lg={4}>
            <Button
              text={UI_TEXT.CTA.CLEAR}
              type="default"
              onClick={clearForm}
              additionalProps={{ className: "w-full" }}
            />
          </Col>
          <Col span={4} xs={24} sm={12} lg={4}>
            <Button
              text={UI_TEXT.MUSALLI.EXPORT_ATTENDANCE}
              type="primary"
              onClick={() => {}}
              additionalProps={{ className: "w-full" }}
            />
          </Col>
        </Row>
      </Form>
      <Layout className="mt-16 bg-transparent">
        <Table
          columns={columns}
          dataSource={attendanceBulkList}
          isLoading={participantLoading}
          totalPages={totalPages}
          pageSize={size}
          totalSize={totalElements}
          additionalProps={{ rowSelection: "rowSelection" }}
          onPageChange={(page, pageSize) => getMosqueAttendees(page - 1, pageSize)}
        />
      </Layout>
    </Layout>
  );
};

export default AttendanceBulk;
