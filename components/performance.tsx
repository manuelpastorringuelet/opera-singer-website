import { Performance } from "@/lib/types";

const Performance = (performance: Performance) => {
  return (
    <section className="col container flex flex-col items-start justify-center gap-4 font-thin sm:flex sm:flex-row md:gap-10 lg:gap-20">
      <h1 className="justify-self-end text-4xl sm:text-5xl">23/24</h1>

      <div className="flex text-left">
        <h2 className="writing-vertical-rl text-3xl capitalize sm:text-4xl">
          {performance.type}
        </h2>
        <div className="max-w-sm">
          <h3 className="text-4xl font-medium sm:text-5xl">
            {performance.opera}
          </h3>
          <h4 className="text-2xl font-normal sm:text-3xl">
            {performance.composer}
          </h4>
          <p className="text-sm underline sm:text-base">{performance.role}</p>
          <p className="text-sm sm:text-base">
            Conductor: {performance.conductor}
          </p>
          <p className="text-sm sm:text-base">
            Production: {performance.producer}
          </p>
          <br />
          <p className="text-sm sm:text-base">{performance.dates}</p>

          <p className="text-sm sm:text-base">{performance.location}</p>

          {/* Additional properties */}
          {/* <p className="">
          <strong>Director:</strong> {performance.director}
        </p> */}
          {/* <p className="">
          <strong>Regie Eurythmie:</strong> {performance.eurythmicDirection}
          </p>
          <p className="">
          <strong>Bühne, Kostüme, Video:</strong>{" "}
          {performance.stageCostumesVideo}
        </p>
        <p className="">
        <strong>Lichtdesign:</strong> {performance.lightingDesign}
        </p>
        <p className="">
          <strong>Chorleitung:</strong> {performance.choirConductor}
        </p> */}

          {/* Performers */}
          {/* <div className="mt-4">
          <h3 className="text-lg font-semibold">Performers</h3>
          <ul className="ml-6">
          {performance.performers.map((performer, index) => (
              <li key={index} className="">
              {performer}
              </li>
              ))}
              </ul>
            </div> */}
        </div>
      </div>
    </section>
  );
};

export default Performance;
