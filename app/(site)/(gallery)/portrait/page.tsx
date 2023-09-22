import Gallery from "@/components/Gallery";
import { getGallery } from "@/sanity/sanity.query";

const Portrait = async () => {
  const [portrait] = await getGallery();

  const pictures = portrait.images;

  return <Gallery pictures={pictures} />;
};

export default Portrait;
