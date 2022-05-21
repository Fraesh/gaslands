import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Button,
  VStack,
  Icon,
  Box,
  Grid,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import { sponsors } from "../../db/sponsors";
import { GiSodaCan } from "react-icons/gi";
import { getTeamCans, getVehicleCans } from "../../helpers/calculateCans";

export const LoadModal = ({ isOpen, onClose, load }) => {
  const [teams, setTeams] = React.useState([]);
  const [selected, setSelected] = React.useState("");

  React.useEffect(() => {
    if (!isOpen) return;
    const item = window.localStorage.getItem("teams");
    let teams = item ? JSON.parse(item) : {};
    setTeams(Object.values(teams));
  }, [isOpen]);
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="5xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Load Team</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack gap="2">
            {teams?.map((t) => (
              <Team
                team={t}
                selected={t.name === selected}
                onClick={() => setSelected(t.name)}
              />
            ))}
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            disabled={!selected}
            mr={3}
            onClick={() => {
              const t = teams?.filter((t) => t.name === selected)?.[0];
              load(t);
              onClose();
            }}
          >
            Load
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Team = ({ team, onClick, selected }) => {
  const { name, sponsor, maxCost, vehicles } = team;
  const cost = getTeamCans(team);
  const bg = sponsors[sponsor]?.color;
  return (
    <VStack
      w="full"
      borderRadius={4}
      background={bg}
      p="2"
      onClick={onClick}
      transition="outline 100ms"
      outline={selected ? "2px solid white" : "1px solid #ffffff22"}
      cursor="pointer"
    >
      <HStack w="full">
        <Text fontWeight="bold">{name}</Text>
        <Text fontStyle={"italic"} opacity=".6">
          {sponsor}
        </Text>
        <Box flex="1" />
        <HStack>
          <Icon as={GiSodaCan} />
          <Text minW="2ch">
            {cost || "-"}
            <span style={{ opacity: 0.4 }}>/{maxCost || "-"}</span>
          </Text>
        </HStack>
      </HStack>
      <Grid
        gridTemplateColumns={"repeat(auto-fill, minmax(20rem, auto))"}
        gridGap="1rem"
        w="full"
      >
        {vehicles?.map((v) => {
          const { weapons, upgrades, perks, type, name } = v;

          return (
            <VStack
              w="full"
              flex="1"
              spacing="0"
              alignItems={"start"}
              borderRadius={4}
              border="1px solid #ffffff22"
            >
              <HStack
                background="whiteAlpha.200"
                pt="0"
                pl="2"
                pr="2"
                pb="1"
                w="full"
              >
                <Text fontSize="sm">{name}</Text>
                <Text fontSize="sm" fontStyle={"italic"} opacity=".6">
                  {type}
                </Text>
                <Box flex="1" />
                <HStack>
                  <Icon as={GiSodaCan} />
                  <Text minW="2ch">{getVehicleCans(v, team) || "-"}</Text>
                </HStack>
              </HStack>
              <Divider />
              <Grid
                p="2"
                gridTemplateColumns={"1fr 1fr 1fr"}
                alignItems="start"
                gridColumnGap={4}
              >
                <Text fontSize="xs" fontWeight="Bold">
                  Weapons
                </Text>
                <Text fontSize="xs" fontWeight="Bold">
                  Upgrades
                </Text>
                <Text fontSize="xs" fontWeight="Bold">
                  Perks
                </Text>
                <Text fontSize="xs">
                  {weapons?.map((w) => w?.type)?.join(", ")}
                </Text>
                <Text fontSize="xs"> {upgrades?.join(", ")}</Text>
                <Text fontSize="xs"> {perks?.join(", ")}</Text>
              </Grid>
            </VStack>
          );
        })}
      </Grid>
    </VStack>
  );
};
