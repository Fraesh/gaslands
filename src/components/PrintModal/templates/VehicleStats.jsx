import React from "react";
import { Box, Icon, VStack, Text, HStack, Tooltip } from "@chakra-ui/react";
import {
  GiWeight,
  GiHealthNormal,
  GiSteeringWheel,
  GiGearStickPattern,
  GiThreeFriends,
  GiHand,
} from "react-icons/gi";
import {
  getCrew,
  getSlots,
  getHandling,
  getHull,
  getMaxGear,
} from "../../../helpers/vehicleFunctions";

export const VehicleStats = ({ weight, crew, vehicle }) => {
  const slots = getSlots(vehicle);
  const _crew = getCrew(vehicle);

  const data = [
    {
      icon: GiWeight,
      title: "Weight",
      value: weightMap[weight],
    },
    {
      icon: GiHealthNormal,
      title: "Hull",
      value: getHull(vehicle),
    },
    {
      icon: GiSteeringWheel,
      title: "Handling",
      value: getHandling(vehicle),
    },
    {
      icon: GiGearStickPattern,
      title: "Max Gear",
      value: getMaxGear(vehicle),
    },
    {
      icon: GiThreeFriends,
      title: "Crew",
      value: (
        <Box as="span" color={crew * 2 < _crew ? "red.600" : undefined}>
          {_crew || "-"}
        </Box>
      ),
    },
    {
      icon: GiHand,
      title: "Slots",
      value: (
        <Box as="span" color={slots < 0 ? "red.600" : undefined}>
          {slots || "-"}
        </Box>
      ),
    },
  ];
  return (
    <HStack
      alignItems="center"
      justifyItems="flex-start"
      fontSize="xs"
      spacing="2"
    >
      {data.map((d) => (
        <HStack textAlign="center" spacing="-.5">
          <Icon as={d.icon} />

          <Text fontWeight={"bold"} minW="2ch">
            {d.value || "-"}
          </Text>
        </HStack>
      ))}
    </HStack>
  );
};

const weightMap = {
  Middle: "M",
  Heavy: "H",
  Light: "L",
};
