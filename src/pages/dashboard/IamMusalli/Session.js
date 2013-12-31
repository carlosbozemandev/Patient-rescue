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
    title: "Description",
    dataIndex: "description",
    key: "description",
    sorter: true,
    width: 100,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: 100,
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    width: 100,
  },
  {
    title: "End Date",
    dataIndex: "endDate",
    key: "endDate",
    width: 100,
  },
  {
    title: "Mosque Regestration Start Date",
    dataIndex: "masjidRegistrationStartDate",
    key: "masjidRegistrationStartDate",
    width: 100,
  },
  {
    title: "Mosque Regestration End Date",
    dataIndex: "masjidRegistrationEndDate",
    key: "masjidRegistrationEndDate",
    width: 100,
  },
  {
    title: "Participant Regestration Start Date",
    dataIndex: "participantRegistrationStartDate",
    key: "participantRegistrationStartDate",
    width: 100,
  },
  {
    title: "Participant Regestration End Date",
    dataIndex: "participantRegistrationEndDate",
    key: "participantRegistrationEndDate",
    width: 100,
  },
  {
    title: "Maximum Participant DOB",
    dataIndex: "maximumParticipantDateOfBirth",
    key: "maximumParticipantDateOfBirth",
    width: 100,
  },
  {
    title: "Minimum Participant DOB",
    dataIndex: "minimumParticipantDateOfBirth",
    key: "minimumParticipantDateOfBirth",
    width: 100,
  },
  {
    title: "Competition Start Date",
    dataIndex: "competitionStartDate",
    key: "competitionStartDate",
    width: 100,
  },
  {
    title: "Competition End Date",
    dataIndex: "competitionEndDate",
    key: "competitionEndDate",
    width: 100,
  },
  {
    title: "Cost Per Cycle",
    dataIndex: "costPerCycle",
    key: "costPerCycle",
    width: 100,
  },
  {
    title: "Percentage To Pay",
    dataIndex: "percentageToPay",
    key: "percentageToPay",
    width: 100,
  },
  {
    title: "Payment Due Date",
    dataIndex: "paymentDueDate",
    key: "paymentDueDate",
    width: 100,
  },
  {
    title: "Second Payment Due Date",
    dataIndex: "secondPaymentDueDate",
    key: "secondPaymentDueDate",
    width: 100,
  },
  {
    title: "Payment Percentage Split On First Due Date ",
    dataIndex: "paymentPercentageSplitOnFirstDueDate",
    key: "paymentPercentageSplitOnFirstDueDate",
    width: 100,
  },
];

const SessionList = () => (
  <Layout className="bg-transparent">
    <Layout>
      <Table columns={columns} />
    </Layout>
  </Layout>
);
export default SessionList;
