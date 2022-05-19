import { HStack, Select, Grid, Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { GiSentryGun, GiDropletSplash, GiRamProfile } from "react-icons/gi";
import { perks } from "../../../../db/perks";
import { sponsors } from "../../../../db/sponsors";

import { RowEnd } from "../../../RowEnd/RowEnd";

export const Perk = ({ perk, team, onChange, onDelete, i, disabled }) => {
  const perkData = perks[perk] || {};
  const sponsor = sponsors[team.sponsor];
  const keys = Object.entries(perks)
    .filter((p) => sponsor?.perkClasses?.includes(p[1].class))
    .map((p) => p[0]);

  return (
    <Box
      background={i % 2 > 0 ? undefined : "blackAlpha.200"}
      color="black"
      p="1"
      width="full"
      lineHeight="1rem"
    >
      <Text as="span" fontSize="xs" fontWeight="bold" mr="2">
        {perk}
      </Text>
      <Text as="span" fontSize="xs">
        {perkData.rules || "-"}
      </Text>
    </Box>
  );
};
