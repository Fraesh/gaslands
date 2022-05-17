import { db } from "../db/db";
import { upgrades } from "../db/upgrades";
import { weapons } from "../db/weapons";

export const getSlots = (vehicle) => {
  const vehicleData = db.vehicles[vehicle.type];
  if (!vehicleData) return;
  const slots = vehicleData.slots;
  const upgradeSlots =
    vehicle.upgrades?.reduce((v, u) => v + (upgrades[u]?.slots || 0), 0) || 0;
  const weaponSlots =
    vehicle.weapons?.reduce((v, w) => v + (weapons[w.type]?.slots || 0), 0) ||
    0;

  return slots - upgradeSlots - weaponSlots;
};
export const getHandling = (vehicle) => {
  const vehicleData = db.vehicles[vehicle.type];
  if (!vehicleData) return;
  const handling = vehicleData.handling;
  const tankTracks =
    vehicle.upgrades?.reduce((v, u) => v + (u === "Tank tracks" ? 1 : 0), 0) ||
    0;

  return handling + tankTracks;
};
export const getMaxGear = (vehicle) => {
  const vehicleData = db.vehicles[vehicle.type];
  if (!vehicleData) return;
  const maxGear = vehicleData.maxGear;
  const tankTracks =
    vehicle.upgrades?.reduce((v, u) => v + (u === "Tank tracks" ? 1 : 0), 0) ||
    0;

  return maxGear - tankTracks;
};
export const getHull = (vehicle) => {
  const vehicleData = db.vehicles[vehicle.type];
  if (!vehicleData) return;
  const hull = vehicleData.hull;
  const armorPlate =
    vehicle.upgrades?.reduce(
      (v, u) => v + (u === "Armour Plating" ? 2 : 0),
      0
    ) || 0;
  const microArmorPlate =
    vehicle.upgrades?.reduce(
      (v, u) => v + (u === "MicroPlate Armour" ? 2 : 0),
      0
    ) || 0;

  return hull + armorPlate + microArmorPlate;
};
export const getCrew = (vehicle) => {
  const vehicleData = db.vehicles[vehicle.type];
  if (!vehicleData) return;
  const crew = vehicleData.crew;
  const extra =
    vehicle.upgrades?.reduce(
      (v, u) => v + (u === "Extra Crewmember" ? 1 : 0),
      0
    ) || 0;

  return crew + extra;
};
