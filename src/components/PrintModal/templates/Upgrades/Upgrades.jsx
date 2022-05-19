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
        mt="2"
        justifyItems="start"
        width="full"
        color="black"
        gridColumnGap="2"
        gridTemplateColumns="4fr 1fr 1fr 13fr"
        alignItems={"end"}
      >
        <Text fontWeight={"bold"} fontSize="xs">
          Upgrades
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
        <Text fontSize="xs" opacity=".6">
          Rules
        </Text>
      </Grid>
      {upgrades.map((u, i) => (
        <Upgrade key={i} i={i} team={team} vehicle={vehicle} upgrade={u} />
      ))}
      <Box h="2" />
    </VStack>
  );
};
