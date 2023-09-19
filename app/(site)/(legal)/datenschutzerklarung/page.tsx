import { PortableText } from "@portabletext/react";
import { ReactNode } from "react";

import { getLegal } from "@/sanity/sanity.query";

const Datenschutzerklärung = async () => {
  const [content] = await getLegal();

  return (
    <>
      <PortableText value={content.privacyPolicy} />
    </>
  );
};

export default Datenschutzerklärung;
