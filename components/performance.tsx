import { Performance } from "@/types";

const Performance = (performance: Performance) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="flex text-left">
          <h2 className="writing-vertical-rl text-3xl capitalize sm:text-4xl">
            {performance.type}
          </h2>
          <div className="max-w-sm">
            <h3 className="text-4xl font-medium sm:text-5xl">
              {performance.title}
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
            <p className="text-sm sm:text-base">
              {performance.dates.map((date) => new Date(date).toDateString())}
            </p>

            <p className="text-sm sm:text-base">{performance.location}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Performance;
