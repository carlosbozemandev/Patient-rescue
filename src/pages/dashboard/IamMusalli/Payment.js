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
    title: "Volunteer Name",
    dataIndex: "volunteer",
    key: "volunteer",
    sorter: true,
    render: (text) => text?.name,
    width: 150,
  },
  {
    title: "Volunteer CNIC",
    dataIndex: "volunteer",
    key: "volunteer",
    width: 150,
    sorter: true,
    render: (text) => text?.nic,
  },
  {
    title: "Volunteer Email Address",
    dataIndex: "volunteer",
    key: "volunteer",
    width: 150,
    render: (text) => text?.email,
  },
  {
    title: "Mosque",
    dataIndex: "volunteer",
    key: "volunteer",
    width: 150,
    render: (text) => text?.mosque?.name,
  },
  {
    title: "City",
    dataIndex: "volunteer",
    key: "volunteer",
    width: 150,
    render: (text) => text?.address?.city,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
    width: 150,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: 150,
  },
  {
    title: "Comment",
    dataIndex: "comment",
    key: "comment",
    width: 150,
  },
  {
    title: "Request Status",
    dataIndex: "requestStatus",
    key: "requestStatus",
    width: 150,
  },
  {
    title: "Created Date",
    dataIndex: "dateCreated",
    key: "dateCreated",
    width: 150,
  },
];

const PaymentList = () => (
  <Layout className="bg-transparent">
    <Layout>
      <Table columns={columns} />
    </Layout>
  </Layout>
);
export default PaymentList;
