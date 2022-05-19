import { Button, Text, VStack, Grid, Box } from "@chakra-ui/react";
import React from "react";
import { Perk } from "./Perk";

export const Perks = ({ vehicle, team }) => {
  const perks = vehicle.perks || [];
  return (
    <VStack width="full" alignItems={"start"} spacing="0">
      <Text fontWeight={"bold"} fontSize="xs">
        Perks
      </Text>

      {perks.map((u, i) => (
        <Perk key={i} i={i} team={team} vehicle={vehicle} perk={u} />
      ))}
    </VStack>
  );
};
