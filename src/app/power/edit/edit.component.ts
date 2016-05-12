import {Component, OnInit, Input} from '@angular/core';
import {Power} from '../power';
import {AbilityComponent} from "../../ability/ability.component";

@Component({
  moduleId: module.id,
  selector: 'power-detail',
  templateUrl: 'edit.component.html',
  styleUrls: ['edit.component.css'],
  directives: [AbilityComponent],
})
export class PowerEditComponent implements OnInit {
  @Input()
  power:Power;

  constructor() {
  }

  ngOnInit() {
  }

}
