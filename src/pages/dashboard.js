import DashboardLayout from "@/components/Layouts/DashboardLayout";

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
