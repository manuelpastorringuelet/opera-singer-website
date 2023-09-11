import Image from "next/image";

const AboutImage = () => {
  return (
    <div className="relative h-60 w-full overflow-hidden object-cover md:h-80">
      <Image
        src="/hero.png"
        width={2235}
        height={1705}
        objectPosition="top"
        sizes="100vw"
        alt="taryn portrait"
        objectFit="cover"
      />
    </div>
  );
};

export default AboutImage;
