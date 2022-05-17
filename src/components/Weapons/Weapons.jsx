import {
  Button,
  Text,
  VStack,
  Grid,
  Box,
  Tooltip,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  GiHand,
  GiHeavyBullets,
  GiDirectionSigns,
  GiBrightExplosion,
} from "react-icons/gi";
import { FaRulerHorizontal } from "react-icons/fa";

import { Weapon } from "./Weapon";
import { Handgun } from "./Handgun";

export const Weapons = ({ vehicle, onChange, team }) => {
  const weapons = vehicle.weapons || [];
  return (
    <VStack width="full" alignItems={"start"} spacing="0">
      <Grid
        mt="4"
        justifyItems="start"
        width="full"
        gridColumnGap="2"
        gridTemplateColumns="4fr 2fr 1fr 1fr 2fr 9fr 1fr 1fr 5.5rem"
        alignItems={"end"}
      >
        <Text fontWeight={"bold"} ml="1">
          Weapons
        </Text>
        <Text fontSize="xs" opacity=".6" justifySelf="center">
          <Tooltip label="Facing">
            <span>
              <Icon as={GiDirectionSigns} />
            </span>
          </Tooltip>
        </Text>
        <Text fontSize="xs" opacity=".6" justifySelf="center">
          Type
        </Text>
        <Text fontSize="xs" opacity=".6" justifySelf="center">
          <Tooltip label="Attack">
            <span>
              <Icon as={GiBrightExplosion} />
            </span>
          </Tooltip>
        </Text>
        <Text fontSize="xs" opacity=".6" justifySelf="center">
          <Tooltip label="Range">
            <span>
              <Icon as={FaRulerHorizontal} />
            </span>
          </Tooltip>
        </Text>
        <Text fontSize="xs" opacity=".6">
          Rules
        </Text>
        <Text fontSize="xs" opacity=".6" justifySelf="center">
          <Tooltip label="Ammo">
            <span>
              <Icon as={GiHeavyBullets} />
            </span>
          </Tooltip>
        </Text>
        <Text fontSize="xs" opacity=".6" justifySelf="center">
          <Tooltip label="Slots">
            <span>
              <Icon as={GiHand} />
            </span>
          </Tooltip>
        </Text>
        <Box></Box>
      </Grid>
      <Handgun team={team} vehicle={vehicle} />
      {weapons.map((w, i) => (
        <Weapon
          i={i + 1}
          key={i}
          team={team}
          vehicle={vehicle}
          weapon={w}
          onChange={(_w) =>
            onChange([...weapons.slice(0, i), _w, ...weapons.slice(i + 1)])
          }
          onDelete={() =>
            onChange([...weapons.slice(0, i), ...weapons.slice(i + 1)])
          }
        />
      ))}
      <Box h="2" />
      <Button size="xs" onClick={() => onChange([...weapons, {}])}>
        Add Weapon
      </Button>
    </VStack>
  );
};
