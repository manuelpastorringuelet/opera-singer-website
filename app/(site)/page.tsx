import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center overflow-hidden">
      <section className="z-10 flex translate-y-1/4 flex-col items-start gap-3 sm:-translate-x-1/4 sm:-translate-y-1/3">
        <h1 className="text-4xl uppercase sm:text-8xl">
          Taryn
          <br />
          Knerr
        </h1>
        <h2 className="left-0 text-xl sm:text-4xl">Soprano</h2>
        <h3 className="tex flex flex-col gap-1">
          {`"...... the affecting textures`}
          <br />
          {` of Taryn Knerr’s mezzo-soprano voice."`}
          <br />
          <span className="opacity-50">- The New York Times</span>
        </h3>
      </section>
      <Image
        src="/hero.jpg"
        width={2000}
        height={2000}
        className="-translate-y-1/2 scale-150 object-cover opacity-50 sm:absolute sm:-translate-y-6 sm:translate-x-40 sm:scale-100"
        alt="hero image"
      />
    </main>
  );
}
