import Image from "next/image";

const AboutImage = () => {
  return (
    <div className="h-40 overflow-clip object-cover object-top md:h-80 w-full">
      <Image
        src="/hero.png"
        width={1000}
        height={1000}
        alt="taryn portrait"
        className="w-full"
      />
    </div>
  );
};

export default AboutImage;
