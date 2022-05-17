import {
  Button,
  Text,
  VStack,
  Grid,
  Box,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { GiHand, GiHeavyBullets } from "react-icons/gi";
import { Upgrade } from "./Upgrade";

export const Upgrades = ({ vehicle, onChange, team }) => {
  const upgrades = vehicle.upgrades || [];
  return (
    <VStack width="full" alignItems={"start"} spacing="0">
      <Grid
        mt="4"
        justifyItems="start"
        width="full"
        gridColumnGap="2"
        gridTemplateColumns="6fr 13fr 1fr 1fr 5.5rem"
        alignItems={"end"}
      >
        <Text fontWeight={"bold"} ml="1">
          Upgrades
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
      {upgrades.map((u, i) => (
        <Upgrade
          key={i}
          i={i}
          team={team}
          vehicle={vehicle}
          upgrade={u}
          onChange={(_u) =>
            onChange([...upgrades.slice(0, i), _u, ...upgrades.slice(i + 1)])
          }
          onDelete={() =>
            onChange([...upgrades.slice(0, i), ...upgrades.slice(i + 1)])
          }
        />
      ))}
      <Box h="2" />
      <Button size="xs" onClick={() => onChange([...upgrades, {}])}>
        Add Upgrade
      </Button>
    </VStack>
  );
};
