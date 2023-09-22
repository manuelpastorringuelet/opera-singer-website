import React from "react";

import { getRepertoire } from "@/sanity/sanity.query";
import RepertoireType from "@/components/repertoire-type";

const Repertoire = async () => {
  const repertoire = await getRepertoire();

  // select all the types of repertoire, and put them in an array, without duplicates
  const typesOfRepertoire = repertoire
    .map((item) => item.type)
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort((a, b) => {
      // sort them by occurrence
      return (
        repertoire.filter((item) => item.type === b).length -
        repertoire.filter((item) => item.type === a).length
      );
    });

  // sort the repertoire alphabetically
  console.log(typesOfRepertoire);

  return (
    <>
      {typesOfRepertoire.map((type, index) => (
        <RepertoireType key={index} type={type} />
      ))}
    </>
  );
};

export default Repertoire;
