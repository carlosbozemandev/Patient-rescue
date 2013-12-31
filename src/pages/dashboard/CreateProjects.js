import {
  DynamicField as ColLeft,
  Form,
  Row,
  Button,
  Col,
  Select,
  Radio,
  SelectImage,
  Divider,
} from "components";
import { UI_TEXT, UI_VALIDATION } from "constants";
import { useSelector } from "react-redux";

// TODO: needs to adjust in to the fixtures files
const leftColumn = [
  {
    id: 1,
    name: "Title",
    label: "Title",
    placeholder: "Title",
    type: "Text",
    componentType: "Input",
    rules: [{ required: true }],
  },
  {
    id: 2,
    name: "Description",
    label: "Description",
    placeholder: "Description",
    type: "TextArea",
    componentType: "Input",
    rules: [{ required: true }],
  },
  {
    id: 3,
    name: "Order No",
    label: "Order No",
    placeholder: "Order No",
    type: "Text",
    componentType: "Input",
    rules: [{ required: true }],
  },
  {
    id: 4,
    dynamicComponent: true,
    Component: (
      <Select
        name="department"
        placeholder="Department"
        list={[]}
        label="Department"
        validationRules={[{ required: true }]}
      />
    ),
  },
  {
    id: 5,
    dynamicComponent: true,
    Component: (
      <Select
        name="category"
        placeholder="Category"
        list={[]}
        label="Category"
        validationRules={[{ required: true }]}
      />
    ),
  },
  {
    id: 6,
    dynamicComponent: true,
    Component: (
      <Radio
        name="status"
        placeholder="Status"
        label="Status"
        validationRules={[{ required: true }]}
      />
    ),
  },
  {
    id: 7,
    dynamicComponent: true,
    Component: (
      <SelectImage
        placeholder="Image"
        list={[]}
        label="Image"
        validationRules={[{ required: true }]}
      />
    ),
  },
];

const CreateProject = () => {
  const { isLoading } = useSelector((state) => state.member);
  // const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onCreateProject = (projectData) => {
    console.log(projectData);
    // dispatch(createMember({ ...memberData, membershipTypeId: 4 }));
  };

  return (
    <>
      <Divider orientation="left" className="form-divider first">
        {UI_TEXT.CTA.CREATE_PROJECT}
      </Divider>
      <Form
        hideRequiredMark
        form={form}
        name="createProjectForm"
        layout="vertical"
        onFinish={onCreateProject}
        validateMessages={UI_VALIDATION}
      >
        <Row className="fields-row" gutter={20} type="flex">
          <ColLeft inputsData={leftColumn} span={8} xs={24} sm={12} lg={12} />
          {/* TODO: add this into dynamic actions, if needed */}
          <Divider />
          <Col span={24} xs={24} sm={24} lg={24} className="flex justify-end">
            <Button
              isLoading={isLoading}
              type="primary"
              additionalProps={{
                htmlType: "submit",
              }}
              text={UI_TEXT.CTA.CREATE_PROJECT}
            />
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateProject;
