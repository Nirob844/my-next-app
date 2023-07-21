import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <h1>Home</h1>
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
