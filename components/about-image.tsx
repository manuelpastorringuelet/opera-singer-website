import { getProfile } from "@/sanity/sanity.query";
import Image from "next/image";

const AboutImage = async () => {
  const [profile] = await getProfile();

  return (
    <div className="relative w-full overflow-hidden object-cover sm:h-60 md:h-80">
      <Image
        priority
        src={profile.heroImage.image}
        width={2235}
        height={1705}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        alt={profile.heroImage.alt}
        className="h-40 object-cover sm:h-auto"
      />
    </div>
  );
};

export default AboutImage;
