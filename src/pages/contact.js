import RootLayout from "@/components/Layouts/RootLayout";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact</h1>
    </div>
  );
};

export default ContactPage;

ContactPage.getLayout = function (page) {
  return <RootLayout>{page}</RootLayout>;
};
