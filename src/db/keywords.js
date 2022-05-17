const sponsorKeywords = {
  "Military hardware": {
    phase: "Build",
    rules:
      "This team may purchase a single Tank. This team may purchase a single Helicopter.",
    ruleset: "BASE",
  },
  "Well stocked": {
    phase: "Build",
    rules:
      "This team considers any weapon with the ammo 3 special rule to instead have the ammo 4 special rule when purchased.",
    ruleset: "BASE",
  },
  "Might is right": {
    phase: "Build",
    rules: "This team may not purchase lightweight vehicles.",
    ruleset: "BASE",
  },
  "Televised carnage": {
    phase: "Play",
    rules:
      "If a vehicle in this team causes 6 or more hits in a single attack step, before evades, this team gains +1 audience vote.",
    ruleset: "BASE",
  },
  Virtuoso: {
    phase: "Play",
    rules:
      "The first time each vehicle in this team uses push it in an activation they may push it without gaining a hazard token.",
    ruleset: "BASE",
  },
  //{ktype: "Evasive maneuvers", phase: "Play", rules: "Before making an evade roll, vehicles in this team may gain any number of hazard tokens to add +1 to each of their evade dice for each hazard token gained. A roll of a 1 on an evade dice always counts as a failure.", ruleset: "BASE"},
  Elegance: {
    phase: "Build",
    rules:
      "Teams sponsored by Miyazaki may not purchase vehicle types with a base Handling value of 2 or lower",
    ruleset: "BASE",
  },
  "Showing off": {
    phase: "Play",
    rules:
      "At the end of this vehicle's activation, if it resolved at least one spin result, and resolved at least one slide result, and changed gear at least once, and did not wipeout, then this vehicle gains a 'Showing Off' token. If a vehicle with a 'Showing Off' token wipes out, that vehicle must discard its 'Showing Off' token. At the end of this vehicle's activation, if every in‐play vehicle on this team has a 'Showing Off' token, this player discards all 'Showing Off' tokens and gains 1 audience vote for each 'Showing Off' token discarded in this way. Discard all 'Showing Off' tokens at the end of the gear phase. ",
    ruleset: "BASE",
  },
  Thumpermonkey: {
    phase: "Build",
    rules: "This team may purchase electrical weapons and upgrades",
    ruleset: "BASE",
  },
  Dynamo: {
    phase: "Play",
    rules:
      "After activating in gear Phase 4, 5 or 6, this vehicle may add +1 ammo token to a single electrical weapon or upgrade on that vehicle.",
    ruleset: "BASE",
  },
  "All the toys": {
    phase: "Play",
    rules:
      "Whenever a vehicle in this team attacks with a named weapon that has not been attacked with by any vehicle during this game yet this team gains +1 audience vote,",
    ruleset: "BASE",
  },
  "N2O addict": {
    phase: "Build",
    rules: "This team may purchase the Nitro upgrade at half the listed cost",
    ruleset: "BASE",
  },
  "Speed demon": {
    phase: "Play",
    rules:
      "When this vehicle gains hazards as a result of the Nitro Booster, this vehicle only gains hazard tokens until it has 3 hazard tokens, rather than 5 hazard tokens.",
    ruleset: "BASE",
  },
  "Cult of speed": {
    phase: "Play",
    rules:
      "If this vehicle selects the long straight movement template (including when using the Nitro Booster upgrade) during gear phase 1, 2, or 3, this vehicle's controller gains 1 audience vote.",
    ruleset: "BASE",
  },
  "Kiss my asphalt": {
    phase: "Build",
    rules: "This team may not purchase Gyrocopters",
    ruleset: "BASE",
  },
  "Live fast": {
    phase: "Play",
    rules:
      "If a vehicle in this team begins the wipeout step with more hazard tokens than hull points during its own activation this team gains +1 audience vote",
    ruleset: "BASE",
  },
  Pinball: {
    phase: "Play",
    rules:
      "If a vehicle in this team is involved in a collision during its movement step in which the point of contact on both vehicles is along their side edges and this vehicle declares a smash attack, then this vehicle may immediately resolve another movement step after the current movement step.",
    ruleset: "BASE",
  },
  "Spiked Fist": {
    phase: "Build",
    rules: "This vehicle counts the Ram upgrade as requiring zero build slots.",
    ruleset: "BASE",
  },
  "Prison cars": {
    phase: "Build",
    rules:
      "Reduce the cost of this vehicle by 4 Cans to a minimum of 5 Cans. Reduce the hull value of this vehicle by 2. May only be purchased by middleweight vehicles. May only be purchased once for each vehicle.",
    ruleset: "BASE",
  },
  Fireworks: {
    phase: "Play",
    rules:
      "If a vehicle belonging to this team explodes, gain +1 audience vote if it was middleweight or +2 audience votes if it was heavyweight in addition to any votes gained for being wrecked, and then discard all ammo tokens from the wreck.",
    ruleset: "BASE",
  },
  "Crew Quarters": {
    phase: "Build",
    rules:
      "This team may purchase the Extra Crewmember upgrade at half the listed cost.",
    ruleset: "BASE",
  },
  Raiders: {
    phase: "Play",
    rules:
      "At the end of the attack step, this vehicle may permanently reduce its crew value by any number, to a minimum of 0 crew: remove 1 hull point from any vehicle in base contact for each crew removed in this way.",
    ruleset: "BASE",
  },
  "Raise the Sails": {
    phase: "Play",
    rules:
      "After rolling skid dice, this vehicle may permanently reduce its crew value by 1, to a minimum of 0 crew to add 1 free shift result to the skid dice result.",
    ruleset: "BASE",
  },
  "Press Gang": {
    phase: "Play",
    rules:
      "When another vehicle in contact with this vehicle is wrecked, this vehicle may gain either 1 crew or 2 audience votes",
    ruleset: "BASE",
  },
  "Hot Pursuit": {
    phase: "Play",
    rules:
      "Before the first gear phase of the game, after deployment, this team must nominate one enemy vehicle as the 'Bogey'.",
    ruleset: "BASE",
  },
  "Bogey at 12 O'Clock": {
    phase: "Play",
    rules:
      "At the end of this vehicle's movement step, if the Bogey is in this vehicle's front arc of fire, in line of sight, and further than double range away, this vehicle may immediately resolve another movement step.",
    ruleset: "BASE",
  },
  Siren: {
    phase: "Play",
    rules:
      "At the end of this vehicle's activation, if this vehicle in the Bogey's rear arc of fire (regardless of range), the Bogey must either reduce its gear by 1 or gain 2 hazards.",
    ruleset: "BASE",
  },
  "Steel Justice": {
    phase: "Play",
    rules:
      "If the Bogey wipes out this team as a whole gains 2 audience votes. If the Bogey is wrecked this team as a whole gains 4 audience votes.",
    ruleset: "BASE",
  },

  // Verney
  "MicroPlate Armour": {
    phase: "Build",
    rules:
      "Vehicles in this team may purchase the MicroPlate Armour upgrade, which costs 6 cans, grants +2 hull points, and requires 0 build slots",
    ruleset: "BASE",
  },
  "Trunk of Junk": {
    phase: "Play",
    rules:
      "You may attack with any number of dropped weapons in a single activation",
    ruleset: "BASE",
  },
  Tombstone: {
    phase: "Play",
    rules:
      "If the shooting template of a shooting attack touches the rear edge of this vehicle, this vehicle gains +1 to its evade rolls. During this vehicle's  attack step, this vehicle may gain 2 hazards. If it does, all collisions involving this vehicle are considered to be head-on until the start of its next activation.",
    ruleset: "BASE",
  },
  "That's Entertainment": {
    phase: "Play",
    rules:
      "Whenever a dropped weapon template that was placed by this team is removed from play, this team gains 1 Audience Vote",
    ruleset: "BASE",
  },

  // Maxxine
  Dizzy: {
    phase: "Play",
    rules:
      "This vehicle may resolve any number of spin results separately during its movement step, one after another. This can allow this vehicle to spin more than 90 degrees during its movement step.",
    ruleset: "BASE",
  },
  "Maxximum Drift": {
    phase: "Play",
    rules:
      "If this vehicle resolves two slide results in a single skid check, it may use the medium straight in place of the slide template. If this vehicle resolves three or more slide results in a single skid check, it may use the long straight in place of the slide template.",
    ruleset: "BASE",
  },
  Meshuggah: {
    phase: "Play",
    rules:
      "When this vehicle resolve a slide or spin that ends within medium of a friendly vehicle without causing a collision: this team gains +1 Audience Vote.",
    ruleset: "BASE",
  },

  // The Flame Cult
  "Fire Walk With Me": {
    phase: "Play",
    rules:
      "When this vehicle receives damage from any weapon or effect with the Fire rule , this vehicle may reduce that damage by up to 3, to a minimum of 1",
    ruleset: "BASE",
  },
  "Burning Man": {
    phase: "Play",
    rules: "If this vehicle is On Fire it gains +1 to all evade dice.",
    ruleset: "BASE",
  },
  "Cult Of Flame": {
    phase: "Play",
    rules:
      "At the end of the gear phase, if there are more enemy vehicles on fire than there are friendly vehicles on fire, or all enemy vehicles are on fire, this team gains 1 audience vote for each friendly vehicle that is on fire.",
    ruleset: "BASE",
  },

  // Beverly
  "Graveyard Shift": {
    phase: "Play",
    rules:
      "At the start of the game, after deployment, all vehicle in this team except one must gain the 'Ghost Rider' special rule",
    ruleset: "BASE",
  },
  "Ghost Rider": {
    phase: "Play",
    rules:
      "This vehicle ignores and is ignored by other vehicles at all times. This vehicle cannot be involved in collisions. This vehicle may not make shooting attacks or be attacked with shooting weapons . This vehicle may never count towards the victory conditions of a scenario.",
    ruleset: "BASE",
  },
  "Soul Anchor": {
    phase: "Play",
    rules:
      "If all in play vehicles from this team have the Ghost Rider special rule immediately remove all vehicles on this team from play.",
    ruleset: "BASE",
  },
  "At The Crossroads": {
    phase: "Play",
    rules:
      "This team may choose to pay only 1 vote to respawn a vehicle. If they do, the respawned car must gain the 'Ghost Rider' special rule",
    ruleset: "BASE",
  },
  Inexorable: {
    phase: "Play",
    rules:
      "If a vehicle from this team is a wreck or out of play, the vehicle may be respawned, even if other rules would ordinarily prevent that.",
    ruleset: "BASE",
  },
  "Soul Harvest": {
    phase: "Play",
    rules:
      "If this vehicle's movement template comes into contact with an enemy vehicle: this vehicle gains 1 Soul token, even if the enemy vehicle is being ignored. If this vehicle's movement template comes into contact with a friendly vehicle without the 'Ghost Rider' rule that it did not start in contact with, choose one: either gain 1 vote for each Soul token; or repair two Hull Points on the vehicle without the 'Ghost Rider' rule for each Soul token. Then discard all Soul tokens.",
    ruleset: "BASE",
  },

  // Rusty's Bootleggers
  "Party Hard": {
    phase: "Play",
    rules:
      "At the end of this vehicle's attack step, if this vehicle has more hazard tokens than the sum of the hazards tokens on all other enemy vehicles within medium range combined, this vehicle's controller gains +1 audience vote for each enemy vehicle with 1+ hazard tokens within medium range of this vehicle.",
    ruleset: "BASE",
  },
  "Dutch courage": {
    phase: "Play",
    rules: "Vehicles in this team only wipe out when they have 8 hazards.",
    ruleset: "BASE",
  },
  "As Straight As I'm Able": {
    phase: "Play",
    rules:
      "This vehicle does not gain a hazard from the articulated rule if it selects a template that is not a straight.",
    ruleset: "BASE",
  },
  "Over The Limit": {
    phase: "Play",
    rules:
      "This vehicle never considers any of the straight movement templates to be permitted. This vehicle considers veer to be permitted and trivial in any gear.",
    ruleset: "BASE",
  },
  "Trailer Trash": {
    phase: "Build",
    rules:
      "These team must contain at least one medium or heavyweight vehicle equipped with a trailer upgrade, or a War Rig.",
    ruleset: "BASE",
  },
  Haulage: {
    phase: "Build",
    rules:
      "Each vehicle on this team equipped with a trailer upgrade, and each War Rig, may equip a single trailer cargo upgrade for free.",
    ruleset: "BASE",
  },
};

