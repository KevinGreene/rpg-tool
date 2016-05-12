import {Component, OnInit, Input} from '@angular/core';
import {Power} from '../power';
import {AbilityComponent} from "../../ability/ability.component";

@Component({
  moduleId: module.id,
  selector: 'power-detail',
  templateUrl: 'show.component.html',
  styleUrls: ['show.component.css'],
  directives: [AbilityComponent],
})
export class PowerShowComponent implements OnInit {
  @Input()
  power:Power;

  constructor() {
  }

  ngOnInit() {
  }

}
