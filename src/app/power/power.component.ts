import {Component, OnInit, Input} from "@angular/core";
import {Power} from "./power";
import {PowerEditComponent} from "./edit/edit.component";
import {DiceValue} from "./dice-value";

var POWERS:Power[] = [
  {
    id: 1,
    name: "Jab",
    description: "Jab your enemy",
    abilities: [{id: 1, name: "Thrust", value: DiceValue.Six, description: "Increase damage by 1"}]
  },
  {id: 2, name: "Bludgeon", description: "Bludgeon your enemy", abilities: []},
];


@Component({
  moduleId: module.id,
  selector: 'power-component',
  templateUrl: 'power.component.html',
  styleUrls: ['power.component.css'],
  directives: [PowerEditComponent],
})
export class PowerComponent implements OnInit {
  powers:Power[] = POWERS;
  selectedPower:Power;

  onSelect(power:Power) {
    this.selectedPower = power;
  }

  constructor() {
  }

  ngOnInit() {
  }

}
