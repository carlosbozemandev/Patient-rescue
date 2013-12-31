import { Table, Layout } from "components";

// TODO: needs to adjust in to the fixtures files
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    sorter: true,
    width: 50,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 150,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 300,
  },
  {
    title: "Order No",
    dataIndex: "orderNumber",
    key: "orderNumber",
    width: 150,
  },
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    width: 150,
    render: (image) => (
      <img
        className="card-img"
        width={200}
        src={`https://dev.baitussalam.org/storage/images/projects/${image}`}
        alt="pic1"
      />
    ),
  },
];

const ProjectList = () => (
  <Layout className="bg-transparent">
    <Layout>
      <Table columns={columns} />
    </Layout>
  </Layout>
);
export default ProjectList;
