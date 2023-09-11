const Music = () => {
  return (
    <section className="container flex flex-1 flex-col items-center gap-8 py-8">
      <audio src="/listen.m4a" controls />
      <video src="watch.m4v" controls />
    </section>
  );
};

export default Music;
