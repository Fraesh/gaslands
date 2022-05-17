import { perks } from "../db/perks";
import { upgrades } from "../db/upgrades";
import { vehicles } from "../db/vehicles";
import { weapons } from "../db/weapons";
import { getCost } from "./upgradeFunctions";
import { getCost as getWeaponCost } from "./weaponFunctions";

export const getTeamCans = (team) => {
  return team.vehicles.reduce((cans, v) => cans + getVehicleCans(v, team), 0);
};

export const getVehicleCans = (vehicle, team) => {
  const weaponCans =
    vehicle.weapons?.reduce(
      (cans, w) => cans + (getWeaponCost(w, vehicle, team) || 0),
      0
    ) || 0;
  const upgradeCans =
    vehicle.upgrades?.reduce((cans, u) => cans + getCost(u, team), 0) || 0;
  const perksCans =
    vehicle.perks?.reduce((cans, p) => cans + (perks[p]?.cost || 0), 0) || 0;
  return (
    (vehicles[vehicle.type]?.cost || 0) + weaponCans + upgradeCans + perksCans
  );
};
