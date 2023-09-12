import Image from "next/image";

const AboutImage = () => {
  return (
    <div className="relative w-full overflow-hidden object-cover sm:h-60 md:h-80">
      <Image
        src="/hero.png"
        width={2235}
        height={1705}
        objectPosition="top"
        sizes="100vw"
        alt="taryn portrait"
        objectFit="cover"
        className="h-32 object-cover sm:h-auto"
      />
    </div>
  );
};

export default AboutImage;
