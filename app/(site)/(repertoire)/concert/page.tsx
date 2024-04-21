import RepertoireRender from "@/components/repertoire-render";
import { getConcert } from "@/sanity/sanity.query";

const Concert = async () => {
  const concerts = await getConcert();
  return (
    <>
      <RepertoireRender repertoires={concerts} />
    </>
  );
};

export default Concert;
