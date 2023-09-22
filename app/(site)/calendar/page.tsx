import { getPerformances } from "@/sanity/sanity.query";

import Performance from "@/components/performance";

// Helper function to convert dates to JavaScript Date objects
const convertToDates = (dates: Date[]) => dates.map((date) => new Date(date));

const Calendar = async () => {
  const performances = await getPerformances();

  // sort performances by year, extract the year from the date
  performances.sort((a, b) => {
    const earliestDateA = a.dates.map((date) => new Date(date))[0];
    const earliestDateB = b.dates.map((date) => new Date(date))[0];

    return earliestDateA.getFullYear() - earliestDateB.getFullYear();
  });

  // create a new array with only the years, remove duplicates
  const years = [
    ...new Set(
      performances.map((performance) =>
        convertToDates(performance.dates)[0].getFullYear(),
      ),
    ),
  ];

  return (
    <main className="container flex flex-1 flex-col items-center gap-8 py-8  text-center">
      {years.map((year, index) => (
        <section
          key={index}
          className="container flex flex-col items-start justify-center gap-4 font-light sm:flex sm:flex-row md:gap-10 lg:gap-20"
        >
          <h1 className="text-4xl font-semibold sm:text-5xl">{year}</h1>
          <div className="flex flex-col gap-8">
            {performances
              .filter(
                (performance) =>
                  performance.dates
                    .map((date) => new Date(date))[0]
                    .getFullYear() === year,
              )
              .map((performance, index) => (
                <>
                  <Performance key={index} {...performance} />
                </>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Calendar;
