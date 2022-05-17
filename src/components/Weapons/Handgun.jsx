import {
  HStack,
  Select,
  Grid,
  Box,
  Icon,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { GiSentryGun, GiDropletSplash, GiRamProfile } from "react-icons/gi";
import { handgun, weapons } from "../../db/weapons";
import {
  getAmmo,
  getAttack,
  getAvailableSides,
  getCost,
  getRange,
  getSlots,
  getSpecialRules,
} from "../../helpers/weaponFunctions";
import { RowEnd } from "../RowEnd/RowEnd";

export const Handgun = ({ vehicle, team }) => {
  const weapon = { type: "Handgun", side: "360" };
  const weaponData = handgun;
  return (
    <Grid
      background={"blackAlpha.400"}
      py={1}
      pl="1"
      gridColumnGap="2"
      justifyItems="start"
      width="full"
      gridTemplateColumns="4fr 2fr 1fr 1fr 2fr 9fr 1fr 1fr 5.5rem"
      alignItems={"center"}
    >
      <Select
        placeholder="Handgun"
        size="xs"
        disabled
        value={weapon.type}
        variant="filled"
      >
        {Object.keys([handgun]).map((w) => (
          <option key={w} value={w}>
            {w}
          </option>
        ))}
      </Select>
      <Select
        size="xs"
        variant="filled"
        disabled
        placeholder="Facing"
        title="Type"
        value={weapon.side}
      >
        {["360"].map((w) => (
          <option value={w}>{w}</option>
        ))}
      </Select>
      <Text fontSize="xs" justifySelf="center">
        {AttackType[weaponData.attackType] || "-"}
      </Text>
      {
        <Text fontSize="xs" justifySelf="center">
          {weaponData.attack}
        </Text>
      }
      {
        <Text fontSize="xs" justifySelf="center">
          {weaponData.range}
        </Text>
      }
      {<Text fontSize="xs">{weaponData.specialRules}</Text>}
      {
        <Text fontSize="xs" justifySelf="center">
          {weaponData.ammo}
        </Text>
      }
      {
        <Text fontSize="xs" justifySelf="center">
          {weaponData.getSlots || "-"}
        </Text>
      }
      <RowEnd type={weapon.type} cans={getCost(weapon, vehicle, team)} />
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
