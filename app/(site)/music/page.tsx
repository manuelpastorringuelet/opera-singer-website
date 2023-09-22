import MusicPlayer from "@/components/music-player";
import { getMedia } from "@/sanity/sanity.query";

const Music = async () => {
  const [audio, video] = await getMedia();

  const songs = audio.files;
  const videos = video.files;

  return (
    <section className="container mx-auto flex flex-1 flex-col gap-6 py-8 sm:px-16 ">
      <section className="grid gap-4 sm:grid-cols-music">
        <MusicPlayer songs={songs} />
        {videos.map((video, index) => (
          <div key={index} className="overflow-hidden rounded-xl">
            <video src={video.file} muted controls />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Music;
