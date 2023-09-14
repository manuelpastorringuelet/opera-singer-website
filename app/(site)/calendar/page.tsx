import Performance from "@/components/performance";
import performances from "@/lib/performances";

const Calendar = () => {
  return (
    <main className="container flex flex-1 flex-col gap-8 py-8 text-center">
      <section className="container flex flex-col items-start justify-center gap-4 font-thin sm:flex sm:flex-row md:gap-10 lg:gap-20">
        <h1 className="justify-self-end text-4xl sm:text-5xl">
          {performances[0].year}
        </h1>
        <section className="container flex flex-col items-start justify-center gap-4 font-thin sm:flex md:gap-10 lg:gap-20">
          {performances.map((performance, index) => (
            // h1 with the title of each year

            <Performance key={index} {...performance} />
          ))}
        </section>
      </section>
    </main>
  );
};

export default Calendar;
