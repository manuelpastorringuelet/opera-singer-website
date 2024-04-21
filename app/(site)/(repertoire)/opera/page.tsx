import RepertoireRender from "@/components/repertoire-render";
import { getOpera } from "@/sanity/sanity.query";

const Opera = async () => {
  const operas = await getOpera();
  return <RepertoireRender repertoires={operas} />;
};

export default Opera;
