import Image from "next/image";

const HomeImg = () => {
  return (
    <div className="w-full px-20">
      <Image
        src="/home.jpeg"
        alt="Wiweka Management"
        width={1280}
        height={853}
        sizes="100vw"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default HomeImg;