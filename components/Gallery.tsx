import fetchImages from "@/lib/fetchImages";
import type { ImagesResults } from "@/models/Images";
import ImageContainer from "./ImageContainer";

export default async function Gallery() {
  const url = "https://api.pexels.com/v1/curated";

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images) {
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;
  }

  return (
    <section className="my-3 grid grid-cols-gallery gap-2 px-2">
      {images.photos.map((photo) => (
        <ImageContainer photo={photo} key={photo.id} />
      ))}
    </section>
  );
}
