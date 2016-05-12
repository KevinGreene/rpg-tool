import {Component, OnInit, Input} from '@angular/core';
import {Power} from './../power';
import {AbilityComponent} from "../../ability/ability.component.ts";

@Component({
  moduleId: module.id,
  selector: 'power-detail',
  templateUrl: 'power.component.html',
  styleUrls: ['power.component.css'],
  directives: [AbilityComponent],
})
export class PowerComponent implements OnInit {
  @Input()
  power:Power;

  constructor() {
  }

  ngOnInit() {
  }

}
