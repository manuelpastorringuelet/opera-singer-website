import { getRepertoire } from "@/sanity/sanity.query";

type RepertoireTypeProps = {
  type: string;
};
const RepertoireType = async ({ type }: RepertoireTypeProps) => {
  const repertoire = await getRepertoire();

  // Filter repertoire based on the type prop
  const filteredRepertoire = repertoire.filter((item) => item.type === type);

  return (
    <section className="container mx-auto flex flex-1 flex-col gap-12 py-8 sm:gap-16 sm:px-16">
      <div className="group group grid gap-6 sm:grid-cols-repertoire sm:gap-8 lg:gap-16">
        <h1 className="text-5xl font-semibold text-primary/80 sm:justify-self-end">
          {type}
        </h1>
        <ul className="flex flex-1 flex-col gap-4">
          {filteredRepertoire.map((item, index) => (
            <li key={index}>
              <h2 className="peer text-xl font-semibold group-hover:text-primary/80">
                {item.composer}
              </h2>
              <div className="peer">
                {item.compositions.map((piece, index) => (
                  <p key={index} className="font-light">
                    {piece.title}
                    {piece.role.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RepertoireType;
