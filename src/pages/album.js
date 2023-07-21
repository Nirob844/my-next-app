import Image from "next/image";

const AlbumPage = () => {
  return (
    <div>
      <h1>this image is using img tag</h1>
      <img
        src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png"
        alt=""
        width="100%"
      />
      <h1>this image is using image components</h1>
      <Image
        src="https://testrigor.com/wp-content/uploads/2023/04/nextjs-logo-square.png"
        alt=""
        width={500}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default AlbumPage;
