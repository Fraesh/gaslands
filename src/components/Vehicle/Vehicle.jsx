import React from "react";
import {
  Box,
  Grid,
  HStack,
  Input,
  Select,
  VStack,
  InputGroup,
  InputLeftAddon,
  Tooltip,
  Text,
  IconButton,
  Checkbox,
} from "@chakra-ui/react";
import { db } from "../../db/db";
import { VehicleStats } from "./VehicleStats";
import { RowEnd } from "../RowEnd/RowEnd";
import { getVehicleCans } from "../../helpers/calculateCans";
import { Weapons } from "../Weapons/Weapons";
import { Upgrades } from "../Upgrades/Upgrades";
import { Perks } from "../Perks/Perks";
import { Keywords } from "../Keywords/Keywords";
import { sponsors } from "../../db/sponsors";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
const vehicles = db.vehicles;

export const Vehicle = ({ vehicle, team, onChange, onDelete }) => {
  const [open, setOpen] = React.useState(true);
  const vehicleData = db.vehicles[vehicle.type];

  const invalid = isInvalid(vehicle.type, team);
  return (
    <Box w="full">
      <VStack width="full" p={2} borderRadius={4} border="1px solid #ffffff22">
        {open ? (
          <>
            <HStack w="full" alignItems={"center"} gap={6}>
              <VStack flex="1" alignItems={"start"}>
                <HStack w="full">
                  <IconButton
                    size="xs"
                    variant="ghost"
                    icon={open ? <MdExpandLess /> : <MdExpandMore />}
                    onClick={() => setOpen(!open)}
                  />
                  <Checkbox
                    isChecked={vehicle.active}
                    onChange={() =>
                      onChange({ ...vehicle, active: !vehicle.active })
                    }
                  />
                  <InputGroup size="xs">
                    <InputLeftAddon children="Vehicle" />
                    <Input
                      variant="filled"
                      placeholder="Name"
                      value={vehicle.name}
                      onChange={(e) =>
                        onChange({ ...vehicle, name: e.target.value })
                      }
                    />
                  </InputGroup>

                  <Tooltip label={invalid}>
                    <Select
                      placeholder="Vehicle Type"
                      size="xs"
                      color={invalid ? "red.600" : undefined}
                      value={vehicle.type}
                      variant="filled"
                      onChange={(e) =>
                        onChange({ ...vehicle, type: e.target.value })
                      }
                    >
                      {Object.keys(vehicles).map((v) => {
                        return (
                          <Box
                            as="option"
                            key={v}
                            value={v}
                            color={isInvalid(v, team) ? "red.600" : "white"}
                          >
                            {v}
                          </Box>
                        );
                      })}
                    </Select>
                  </Tooltip>
                </HStack>
                <Keywords keywords={vehicleData?.keywords} />
              </VStack>

              <VehicleStats {...vehicleData} vehicle={vehicle} />
              <RowEnd
                cans={getVehicleCans(vehicle, team)}
                secondaryCans={vehicleData?.cost}
                onDelete={onDelete}
                type="Vehicle"
                secondaryType={vehicle.type}
              />
            </HStack>
            <Weapons
              team={team}
              vehicle={vehicle}
              onChange={(weapons) => onChange({ ...vehicle, weapons })}
            />
            <Upgrades
              team={team}
              vehicle={vehicle}
              onChange={(upgrades) => onChange({ ...vehicle, upgrades })}
            />
            <Perks
              team={team}
              vehicle={vehicle}
              onChange={(perks) => onChange({ ...vehicle, perks })}
            />
          </>
        ) : (
          <HStack w="full">
            <IconButton
              size="xs"
              variant="ghost"
              icon={open ? <MdExpandLess /> : <MdExpandMore />}
              onClick={() => setOpen(!open)}
            />
            <Checkbox
              isChecked={vehicle.active}
              onChange={() => onChange({ ...vehicle, active: !vehicle.active })}
            />
            <Text
              fontSize="sm"
              fontWeight="bold"
              pl="2"
              opacity={vehicle.active ? "1" : ".6"}
            >
              {vehicle.name}
            </Text>
            <Text fontSize="sm" fontStyle="italic" opacity=".6">
              {vehicle.type}
            </Text>
            <Box flex="1" />
            <RowEnd
              cans={getVehicleCans(vehicle, team)}
              onDelete={onDelete}
              type="Vehicle"
            />
          </HStack>
        )}
      </VStack>
    </Box>
  );
};

const isInvalid = (vehicle, team) => {
  if (
    vehicle === "Tank" &&
    !sponsors[team?.sponsor]?.keywords?.includes("Military hardware")
  )
    return "You need 'Military Hardware' to purchase a single tank.";
  if (
    vehicle === "Helicopter" &&
    !sponsors[team?.sponsor]?.keywords?.includes("Military hardware")
  )
    return "You need 'Military Hardware' to purchase a single helicopter.";
  if (
    vehicle === "Tank" &&
    team.vehicles.filter((v) => v.type === "Tank").length >= 2
  )
    return "You can only have a single tank.";
  if (
    vehicle === "Helicopter" &&
    team.vehicles.filter((v) => v.type === "Helicopter").length >= 2
  )
    return "You can only have a single helicopter.";
  if (
    sponsors[team?.sponsor]?.keywords?.includes("Might is right") &&
    vehicles[vehicle]?.weight === "Light"
  )
    return "Teams with 'Might is right' may not purchase lightweight vehicles.";
  if (
    sponsors[team?.sponsor]?.keywords?.includes("Might is right") &&
    vehicles[vehicle]?.handling <= 2
  )
    return "Teams with 'Elegance' may not purchase vehicles with handling <= 2.";
  if (
    sponsors[team?.sponsor]?.keywords?.includes("Kiss my asphalt") &&
    vehicle === "Gyrocopter"
  )
    return "Teams with 'Kiss my asphalt' may not purchase gyrocopters.";
  return undefined;
};
