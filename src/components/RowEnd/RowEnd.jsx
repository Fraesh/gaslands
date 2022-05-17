import {
  HStack,
  Icon,
  IconButton,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { GiSodaCan } from "react-icons/gi";
import { MdDelete } from "react-icons/md";

export const RowEnd = ({
  cans,
  onDelete,
  type,
  secondaryCans,
  secondaryType,
}) => {
  return (
    <HStack w="5.5rem" flexShrink={0}>
      <VStack mr="2">
        <Tooltip label={`${type} cost in cans`}>
          <HStack>
            <Icon as={GiSodaCan} />
            <Text minW="2ch">{cans || "-"}</Text>
          </HStack>
        </Tooltip>

        {secondaryCans && (
          <Tooltip label={`${secondaryType} cost in cans`}>
            <HStack opacity={0.6}>
              <Icon as={GiSodaCan} />
              <Text minW="2ch">{secondaryCans || "-"}</Text>
            </HStack>
          </Tooltip>
        )}
      </VStack>

      {onDelete && (
        <Tooltip label={`Delete ${type}`}>
          <IconButton onClick={onDelete} size="xs" icon={<MdDelete />} />
        </Tooltip>
      )}
    </HStack>
  );
};
