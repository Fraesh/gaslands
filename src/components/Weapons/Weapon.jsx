import { Select, Grid, Box, Icon, Text, Tooltip } from "@chakra-ui/react";
import React from "react";
import { GiSentryGun, GiDropletSplash, GiRamProfile } from "react-icons/gi";
import { weapons } from "../../db/weapons";
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
      background={i % 2 > 0 ? undefined : "blackAlpha.400"}
      py={1}
      pl={1}
      gridColumnGap="2"
      justifyItems="start"
      width="full"
      gridTemplateColumns="4fr 2fr 1fr 1fr 2fr 9fr 1fr 1fr 5.5rem"
      alignItems={"center"}
    >
      <Tooltip label={invalid}>
        <Select
          variant="filled"
          placeholder="Weapon Type"
          size="xs"
          color={invalid ? "red.600" : undefined}
          value={weapon.type}
          onChange={(e) => onChange({ ...weapon, type: e.target.value })}
        >
          {Object.keys(weapons).map((w) => {
            return (
              <Box
                as="option"
                key={w}
                value={w}
                color={isInvalid(w, team) ? "red.600" : "white"}
              >
                {w}
              </Box>
            );
          })}
        </Select>
      </Tooltip>
      <Select
        size="xs"
        variant="filled"
        disabled={disabled}
        placeholder="Facing"
        title="Type"
        value={weapon.side}
        onChange={(e) => onChange({ ...weapon, side: e.target.value })}
      >
        {getAvailableSides(weapon, vehicle).map((w) => (
          <option value={w}>{w}</option>
        ))}
      </Select>
      <Text fontSize="xs" justifySelf="center">
        {AttackType[weaponData.attackType] || "-"}
      </Text>

      <Text fontSize="xs" justifySelf="center">
        {getAttack(weapon, vehicle) || "-"}
      </Text>

      <Text fontSize="xs" justifySelf="center">
        {getRange(weapon, vehicle) || "-"}
      </Text>

      <Text fontSize="xs">{getSpecialRules(weapon, vehicle) || "-"}</Text>

      <Text fontSize="xs" justifySelf="center">
        {getAmmo(weapon, vehicle, team) || "-"}
      </Text>

      <Text fontSize="xs" justifySelf="center">
        {getSlots(weapon, vehicle, team) || "-"}
      </Text>

      <RowEnd
        type={weapon.type}
        cans={getCost(weapon, vehicle, team)}
        onDelete={onDelete}
      />
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
