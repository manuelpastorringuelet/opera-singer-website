import { getPerformances } from "@/sanity/sanity.query";

import Performances from "@/components/performances";

const Calendar = async () => {
  const performances = await getPerformances();

  return (
    <main
      suppressHydrationWarning
      className="flex flex-1 flex-col items-center gap-8 py-8 text-center  sm:container"
    >
      <Performances performances={performances} />
    </main>
  );
};

export default Calendar;
