import RepertoireRender from "@/components/repertoire-render";
import { getLied } from "@/sanity/sanity.query";

const Lied = async () => {
  const lieds = await getLied();
  return <RepertoireRender repertoires={lieds} />;
};

export default Lied;
