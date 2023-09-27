import Gallery from "@/components/gallery";
import { getGallery } from "@/sanity/sanity.query";

const OnStage = async () => {
  const [, onStage] = await getGallery();

  const pictures = onStage.images;

  return <Gallery pictures={pictures} />;
};

export default OnStage;
