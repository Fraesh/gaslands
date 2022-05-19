import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Perks } from "./Perks/Perks";
import { Upgrades } from "./Upgrades/Upgrades";
import { VehicleStats } from "./VehicleStats";
import { Weapons } from "./Weapons/Weapons";

export const VehicleTemplate = ({ vehicle, team }) => {
  return (
    <Box border="1px solid #aaa" p="1mm" borderRadius="1mm" width="full">
      <HStack mb="2">
        <Text fontWeight="bold">{vehicle.name}</Text>
        <Text opacity=".6" fontStyle="italic">
          {vehicle.type}
        </Text>
        <Box flex="1" />
        <VehicleStats vehicle={vehicle} team={team} />
      </HStack>
      <Weapons vehicle={vehicle} team={team} />
      <Upgrades vehicle={vehicle} team={team} />
      <Perks vehicle={vehicle} team={team} />
    </Box>
  );
};
