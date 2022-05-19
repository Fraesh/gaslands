import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Text,
  Grid,
  VStack,
  Box,
  HStack,
  Select,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Weapons } from "./templates/Weapons/Weapons";
import { Upgrades } from "./templates/Upgrades/Upgrades";
import {
  DashlandsOptions,
  DashlandsTemplate,
} from "./templates/DashlandsTemplate";
import { Perks } from "./templates/Perks/Perks";
import { VehicleStats } from "./templates/VehicleStats";
import { VehicleTemplate } from "./templates/VehicleTemplate";

export const PrintModal = ({ isOpen, onClose, team }) => {
  const [state, setState] = React.useState({});
  const ref = useRef();
  const handlePrint = useReactToPrint({
    content: () => ref.current,
  });

  const Options = state.card && options[state.card];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Print team</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid gridTemplateColumns={"1fr 1fr"} gridGap="4">
            <VStack w="full" alignItems={"start"} spacing="0">
              <Text variant="caption" fontWeight="bold" size="sm">
                Vehicle cards
              </Text>
              <Select
                size="sm"
                placeholder="Select a Card"
                value={state.card}
                onChange={(e) => setState({ ...state, card: e.target.value })}
              >
                <option value="dashlands">Dashlands</option>
              </Select>

              {state.card && (
                <Options
                  options={state.options || {}}
                  setOptions={(options) => setState({ ...state, options })}
                />
              )}
            </VStack>
            <Printable ref={ref} team={team} state={state} />
          </Grid>
        </ModalBody>

        <ModalFooter>
          <Button onClick={handlePrint}>Print</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const Printable = React.forwardRef(({ team, state }, ref) => {
  const scale = 0.7;
  const width = 210;
  const height = 297;
  return (
    <Box
      transform={`scale(${scale})`}
      pointerEvents="none"
      mt={`-${(height * (1 - scale)) / 2}mm`}
      ml={`-${(width * (1 - scale)) / 2}mm`}
      mb={`-${(height * (1 - scale)) / 2}mm`}
      mr={`-${(width * (1 - scale)) / 2}mm`}
    >
      <Box
        width={`${width}mm`}
        height={`${height}mm`}
        overflow="hidden"
        boxShadow="lg"
        p=".5cm"
        bg="white"
        gap="5mm"
        display="flex"
        flexDirection={"column"}
        flexWrap={"wrap"}
        color="black"
        ref={ref}
      >
        {state.card && (
          <Box display="flex" gap=".5cm">
            {team.vehicles?.map((v) => {
              const Component = cards[state.card];
              return (
                <Component vehicle={v} team={team} options={state.options} />
              );
            })}
          </Box>
        )}
        {team.vehicles?.map((v) => (
          <VehicleTemplate vehicle={v} team={team} />
        ))}
      </Box>
    </Box>
  );
});

const cards = {
  dashlands: DashlandsTemplate,
};

const options = {
  dashlands: DashlandsOptions,
};
