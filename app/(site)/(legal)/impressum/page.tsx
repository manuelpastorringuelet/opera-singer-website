import { PortableText } from "@portabletext/react";

import { getLegal } from "@/sanity/sanity.query";

const Impressum = async () => {
  const [content] = await getLegal();

  return <>{content.imprint && <PortableText value={content.imprint} />}</>;
};

export default Impressum;
