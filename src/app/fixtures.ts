import {Ability} from './ability/ability';
import {Power} from './power/power';
import {DiceValue} from "./power/dice-value";

export class Character {
  id:number;
  name:string;
  powers:Power[];
}

let getById = (id:number) => (obj:Ability | Power | Character) => obj.id === id;

var abilities:Ability[] = [
  {id: 1, name: "Thrust", value: DiceValue.Six, description: "Increase damage by 1"},
];

let getAbility = (id:number) => abilities.find(getById(id));

var powers:Power[] = [
  {
    id: 1,
    name: "Jab",
    description: "Jab your enemy. Deal 1 damage..",
    abilities: [
      getAbility(1),
    ],
  },
  {
    id: 2,
    name: "Bludgeon",
    description: "Bludgeon your enemy. Deal 1 damage",
    abilities: [],
  },

];

