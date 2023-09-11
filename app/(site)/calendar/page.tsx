import Performance from "@/components/performance";
import performances from "@/lib/performances";

const Calendar = () => {
  return (
    <section className="container flex flex-1 flex-col gap-8 py-8 text-center">
      {performances.map((performance, index) => (
        <Performance key={index} {...performance} />
      ))}
    </section>
  );
};

export default Calendar;
