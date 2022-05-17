import { upgrades } from "../db/upgrades";

export const getCost = (upgrade, team) => {
  const u = upgrades[upgrade] || {};
  let cost = u.cost || 0;
  if (upgrade == "Nitro Booster" && team.sponsor == "Idris") {
    cost /= 2;
  }

  if (upgrade == "Extra Crewmember" && team.sponsor == "Scarlett") {
    cost /= 2;
  }
  return cost;
};
