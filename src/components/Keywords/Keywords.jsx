import { HStack } from "@chakra-ui/react";
import React from "react";
import { Keyword } from "./Keyword";

export const Keywords = ({ keywords = [] }) => {
  return (
    <HStack minH="5">
      {keywords.map((kw) => (
        <Keyword keyword={kw} />
      ))}
    </HStack>
  );
};
