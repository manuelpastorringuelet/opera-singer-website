import MusicPlayer from "@/components/music-player";
import { getProfile } from "@/sanity/sanity.query";
import Image from "next/image";

const Music = async () => {
  const [profile] = await getProfile();

  return (
    <section className="container mx-auto flex flex-1 flex-col gap-6 py-8 sm:px-16 ">
      <section className="grid grid-cols-music gap-2">
        <MusicPlayer />
        <div className="relative overflow-hidden rounded-xl">
          <Image
            priority
            src={profile.heroImage.image}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            alt={profile.heroImage.alt}
            className=" object-cover"
          />
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <video src="watch.m4v" muted controls className="h-full" />
        </div>
        <div className="relative overflow-hidden rounded-xl">
          <video src="watch.m4v" muted controls className="h-full" />
        </div>
      </section>
    </section>
  );
};

export default Music;
