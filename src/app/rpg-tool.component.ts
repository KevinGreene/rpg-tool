import {Component} from '@angular/core';
import {Power} from './power/power.ts';
import {DiceValue} from './power/dice-value';
import {Routes, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {PowerComponent} from "./power/power.component";

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
  selector: 'rpg-tool-app',
  templateUrl: 'rpg-tool.component.html',
  styleUrls: ['rpg-tool.component.css'],
  directives: [PowerComponent],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/power', component: PowerComponent}
])
export class RpgToolAppComponent {
  title = 'rpg-tool';
}
