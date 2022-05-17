import { Button, Text, VStack, Grid, Box } from "@chakra-ui/react";
import React from "react";
import { Perk } from "./Perk";

export const Perks = ({ vehicle, onChange, team }) => {
  const perks = vehicle.perks || [];
  return (
    <VStack width="full" alignItems={"start"} spacing="0">
      <Grid
        mt="4"
        justifyItems="start"
        width="full"
        gridColumnGap="2"
        gridTemplateColumns="6fr 15fr 5.5rem"
        alignItems={"end"}
      >
        <Text fontWeight={"bold"} ml="1">
          Perks
        </Text>
        <Text fontSize="xs" opacity=".6">
          Rules
        </Text>

        <Box></Box>
      </Grid>
      {perks.map((u, i) => (
        <Perk
          key={i}
          i={i}
          team={team}
          vehicle={vehicle}
          perk={u}
          onChange={(_u) =>
            onChange([...perks.slice(0, i), _u, ...perks.slice(i + 1)])
          }
          onDelete={() =>
            onChange([...perks.slice(0, i), ...perks.slice(i + 1)])
          }
        />
      ))}
      <Box h="2" />
      <Button size="xs" onClick={() => onChange([...perks, {}])}>
        Add Perk
      </Button>
    </VStack>
  );
};
