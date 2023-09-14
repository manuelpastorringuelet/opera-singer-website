import MusicPlayer from "@/components/music-player";

const Music = () => {
  return (
    <section className="container mx-auto flex flex-1 flex-col gap-6 py-8 sm:px-16 ">
      <section className="grid grid-cols-music gap-2">
        <MusicPlayer />
        <div className="relative overflow-hidden rounded-xl">
          <video src="watch.m4v" muted controls className="h-full" />
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
