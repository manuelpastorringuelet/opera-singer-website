import MusicPlayer from "@/components/music-player";
import { getMedia } from "@/sanity/sanity.query";

const Music = async () => {
  const [audio, video] = await getMedia();

  const songs = audio.files;
  const videos = video.files;

  return (
    <main className="container mx-auto flex flex-1 flex-col gap-6 py-8 sm:px-16 ">
      <article className="grid items-start gap-8 sm:grid-cols-music">
        <MusicPlayer songs={songs} />
        {videos.map((video, index) => (
          <div key={index} className="space-y-8 overflow-hidden rounded-xl">
            <video src={video.file} muted controls />
          </div>
        ))}
      </article>
    </main>
  );
};

export default Music;
