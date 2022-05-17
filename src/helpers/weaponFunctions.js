import { sponsors } from "../db/sponsors";
import { weapons } from "../db/weapons";

export const getAvailableSides = (weapon, vehicle) => {
  const w = weapons[weapon.type] || {};
  if (
    w.crewFired == true ||
    weapon.type == "Thumper" ||
    weapon.type == "Wall Of Amplifiers"
  ) {
    return ["360"];
  } else if (w.attackType == "Dropped") {
    if (vehicle.upgrades?.some((u) => u == "Improvised Sludge Thrower")) {
      return ["360"];
    } else {
      return ["Rear", "Sides"];
    }
  } else if (weapon.type == "BFG") {
    return ["Front"];
  } else if (w.attackType == "Shooting") {
    return ["Front", "Rear", "Sides", "Turret/360"];
    /*
TODO: only allow 1 ram per facing
} else if(weapon == "Ram") {
 let allFacings = ["Front", "Rear", "Sides"];

 let allCurrentRamFacings = self.vehicle.weapons().filter(w => w.baseWeapon().wtype == "Ram").map(r => r.facing());

 let allowedFacings = allFacings.filter(f => allCurrentRamFacings.indexOf(f) < 0);

 allowedFacings.push(self.facing());

 return allowedFacings;

*/
  } else {
    // Smash
    return ["Front", "Rear", "Sides"];
  }
};

export const getAttack = (weapon, vehicle) => {
  const w = weapons[weapon.type] || {};
  if (
    weapon.type == "Mortar" &&
    vehicle.upgrades?.some((u) => u == "Cluster Bombs")
  ) {
    return w.attack + "/2D6";
  }

  return w.attack;
};
export const getRange = (weapon, vehicle) => {
  const w = weapons[weapon.type] || {};
  if (
    w.attackType == "Dropped" &&
    vehicle.upgrades?.some((u) => u == "Improvised Sludge Thrower")
  ) {
    return "Medium/" + w.range;
  }

  return w.range;
};
export const getSlots = (weapon, vehicle, team) => {
  const w = weapons[weapon.type] || {};
  const s = sponsors[team.sponsor] || {};
  if (
    vehicle.keywords?.indexOf("Bombs away") >= 0 &&
    w.attackType == "Dropped"
  ) {
    return 0;
  }

  if (weapon.type == "Ram" && s?.keywords?.some((k) => k == "Spiked Fist")) {
    return 0;
  }

  return w.slots;
};
export const getSpecialRules = (weapon, vehicle, team) => {
  const w = weapons[weapon.type] || {};
  let specialRules = w.specialRules;
  if (
    weapon.type == "Mortar" &&
    vehicle.upgrades?.some((u) => u.upgradeType == "Cluster Bombs")
  ) {
    specialRules +=
      ". Instead of attack may do 2D6 explosion attack to all vehicles within medium range of target";
  }

  if (
    w.crewFired == true &&
    vehicle.keywords?.includes("Battle Taxi") &&
    specialRules.toLowerCase().includes("blitz") == false
  ) {
    specialRules += ". Blitz";
  }

  return specialRules;
};
export const getAmmo = (weapon, vehicle, team) => {
  const w = weapons[weapon.type] || {};
  var ammoCount = w.ammo;
  if (ammoCount == 3 && team.sponsor == "Rutherford") {
    ammoCount += 1;
  }
  return ammoCount;
};
export const getCost = (weapon, vehicle, team) => {
  const w = weapons[weapon.type] || {};
  let multiplier = 1;
  if (
    weapon.side == "Turret/360" &&
    (!vehicle.keywords?.some((k) => k == "Turret") ||
      self.vehicle.mostExpensiveTurret() != self)
  ) {
    multiplier = 3;
  }

  return multiplier * w.cost;
};
