import { Select, Grid, Box, Icon, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { GiSentryGun, GiDropletSplash, GiRamProfile } from "react-icons/gi";
import { weapons } from "../../../../db/weapons";
import {
  getAmmo,
  getAttack,
  getAvailableSides,
  getCost,
  getRange,
  getSlots,
  getSpecialRules,
} from "../../../../helpers/weaponFunctions";
import { RowEnd } from "../../../RowEnd/RowEnd";

export const Weapon = ({
  weapon,
  team,
  onChange,
  onDelete,
  vehicle,
  i,
  disabled,
}) => {
  const weaponData = weapons[weapon.type] || {};

  const invalid = isInvalid(weapon.type, team);

  return (
    <Grid
      background={i % 2 > 0 ? undefined : "blackAlpha.200"}
      py={0}
      pl={1}
      gridColumnGap="2"
      justifyItems="start"
      width="full"
      color="black"
      gridTemplateColumns="4fr 2fr 1fr 1fr 2fr 1fr 1fr 12fr "
      alignItems={"center"}
    >
      <Text fontSize="xs">{weapon.type}</Text>

      <Text fontSize="xs" justifySelf="center">
        {weapon.side}
      </Text>
      <Text fontSize="xs" justifySelf="center">
        {AttackType[weaponData.attackType] || "-"}
      </Text>

      <Text fontSize="xs" justifySelf="center">
        {getAttack(weapon, vehicle) || "-"}
      </Text>

      <Text fontSize="xs" justifySelf="center" textAlign="center">
        {getRange(weapon, vehicle) || "-"}
      </Text>

      <Text fontSize="xs" justifySelf="center">
        {getAmmo(weapon, vehicle, team) || "-"}
      </Text>

      <Text fontSize="xs" justifySelf="center">
        {getSlots(weapon, vehicle, team) || "-"}
      </Text>
      <Text fontSize="xs">{getSpecialRules(weapon, vehicle) || "-"}</Text>
    </Grid>
  );
};

const AttackType = {
  Shooting: (
    <Tooltip label="Shooting">
      <span>
        <Icon as={GiSentryGun} />
      </span>
    </Tooltip>
  ),
  Dropped: (
    <Tooltip label="Dropped">
      <span>
        <Icon as={GiDropletSplash} />
      </span>
    </Tooltip>
  ),
  Smash: (
    <Tooltip label="Smash">
      <span>
        <Icon as={GiRamProfile} />
      </span>
    </Tooltip>
  ),
};

const isInvalid = (weapon, team) => {
  if (
    weapons[weapon]?.allowedSponsors?.includes(team.sponsor) ||
    !weapons[weapon]?.allowedSponsors?.length
  ) {
    return undefined;
  } else {
    return `This weapon is only available for ${weapons[
      weapon
    ]?.allowedSponsors.join(", ")}`;
  }
};
