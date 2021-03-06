import { UnitTypes } from "../index";

export default {
  [UnitTypes.Pawn]: {
    type: UnitTypes.Pawn,
    name: "Pawn",
    cost: 1,
    health: 6,
    attack: 1,
    moves: 0,
  },

  [UnitTypes.Officer]: {
    type: UnitTypes.Officer,
    name: "Officer",
    cost: 2,
    health: 6,
    attack: 2,
    moves: 0,
  },

  [UnitTypes.Horse]: {
    type: UnitTypes.Horse,
    name: "Horse",
    cost: 3,
    health: 5,
    attack: 3,
    moves: 0,
  }
};
