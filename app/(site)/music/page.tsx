const Music = () => {
  return (
    <section className="flex flex-1 flex-col items-center gap-8">
      <video src="watch.m4v" autoPlay muted className="h-full" />
      <audio src="/listen.m4a" controls />
    </section>
  );
};

export default Music;
