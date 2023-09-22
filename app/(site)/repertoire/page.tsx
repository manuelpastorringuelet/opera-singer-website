import React from "react";

import repertoireData from "@/lib/repertoireData";
import { getRepertoire } from "@/sanity/sanity.query";
import RepertoireType from "@/components/repertoire-type";

const Repertoire = async () => {
  const repertoire = await getRepertoire();

  // select all the types of repertoire, and put them in an array, without duplicates
  const typesOfRepertoire = repertoire
    .map((item) => item.type)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <>
      {typesOfRepertoire.map((type, index) => (
        <RepertoireType key={index} type={type} />
      ))}
    </>
  );
};

export default Repertoire;
