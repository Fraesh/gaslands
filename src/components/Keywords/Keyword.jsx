import {
  Badge,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  PopoverContent,
  Tag,
  Box,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { keywords } from "../../db/keywords";

export const Keyword = ({ keyword }) => {
  const kw = keywords[keyword];

  return (
    <Popover>
      <PopoverTrigger>
        <Tag size="sm" cursor="pointer">
          {keyword}
        </Tag>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <HStack>
            <Text size="md" fontWeight="bold">
              {keyword}
            </Text>
            <Text size="md" fontStyle={"italic"}>
              {kw.phase}
            </Text>
          </HStack>
        </PopoverHeader>
        <PopoverBody>{kw.rules}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
