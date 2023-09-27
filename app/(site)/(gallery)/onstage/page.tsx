import Gallery from "@/components/sdf";
import { getGallery } from "@/sanity/sanity.query";

const OnStage = async () => {
  const [, onStage] = await getGallery();

  const pictures = onStage.images;

  return <Gallery pictures={pictures} />;
};

export default OnStage;
