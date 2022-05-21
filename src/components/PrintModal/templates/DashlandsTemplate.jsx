import { Box, Text, Grid, VStack, Switch } from "@chakra-ui/react";
import React from "react";
import { db } from "../../../db/db";
import { getVehicleCans } from "../../../helpers/calculateCans";
import {
  getCrew,
  getHandling,
  getHull,
  getMaxGear,
} from "../../../helpers/vehicleFunctions";
import { getSlots } from "../../../helpers/vehicleFunctions";
import bg from "../../../img/dashlands_template.jpg";
import bgbw from "../../../img/dashlands_template_bw.jpg";
export const DashlandsTemplate = ({ vehicle, team, options = {} }) => {
  const { name, type, weapons = [], upgrades = [], perks = [] } = vehicle;
  const { sponsor } = team;
  const wu = [
    ...weapons.map((w) => `${w.type} (${sideMap[w.side] || w.side})`),
    ...upgrades,
  ];
  return (
    <Box
      width="63mm"
      height="89mm"
      position="relative"
      backgroundImage={options.grayscale ? bgbw : bg}
      backgroundRepeat="no-repeat"
      color="black"
      fontSize="sm"
      fontFamily="Permanent Marker"
      backgroundSize="contain"
    >
      <Text position="absolute" top="3.7mm" left="4mm">
        {name}
      </Text>
      <Text position="absolute" top="10.5mm" left="4mm">
        {type}
      </Text>
      <Text position="absolute" top="10.5mm" left="38mm">
        {sponsor}
      </Text>
      <Text
        position="absolute"
        top="47mm"
        left="3.7mm"
        fontSize="3mm"
        maxWidth="43mm"
      >
        {perks.join(", ")}
      </Text>
      <Text
        position="absolute"
        top="6.3mm"
        left="55.7mm"
        fontSize="6mm"
        transform="translate(-50%,-50%)"
      >
        {getVehicleCans(vehicle, team)}
      </Text>
      <Text
        position="absolute"
        transform="translate(-50%,-50%)"
        top="37.5mm"
        left="56.5mm"
        fontSize="4mm"
        textAlign={"center"}
      >
        {db.vehicles[vehicle.type]?.weight?.substring(0, 1)}
      </Text>
      <Text
        position="absolute"
        transform="translate(-50%,-50%)"
        top="29.5mm"
        left="56.5mm"
        fontSize="4mm"
        textAlign={"center"}
      >
        {getCrew(vehicle)}
      </Text>
      <Text
        position="absolute"
        transform="translate(-50%,-50%)"
        top="21mm"
        left="56.5mm"
        fontSize="4mm"
        textAlign={"center"}
      >
        {getSlots(vehicle)}
      </Text>
      <Text
        position="absolute"
        transform="translate(-50%,-50%)"
        top="46mm"
        left="56.5mm"
        fontSize="4mm"
        fontWeight={"bold"}
        textAlign={"center"}
      >
        {getHandling(vehicle)}
      </Text>

      <Grid
        gridTemplateColumns="1fr"
        gridTemplateRows="1fr 1fr 1fr 1fr"
        position="absolute"
        spacing="1.1mm"
        left="3mm"
        letterSpacing={"-.2mm"}
        fontSize="2.3mm"
        top="22.6mm"
        height="18mm"
        maxWidth="25mm"
        lineHeight="2mm"
        alignItems="center"
      >
        {wu.map((e) => (
          <Text>{e}</Text>
        ))}
      </Grid>
      {[...weapons, ...upgrades].map((e, i) => {
        let ammo = 0;
        if (e.type) {
          ammo = db.weapons[e.type]?.ammo || 0;
        } else {
          ammo = db.upgrades[e]?.ammo || 0;
        }
        return (
          <DotMap
            rows={5}
            value={ammo}
            max={5}
            position="absolute"
            left="27.15mm"
            top={`${22.8 + i * 4.5}mm`}
          />
        );
      })}

      <DotMap
        rows={10}
        value={getHull(vehicle)}
        max={20}
        position="absolute"
        left="3.35mm"
        top={`${66.3}mm`}
      />
      <DotMap
        rows={1}
        transform="rotate(180deg)"
        value={getMaxGear(vehicle)}
        max={6}
        position="absolute"
        left="55.45mm"
        top={`${57.8}mm`}
      />
      <Text>{getVehicleCans(vehicle, team)}</Text>
    </Box>
  );
};

const sideMap = {
  Front: "F",
  Rear: "R",
  Sides: "S",
  "Turret/360": "360",
  360: "360",
};

const DotMap = ({ value, max, rows, ...props }) => {
  return (
    <Grid {...props} gridTemplateColumns={`repeat(${rows}, 4mm)`} gap=".55mm">
      {new Array(max).fill("").map((_, i) => (
        <Box
          bg={value > i ? "transparent" : "black"}
          opacity=".8"
          borderRadius="50%"
          width="4mm"
          height="4mm"
        ></Box>
      ))}
    </Grid>
  );
};

export const DashlandsOptions = ({ options, setOptions }) => {
  return (
    <Switch
      pt="4"
      value={options.grayscale}
      onChange={() => setOptions({ ...options, grayscale: !options.grayscale })}
    >
      Grayscale
    </Switch>
  );
};
