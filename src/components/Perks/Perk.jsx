import { HStack, Select, Grid, Box, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { GiSentryGun, GiDropletSplash, GiRamProfile } from "react-icons/gi";
import { perks } from "../../db/perks";
import { sponsors } from "../../db/sponsors";

import { RowEnd } from "../RowEnd/RowEnd";

export const Perk = ({
  perk,
  team,
  onChange,
  onDelete,
  vehicle,
  i,
  disabled,
}) => {
  const perkData = perks[perk] || {};
  const sponsor = sponsors[team.sponsor];
  const keys = Object.entries(perks)
    .filter((p) => sponsor?.perkClasses?.includes(p[1].class))
    .map((p) => p[0]);

  return (
    <Grid
      background={i % 2 > 0 ? undefined : "blackAlpha.400"}
      py={1}
      pl="1"
      gridColumnGap="2"
      justifyItems="start"
      width="full"
      gridTemplateColumns="6fr 15fr 5.5rem"
      alignItems={"center"}
    >
      <Select
        placeholder="Perk Type"
        size="xs"
        disabled={disabled}
        variant="filled"
        value={perk}
        onChange={(e) => onChange(e.target.value)}
      >
        {keys.map((w) => (
          <option value={w}>{w}</option>
        ))}
      </Select>

      {<Text fontSize="xs">{perkData.rules || "-"}</Text>}
      <RowEnd type={perk} cans={perkData?.cost} onDelete={onDelete} />
    </Grid>
  );
};
