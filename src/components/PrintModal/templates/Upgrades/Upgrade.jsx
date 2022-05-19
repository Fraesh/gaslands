import { Select, Grid, Box, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { upgrades } from "../../../../db/upgrades";
import { getCost } from "../../../../helpers/upgradeFunctions";

import { RowEnd } from "../../../RowEnd/RowEnd";

export const Upgrade = ({ upgrade, team, onChange, onDelete, i, disabled }) => {
  const upgradeData = upgrades[upgrade] || {};

  return (
    <Grid
      background={i % 2 > 0 ? undefined : "blackAlpha.200"}
      color="black"
      pl="1"
      gridColumnGap="2"
      justifyItems="start"
      width="full"
      gridTemplateColumns="4fr 1fr 1fr 13fr"
      alignItems={"center"}
    >
      <Text fontSize="xs">{upgrade}</Text>

      {
        <Text fontSize="xs" justifySelf="center">
          {upgradeData.ammo || "-"}
        </Text>
      }
      {
        <Text fontSize="xs" justifySelf="center">
          {upgradeData.slots || "-"}
        </Text>
      }
      {<Text fontSize="xs">{upgradeData.specialRules || "-"}</Text>}
    </Grid>
  );
};

const isValid = (upgrade, team) =>
  upgrades[upgrade]?.allowedSponsors?.includes(team.sponsor) ||
  !upgrades[upgrade]?.allowedSponsors?.length;