const weaponKeywords = [];

const vehicleKeywords = {
  Airborne: {
    phase: "Play",
    rules:
      "This Vehicle ignores obstructions, dropped weapons and terrain at all times; except that this vehicle may target other vehicles in its attack step. Other vehicles ignore this vehicle at all times, except that other vehicles may target this vehicle during their attack steps. This vehicle cannot be involved in collisions.",
    ruleset: "BASE",
  },
  Airwolf: {
    phase: "Play",
    rules:
      "At the start of this vehicle's activation, this vehicle may make a single pivot about its centre point, up to 90 degrees",
    ruleset: "BASE",
  },
  "All terrain": {
    phase: "Play",
    rules:
      "This vehicle may ignore the penalties for rough and treacherous surfaces.",
    ruleset: "BASE",
  },
  Articulated: {
    phase: "Play",
    rules: "* see War Rig rules.",
    ruleset: "BASE",
  },
  "Bombs away": {
    phase: "Build",
    rules:
      "When purchasing weapons, this vehicle may count dropped weapons as requiring 0 build slots.",
    ruleset: "BASE",
  },
  Downers: {
    phase: "Play",
    rules:
      "When this vehicle declares a SMASH ATTACK during its activation remove 2 hazard tokens from the target vehicle, and then reduce the target vehicle's crew value by 1 until the end of the phase.",
    ruleset: "BASE",
  },
  "Full throttle": {
    phase: "Play",
    rules:
      "This vehicle considers the long straight maneuver template to be permitted in any gear. The long straight is not considered either hazardous or trivial in any gear",
    ruleset: "BASE",
  },
  "Infuriating Jingle": {
    phase: "Play",
    rules:
      "Vehicles that target this vehicle with a SMASH ATTACK during a collision receive no hazard tokens during step 6 of the collision resolution.",
    ruleset: "BASE",
  },
  "Jet Engine": {
    phase: "Play",
    rules:
      "A vehicle with a jet engine counts as having a Nitro Booster with infinite ammo tokens. This vehicle automatically explodes when it is wrecked. A vehicle with a jet engine must use the Nitro Booster every time it activates.",
    ruleset: "BASE",
  },
  Piledriver: {
    phase: "Play",
    rules: "* see War Rig rules",
    ruleset: "BASE",
  },
  Pivot: {
    phase: "Play",
    rules:
      "At the start of this vehicle's activation, if this vehicle's current gear is 1, this vehicle may make a pivot about its centre to face any direction This pivot cannot cause a collision, and cannot leave this vehicle touching an obstruction.",
    ruleset: "BASE",
  },
  Ponderous: {
    phase: "Play",
    rules: "* see War Rig rules.",
    ruleset: "BASE",
  },
  "Roll cage": {
    phase: "Play",
    rules:
      "When this vehicle suffers a flip, this vehicle may choose to ignore the 2 hits received from the Flip.",
    ruleset: "BASE",
  },
  "Slip away": {
    phase: "Play",
    rules:
      "If this vehicle is targeted with a tailgate, T-bone or sideswipe smash attack, and this vehicle declares evade as its reaction, this vehicle may perform a free activation immediately after the active vehicle completes its activation. This free activation does not count as the vehicle's activation this gear phase.",
    ruleset: "BASE",
  },
  Turret: {
    phase: "Play",
    rules:
      "This vehicle may count one weapon as turret-mounted without paying for the upgrade.",
    ruleset: "BASE",
  },
  "Up and Over": {
    phase: "Play",
    rules:
      "After resolving a collision with an obstruction of a lower weight class during movement step 1.7, this vehicle may declare a Up and Over to ignore the obstruction for the remainder of its movement step, as it drives right over the top of it. This vehicle cannot declare a Up and Over against another vehicle with the Up and Over special rule.",
    ruleset: "BASE",
  },
  Uppers: {
    phase: "Play",
    rules:
      "If this vehicle is involved in a collision in which both vehicles declare an evade, both vehicles must declare a single stick-shift up immediately after the collision is resolved (gaining a hazard token as per the normal stick-shift rules). If either vehicle is already at its max gear, the stick-shift does not affect that vehicle's current gear, but that vehicle does gain a hazard token.",
    ruleset: "BASE",
  },
};

var allKeywords = { ...vehicleKeywords, ...sponsorKeywords, ...weaponKeywords };

export const keywords = allKeywords;
