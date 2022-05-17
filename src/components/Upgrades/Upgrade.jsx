import { Select, Grid, Box, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { upgrades } from "../../db/upgrades";
import { getCost } from "../../helpers/upgradeFunctions";

import { RowEnd } from "../RowEnd/RowEnd";

export const Upgrade = ({ upgrade, team, onChange, onDelete, i, disabled }) => {
  const upgradeData = upgrades[upgrade] || {};

  const valid = isValid(upgrade, team);
  return (
    <Grid
      background={i % 2 > 0 ? undefined : "blackAlpha.400"}
      py={1}
      pl="1"
      gridColumnGap="2"
      justifyItems="start"
      width="full"
      gridTemplateColumns="6fr 13fr 1fr 1fr 5.5rem"
      alignItems={"center"}
    >
      <Tooltip
        label={
          valid
            ? undefined
            : `This upgrade is only available for ${upgrades[
                upgrade
              ]?.allowedSponsors.join(", ")}`
        }
      >
        <Select
          placeholder="Upgrade Type"
          size="xs"
          variant="filled"
          color={valid ? undefined : "red.600"}
          value={upgrade}
          onChange={(e) => onChange(e.target.value)}
        >
          {Object.keys(upgrades).map((u) => {
            return (
              <Box
                as="option"
                key={u}
                value={u}
                color={isValid(u, team) ? "white" : "red.600"}
              >
                {u}
              </Box>
            );
          })}
        </Select>
      </Tooltip>

      {<Text fontSize="xs">{upgradeData.specialRules || "-"}</Text>}
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
      <RowEnd
        type={upgrade}
        cans={getCost(upgrade, team)}
        onDelete={onDelete}
      />
    </Grid>
  );
};

const isValid = (upgrade, team) =>
  upgrades[upgrade]?.allowedSponsors?.includes(team.sponsor) ||
  !upgrades[upgrade]?.allowedSponsors?.length;
