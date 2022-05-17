import {
  HStack,
  VStack,
  Input,
  Select,
  InputRightAddon,
  InputLeftAddon,
  InputGroup,
  Button,
  Tag,
  Badge,
} from "@chakra-ui/react";
import React from "react";
import { sponsors } from "../../db/sponsors";
import { getTeamCans } from "../../helpers/calculateCans";
import { Keywords } from "../Keywords/Keywords";
import { RowEnd } from "../RowEnd/RowEnd";
import { Vehicle } from "../Vehicle/Vehicle";

export const Team = ({ team, onChange, onDelete }) => {
  const sponsor = sponsors[team.sponsor];

  return (
    <VStack alignItems={"start"}>
      <HStack w="full" bg={sponsor?.color} p="2">
        <VStack w="full" alignItems={"start"}>
          <HStack w="full">
            <InputGroup size="xs">
              <InputLeftAddon children="Team" />
              <Input
                variant="filled"
                placeholder="Team Name"
                value={team.name}
                onChange={(e) => onChange({ ...team, name: e.target.value })}
              />
            </InputGroup>
            <Select
              size="xs"
              variant="filled"
              placeholder="Sponsor"
              value={team.sponsor}
              onChange={(e) => onChange({ ...team, sponsor: e.target.value })}
            >
              {Object.keys(sponsors).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
            <InputGroup size="xs" maxW="7rem">
              <Input
                type="number"
                variant="filled"
                placeholder="xx"
                value={team.maxCost}
                onChange={(e) =>
                  onChange({ ...team, maxCost: parseInt(e.target.value) })
                }
              />
              <InputRightAddon children="Cans" />
            </InputGroup>
          </HStack>
          <HStack>
            <HStack>
              {sponsor?.perkClasses.map((pc) => (
                <Badge size="sm" variant="outline">
                  {pc}
                </Badge>
              ))}
            </HStack>
            <Keywords keywords={sponsor?.keywords} />
          </HStack>
        </VStack>
        <RowEnd cans={getTeamCans(team)} onDelete={onDelete} type="Team" />
      </HStack>

      {team.vehicles.map((v, i) => (
        <Vehicle
          team={team}
          vehicle={v}
          onDelete={() =>
            onChange({
              ...team,
              vehicles: [
                ...team.vehicles.slice(0, i),

                ...team.vehicles.slice(i + 1),
              ],
            })
          }
          onChange={(_v) =>
            onChange({
              ...team,
              vehicles: [
                ...team.vehicles.slice(0, i),
                _v,
                ...team.vehicles.slice(i + 1),
              ],
            })
          }
        />
      ))}
      <HStack p={2}>
        <Button
          size="xs"
          onClick={() =>
            onChange({
              ...team,
              vehicles: [...team.vehicles, {}],
            })
          }
        >
          Add Vehicle
        </Button>
      </HStack>
    </VStack>
  );
};
