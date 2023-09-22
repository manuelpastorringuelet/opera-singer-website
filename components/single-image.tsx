import Image from "next/image";

interface SingleImageProps {
  photo: string;
}

const SingleImage = ({ photo }: SingleImageProps) => {
  return (
    <div className="absolute">
      <Image src={photo} alt="single image" />
    </div>
  );
};

export default SingleImage;
