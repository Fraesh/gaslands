export const perks = {
  "Double-Barrelled": {
    class: "Aggression",
    cost: 2,
    rules:
      "During the attack step, up to 3 crewmembers in this vehicle may gain a +1 bonus to hit when shooting with a handgun",
    shortRules: "Up to 3 handguns +1 to hit",
    ruleset: "BASE",
  },
  "Boarding Party": {
    class: "Aggression",
    cost: 2,
    rules:
      "This vehicle ignores the distracted rule. Crewmembers in this vehicle may attack during the attack step even if the vehicle is distracted.",
    shortRules: "Ignore distracted",
    ruleset: "BASE",
  },
  Battlehammer: {
    class: "Aggression",
    cost: 4,
    rules:
      "When making a smash attack, this vehicle gains +1 attack dice for each hazard token it currently has.",
    shortRules: "+1 attack dice per hazard during smash attack",
    ruleset: "BASE",
  },
  "Terrifying Lunatic": {
    class: "Aggression",
    cost: 5,
    rules:
      "Whenever a vehicle controlled by another player ends its movement step within short range of this vehicle, the active vehicle gains a hazard token.",
    shortRules:
      "Other players vehicles gain +1 hazard if movement stops within short range",
    ruleset: "BASE",
  },
  Grinderman: {
    class: "Aggression",
    cost: 5,
    rules:
      "Before this Vehicle rolls its attack dice in a smash attack, it may choose to add hazard tokens to the target vehicle for each damage it inflicts, instead of removing hull points.",
    shortRules:
      "Before smash attack may choose to add hazard tokens rather than hull damage",
    ruleset: "BASE",
  },
  "Murder Tractor": {
    class: "Aggression",
    cost: 5,
    rules: "This vehicle may make piledriver attacks, like a War Rig.",
    shortRules: "May use piledriver attack",
    ruleset: "BASE",
  },

  "Powder Keg": {
    class: "Badass",
    cost: 1,
    rules:
      "This vehicle may add +1 to its explosion check. Treat this vehicle as one weight-class heavier when it explodes. Note: this bonus does apply during resolution ot the FIREWORKS perk.",
    shortRules:
      "May add +1 to explosion check. Explosions are +1 weight class (does not affect FIREWORKS perk)",
    ruleset: "BASE",
  },
  "Crowd Pleaser": {
    class: "Badass",
    cost: 1,
    rules: "If this vehicle wipes out, gain +1 audience vote.",
    ruleset: "BASE",
  },
  "Road Warrior": {
    class: "Badass",
    cost: 2,
    rules:
      "Once per activation, if this vehicle has successfully causes one or more hits on an enemy vehicle at any point during this activation, this vehicle may remove a single hazard token at the end of its attack step. ",
    shortRules:
      "Once during activation, if at least 1 hit successful on enemy, -1 hazard tokens",
    ruleset: "BASE",
  },
  "Cover Me": {
    class: "Badass",
    cost: 2,
    rules:
      "Once during its activation this vehicle may remove a hazard token and place it on another friendly vehicle within double range",
    shortRules:
      "During activation, move hazard token to friendly vehicle with double range",
    ruleset: "BASE",
  },
  Madman: {
    class: "Badass",
    cost: 3,
    rules:
      "At the end of this vehicle's Movement Step, if it has 4 or more hazard tokens, it may remove a hazard token and place it on another vehicle within medium range.",
    shortRules:
      "After activation. may move hazard token to vehicle in medium range if hazards 4+",
    ruleset: "BASE",
  },
  "Bullet-Time": {
    class: "Badass",
    cost: 3,
    rules:
      "If this vehicle resolves a slide result during its movement step, this may select one of its weapons to count as turret-mounted for the rest of the activation.",
    shortRules: "",
    ruleset: "BASE",
  },

  "Dead Weight": {
    class: "Built",
    cost: 2,
    rules:
      "During this vehicle's attack step, this vehicle may gain 2 hazards to count as one weight‐class heavier (unless already heavyweight) until the start of it's next activation. ",
    shortRules: "",
    ruleset: "BASE",
  },
  "Barrel Roll": {
    class: "Built",
    cost: 2,
    rules:
      "When this vehicle suffers a flip, it may choose to place the flip template touching the centre of either side edge or the rear edge of this vehicle, and perpendicular to that edge, instead of touching the front edge as normal.",
    shortRules: "",
    ruleset: "BASE",
  },
  Bruiser: {
    class: "Built",
    cost: 4,
    rules:
      "In a collision involving this vehicle, if this vehicle declares a reaction other than evade against an enemy vehicle, the enemy vehicle immediately gains one hazard token.",
    shortRules: "",
    ruleset: "BASE",
  },
  Splashback: {
    class: "Built",
    cost: 5,
    rules:
      "Once per step, when this vehicle loses one or more hull points, make a 1D6 attack against each vehicle within medium range at end of that step.",
    shortRules: "",
    ruleset: "BASE",
  },
  Crusher: {
    class: "Built",
    cost: 7,
    rules:
      "This vehicle gains the Up and Over special rule (see the Monster Truck rules).",
    shortRules: "",
    ruleset: "BASE",
  },
  "Feel No Pain": {
    class: "Built",
    cost: 8,
    rules:
      "During an enemy vehicle's attack step, after an attacker has rolled all of their attack dice against this vehicle, if the attacks causes a total of 2 or fewer uncancelled hits, cancel all remaining hits.",
    shortRules: "",
    ruleset: "BASE",
  },

  "Chrome-Whisperer": {
    class: "Daring",
    cost: 2,
    rules:
      "This vehicle may push it any number of times during a single skid check, gaining 1 hazard token each time.",
    shortRules: "",
    ruleset: "BASE",
  },
  Slippery: {
    class: "Daring",
    cost: 3,
    rules:
      "Vehicles making a smash attack targeting this vehicle suffer a penalty of -2 attack dice",
    shortRules: "Enemies suffer -2 attack dice during samsh attack",
    ruleset: "BASE",
  },
  "Handbreak Artist": {
    class: "Daring",
    cost: 3,
    rules:
      "When applying a spin result, this vehicle may choose to face any direction",
    shortRules: "",
    ruleset: "BASE",
  },
  Evasive: {
    class: "Daring",
    cost: 5,
    rules:
      "Before making an evade roll, this vehicle may gain any number of hazard tokens to add +1 to each of their evade dice for each hazard token gained. A roll of a '1' on an evade dice always counts as a failure.",
    shortRules: "",
    ruleset: "BASE",
  },
  Powerslide: {
    class: "Daring",
    cost: 5,
    rules:
      "This vehicle may use any template except the long straight template instead of the slide template when applying a slide result. As with the movement step 1.1, you must use the first maneuver template you touch. Treat the selected maneuver template as a slide template for purposes of finding the vehicle's final position.",
    shortRules:
      "May use any template, except long straight, to resolve slide results",
    ruleset: "BASE",
  },
  "Stunt Driver": {
    class: "Daring",
    cost: 7,
    rules:
      "This perk may only be taken on a lightweight or middleweight vehicle type with a base handling value of 3 or more. This vehicle may choose to ignore any number of obstructions during its movement step. After any movement step in which this vehicle chooses to ignore any obstruction using this ability, this vehicle immediately gains 3 hazard tokens.",
    shortRules: "",
    ruleset: "BASE",
  },

  "Purifying Flames": {
    class: "Horror",
    cost: 1,
    rules:
      "Once per activation, at the start of this vehicle's activation, this vehicle may suffer up to 3 damage to repair one hull point on a friendly vehicle for each hull point removed by this effect. This damage counts as having the 'Fire' rule . This effect may not be used to raise a vehicle above its hull value. ",
    shortRules: "",
    ruleset: "BASE",
  },
  "Ecstatic Visions": {
    class: "Horror",
    cost: 1,
    rules:
      "Once per activation, at the start of this vehicle's activation, this vehicle may elect to to gain up to 3 hazard tokens to discard one hazard token from a friendly vehicle for each hazard token gained.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Sympathy For The Devil": {
    class: "Horror",
    cost: 1,
    rules:
      "When this vehicle makes an evade check, it's controller may select a friendly vehicle within medium range. Add the current gear of the selected vehicle to this vehicle's current gear for the purposes of this evade check. Both the selected vehicle and this vehicle suffer any unsaved damage from this attack, including any additional effects.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Highway To Hell": {
    class: "Horror",
    cost: 2,
    rules:
      "At the end of its movement step, if this vehicle selected a straight template, this vehicle may suffer 2 damage. This damage counts as having the 'Fire' rule. If any hull points are removed by this effect, this vehicle may leave its movement template (ignoring any slide template) in play as a Napalm dropped weapon template. Remove this template at the start of this vehicle's next activation.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Violent Manifestation": {
    class: "Horror",
    cost: 3,
    rules:
      "When this vehicle is respawned: make an immediate attack (with attack dice based on the weight of the respawned vehicle) against every other vehicle within medium range. This explosion counts as having both the 'Blast' and 'Fire' rules.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Angel of Death": {
    class: "Horror",
    cost: 4,
    rules:
      "Before making an attack, this vehicle may elect to suffer up to three damage to add that many attack dice to a single weapon used in this attack.",
    shortRules: "",
    ruleset: "BASE",
  },

  "Dead-Eye": {
    class: "Military",
    cost: 2,
    rules:
      "During this vehicle's attack step this vehicle may gain a +1 bonus to hit if making a shooting attack at a target within double range and not within medium range. Critical hits still occur only on the natural roll of a 6.",
    shortRules: "",
    ruleset: "BASE",
  },
  Loader: {
    class: "Military",
    cost: 2,
    rules:
      "At the start of its attack step, this vehicle may temporarily reduce its crew value by one, once, until the end of the attack step, to gain +1 bonus to hit with a single weapon. Critical hits still occur only on the natural roll of a 6. ",
    shortRules: "",
    ruleset: "BASE",
  },
  "Fully Loaded": {
    class: "Military",
    cost: 2,
    rules:
      "If a shooting weapon on this vehicle has 3 or more ammo tokens remaining before discarding an ammo token to attack, that weapon gains +1 attack dice.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Rapid Fire": {
    class: "Military",
    cost: 2,
    rules:
      "Once per round, after attacking with a weapon, this vehicle may resolve an additional attack step in which it may only attack with that weapon. ",
    shortRules: "",
    ruleset: "BASE",
  },
  Headshot: {
    class: "Military",
    cost: 4,
    rules:
      "When making a shooting attack, this vehicle's critical hits inflict 3 hits instead of the normal 2 hits.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Return Fire": {
    class: "Military",
    cost: 5,
    rules:
      "Once per gear phase, if this vehicle is the target of a shooting attack, this vehicle may take 2 hazard tokens to immediately attack, as if it was this vehicle's attack step.",
    shortRules: "",
    ruleset: "BASE",
  },

  "Mister Fahrenheit": {
    class: "Precision",
    cost: 2,
    rules:
      "This vehicle cannot gain more than 2 hazards tokens from collisions during a single activation.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Moment of Glory": {
    class: "Precision",
    cost: 2,
    rules:
      "Once per game, after rolling the skid dice, but before resolving the results, this vehicle may immediately change any number of skid dice to any results they choose.",
    shortRules: "",
    ruleset: "BASE",
  },
  Restraint: {
    class: "Precision",
    cost: 2,
    rules:
      "When this vehicle would gain a hazard token for shifting down a gear, this vehicle may remove a hazard token insead.",
    shortRules: "",
    ruleset: "BASE",
  },
  Expertise: {
    class: "Precision",
    cost: 3,
    rules: "This vehicle adds +1 to its handling value.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Trick Driving": {
    class: "Precision",
    cost: 3,
    rules:
      "This vehicle may select a movement template as if its current gear was one higher or one lower.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Easy Rider": {
    class: "Precision",
    cost: 5,
    rules:
      "Once per turn, this vehicle may discard one rolled skid die result before applying the results.",
    shortRules: "",
    ruleset: "BASE",
  },

  "On Your Tail": {
    class: "Pursuit",
    cost: 2,
    rules:
      "When an enemy vehicle resolves a spin or slide move that ends within short range of this vehicle, that vehicle gains +1 hazard token.",
    shortRules: "",
    ruleset: "BASE",
  },
  Schadenfreude: {
    class: "Pursuit",
    cost: 2,
    rules:
      "If another vehicle within short range of this vehicle resolves a wipe out, (either before or after any flip), remove all hazard tokens from this vehicle.",
    shortRules: "",
    ruleset: "BASE",
  },
  Taunt: {
    class: "Pursuit",
    cost: 2,
    rules:
      "At the start of this vehicle's attack step, roll a skid die. If you roll something other than a SHIFT result, you may place that skid die result onto the dashboard of a target vehicle within short range. This skid die result must be resolved during that vehicle's next skid check, and may not be re-rolled.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Out Run": {
    class: "Pursuit",
    cost: 2,
    rules:
      "At the start of this vehicle's attack step, all vehicles within short range of this vehicle and in a current, lower gear than this vehicle gain +1 hazard token.",
    shortRules: "",
    ruleset: "BASE",
  },
  PIT: {
    class: "Pursuit",
    cost: 4,
    rules:
      "During this vehicle's activation, if this vehicle is involved in a non‐head‐on collision with an enemy vehicle, it may declare a 'Pursuit Intervention Technique' (PIT) as its reaction, targeting the enemy vehicle, instead of declaring a smash attack or an evade. If this vehicle declares a PIT, it may select any movement template the target vehicle considers hazardous in its current gear. Immediately after the resolution of this collision, the target vehicle must make a forced move directly forward using the selected movement template.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Unnerving Eye Contact": {
    class: "Pursuit",
    cost: 5,
    rules:
      "Enemy vehicles within short range of this vehicle may not use shift results to remove hazard tokens from their dashboard.",
    shortRules: "",
    ruleset: "BASE",
  },

  "Drive Angry": {
    class: "Reckless",
    cost: 1,
    rules: "Gain 1 hazard token at the start of each activation.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Hog Wild": {
    class: "Reckless",
    cost: 2,
    rules:
      "This vehicle gains +2 smash attack dice during any collision resolved during a wipe out step.",
    shortRules: "",
    ruleset: "BASE",
  },
  "In For A Penny": {
    class: "Reckless",
    cost: 2,
    rules:
      "If this vehicle has gained six or more hazard tokens during this activation, it may double the attack dice of any smash attack for this activation only.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Don't Come Knocking": {
    class: "Reckless",
    cost: 4,
    rules:
      "At the start of this vehicle's activation, it may gain 4 hazard tokens. If it does, this vehicle cannot gain or lose any hazard tokens by any means until the start of its next activation.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Bigger'n You": {
    class: "Reckless",
    cost: 4,
    rules:
      "Double any smash attack bonuses or penalties resulting from weight differences in collisions involving this vehicle.",
    shortRules: "",
    ruleset: "BASE",
  },
  Beerserker: {
    class: "Reckless",
    cost: 5,
    rules:
      "When this vehicle would suffer damage outside of it's activation, reduce that damage by 1, to a minimum of 1.",
    shortRules: "",
    ruleset: "BASE",
  },

  "Hot Start": {
    class: "Speed",
    cost: 1,
    rules:
      "Roll a D6 at the start of the game This vehicle starts the game in that gear. Re-roll if this is above the vehicles amx gear",
    shortRules: "",
    ruleset: "BASE",
  },
  Slipstream: {
    class: "Speed",
    cost: 2,
    rules:
      "If this vehicle is involved in a tailgate collision during its activation, this vehicle may declare a slipstream reaction. If they do, they other vehicle may not declare a reaction. If this vehicle declares a slipstream reaction: this vehicle may change up or down one gear and gains a hazard token. Neither vehicle gains hazard tokens as a result of this collision.",
    shortRules: "",
    ruleset: "BASE",
  },
  Overload: {
    class: "Speed",
    cost: 2,
    rules:
      "When making a skid check, this vehicle may roll one additional skid die. If it does, it must change up at least one gear or gain a hazard token.",
    shortRules: "",
    ruleset: "BASE",
  },
  Downshift: {
    class: "Speed",
    cost: 3,
    rules:
      "At the end of a movement step in which this vehicle changed down one or more gears, this vehicle may immediately make a forced short straight movement forward.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Time Extended!": {
    class: "Speed",
    cost: 3,
    rules:
      "At the end of an activation in which this vehicle passes a gate, before checking for wipeouts, this vehicle may immediately remove any number of hazard tokens.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Hell For Leather": {
    class: "Speed",
    cost: 5,
    rules:
      "This vehicle considers long straight to he permitted in any gear. The long straight is not considered either hazardous or trivial in any gear.",
    shortRules: "",
    ruleset: "BASE",
  },

  "Rocket Thrusters": {
    class: "Technology",
    cost: 1,
    rules:
      "When this vehicle is moved as part of a flip, it may choose to use the long straight, veer or gentle templates instead of the medium straight template.",
    shortRules: "",
    ruleset: "BASE",
  },
  Whizbang: {
    class: "Technology",
    cost: 1,
    rules:
      "At the start of each game, this vehicle gains a random SPEED PERK. This perk is lost at the end of the game.",
    shortRules: "",
    ruleset: "BASE",
  },
  Gyroscope: {
    class: "Technology",
    cost: 1,
    rules:
      "At the start of each game, this vehicle gains a random DARING PERK. This perk is lost at the end of the game.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Satellite Navigation": {
    class: "Technology",
    cost: 2,
    rules:
      "When this vehicle resolves its skid dice, this vehicle's controller may set aside one shift result. This vehicle may have any number of shift results set aside. Any vehicle in this team may use these set aside shift results during a later movement step, as if they had rolled them in that movement step. ",
    shortRules: "",
    ruleset: "BASE",
  },
  "Mobile Mechanic": {
    class: "Technology",
    cost: 3,
    rules:
      "Once per activation, at the start of its attack step, this vehicle may temporarily reduce its crew value by one, once, until the end of the attack step, to perform a field repair. If it does, this vehicle gains 1 hull point, which may not take its hull points above the vehicle's hull value.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Eureka!": {
    class: "Technology",
    cost: 4,
    rules:
      "Once per game, at the start of its attack step, this vehicle's controller may declare any weapon that this vehicle has not attacked with yet this game. This vehicle counts as being armed with the declared weapon, on a facing of their choice, for the next attack only.",
    shortRules: "",
    ruleset: "BASE",
  },

  Fenderkiss: {
    class: "Tuning",
    cost: 2,
    rules:
      "When this vehicle makes a smash attack, this vehicle suffers a penalty of -2 attack dice. Vehicles making a smash attack targeting this vehicle suffer a penalty of -2 attack dice. ",
    shortRules: "",
    ruleset: "BASE",
  },
  "Rear Drive": {
    class: "Tuning",
    cost: 2,
    rules:
      "This vehicle may pivot about the centre of its front edge, rather than the centre of the vehicle, when resolving Spin results.",
    shortRules: "",
    ruleset: "BASE",
  },
  "Delicate Touch": {
    class: "Tuning",
    cost: 3,
    rules: "This vehicle ignores the hazard icons on maneuver templates.",
    shortRules: "",
    ruleset: "BASE",
  },
  Momentum: {
    class: "Tuning",
    cost: 3,
    rules:
      "When resolving skid dice, this vehicle may set aside a Slide or Spin result to re-roll a skid dice. The effect may be used multiple times.  Set aside results must be resolved.",
    shortRules: "",
    ruleset: "BASE",
  },
  Purring: {
    class: "Tuning",
    cost: 6,
    rules:
      "This vehicle does not receive more than 1 hazard token from Spin results each turn. This vehicle does not receive more than 1 hazard token from Slide results each turn. This vehicle does not receive more than 1 hazard token from Hazard results each turn.",
    shortRules: "",
    ruleset: "BASE",
  },
  Skiing: {
    class: "Tuning",
    cost: 6,
    rules:
      "If this vehicle has handling 3 or higher, this vehicle may take 3 hazard tokens at the end of its activation to be ignored by other vehicles during their movement steps until the start of this vehicle's next activation. If, by ignoring this vehicle in this way, a vehicle's final position would overlap it, move that vehicle backwards along their maneuver template by the minimum amount to avoid overlapping any obstruction.",
    shortRules: "",
    ruleset: "BASE",
  },
};

export const perkClasses = Array.from(
  new Set(Object.values(perks).map((p) => p.class))
);
