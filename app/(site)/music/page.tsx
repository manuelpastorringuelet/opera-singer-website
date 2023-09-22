import MusicPlayer from "@/components/music-player";
import { getMedia, getProfile } from "@/sanity/sanity.query";
import Image from "next/image";

const Music = async () => {
  const [profile] = await getProfile();

  const [audio, video] = await getMedia();

  const songs = audio.files;
  const videos = video.files;

  return (
    <section className="container mx-auto flex flex-1 flex-col gap-6 py-8 sm:px-16 ">
      <section className="grid grid-cols-music gap-2">
        <MusicPlayer songs={songs} />
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
        {videos.map((video, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl">
            <video src={video.file} muted controls className="h-full" />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Music;
