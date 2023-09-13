const Music = () => {
  return (
    <section className="my-3 grid flex-1 grid-cols-gallery gap-2 px-2">
      <section className="flex flex-col gap-4">
        <figure className="flex flex-col items-center gap-1">
          <figcaption>
            <h2 className="text-sm font-semibold">
              Opera Repertoire by Taryn Knerr
            </h2>
          </figcaption>
          <audio controls src="/listen.m4a">
            <a href="/listen.m4a"> Download audio </a>
          </audio>
        </figure>
        <figure className="flex flex-col items-center gap-1">
          <figcaption>
            <h2 className="text-sm font-semibold">
              Opera Repertoire by Taryn Knerr
            </h2>
          </figcaption>
          <audio controls src="/listen.m4a">
            <a href="/listen.m4a"> Download audio </a>
          </audio>
        </figure>
        <figure className="flex flex-col items-center gap-1">
          <figcaption>
            <h2 className="text-sm font-semibold">
              Opera Repertoire by Taryn Knerr
            </h2>
          </figcaption>
          <audio controls src="/listen.m4a">
            <a href="/listen.m4a"> Download audio </a>
          </audio>
        </figure>
        <figure className="flex flex-col items-center gap-1">
          <figcaption>
            <h2 className="text-sm font-semibold">
              Opera Repertoire by Taryn Knerr
            </h2>
          </figcaption>
          <audio controls src="/listen.m4a">
            <a href="/listen.m4a"> Download audio </a>
          </audio>
        </figure>
        <figure className="flex flex-col items-center gap-1">
          <figcaption>
            <h2 className="text-sm font-semibold">
              Opera Repertoire by Taryn Knerr
            </h2>
          </figcaption>
          <audio controls src="/listen.m4a">
            <a href="/listen.m4a"> Download audio </a>
          </audio>
        </figure>
      </section>
      <section className="grid-cols-music grid gap-2">
        <div className="relative overflow-hidden rounded-xl bg-gray-200">
          <video src="watch.m4v" autoPlay muted controls className="h-full" />
        </div>
        <div className="relative overflow-hidden rounded-xl bg-gray-200">
          <video src="watch.m4v" autoPlay muted controls className="h-full" />
        </div>
        <div className="relative overflow-hidden rounded-xl bg-gray-200">
          <video src="watch.m4v" autoPlay muted controls className="h-full" />
        </div>
      </section>
    </section>
  );
};

export default Music;
