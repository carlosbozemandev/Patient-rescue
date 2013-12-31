import { DynamicField as CreateMemberField, Form, Row, Button, Col, Divider } from "components";
import { UI_TEXT, UI_VALIDATION } from "constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMember } from "redux/actions";
import { numberValidation, toast } from "utils";

// TODO: needs to adjust in to the fixtures files
const createMemberData = [
  {
    id: 1,
    name: "firstName",
    label: "First Name",
    placeholder: "First Name",
    componentType: "Input",
    type: "Text",
    rules: [{ required: true }],
  },
  {
    id: 2,
    name: "lastName",
    label: "Last Name",
    placeholder: "Last Name",
    componentType: "Input",
    type: "Text",
    rules: [{ required: true }],
  },
  {
    id: 3,
    name: "email",
    label: "Email",
    placeholder: "xyz@gmail.com",
    componentType: "Input",
    type: "Text",
    rules: [{ required: true, type: "email" }],
  },
  {
    id: 4,
    name: "phone",
    label: "Phone No.",
    placeholder: "03121112233",
    componentType: "Input",
    type: "Text",
    rules: [{ required: true, min: 11 }, numberValidation],
  },
  {
    id: 5,
    name: "password",
    label: "Password",
    placeholder: "**********",
    componentType: "Input",
    type: "Password",
    rules: [{ required: true }, { min: 8 }],
  },
];

const CreateMemberShip = () => {
  const { isLoading, successMessage, errorMessage } = useSelector((state) => state.member);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  useEffect(() => {
    if (successMessage) {
      toast({ type: "success", description: successMessage });
      form.resetFields();
    } else if (errorMessage) {
      toast({ type: "error", description: errorMessage });
    }
  }, [successMessage, errorMessage]);

  const onCreateMember = (memberData) => {
    dispatch(createMember({ ...memberData, membershipTypeId: 4 }));
  };

  return (
    <>
      <Divider orientation="left" className="form-divider first">
        {UI_TEXT.CTA.CREATE_MEMBERSHIP}
      </Divider>
      <Form
        hideRequiredMark
        form={form}
        name="createMembershipForm"
        layout="vertical"
        onFinish={onCreateMember}
        validateMessages={UI_VALIDATION}
      >
        <Row className="fields-row" gutter={20} type="flex" justify="space-between">
          <CreateMemberField inputsData={createMemberData} span={12} xs={24} sm={12} lg={12} />

          {/* TODO: add this into dynamic actions, if needed */}
          <Col span={24} xs={24} sm={24} lg={24} className="flex justify-end">
            <Button
              isLoading={isLoading}
              type="primary"
              additionalProps={{
                htmlType: "submit",
              }}
              text={UI_TEXT.CTA.CREATE_MEMBERSHIP}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateMemberShip;
