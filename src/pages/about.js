import RootLayout from "@/components/Layouts/RootLayout";

const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};