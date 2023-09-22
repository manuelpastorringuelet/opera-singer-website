import { PortableText } from "@portabletext/react";

import { getLegal } from "@/sanity/sanity.query";

const Impressum = async () => {
  const [, imprint] = await getLegal();

  return <>{imprint && <PortableText value={imprint.content} />}</>;
};

export default Impressum;
