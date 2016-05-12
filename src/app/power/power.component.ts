import {Component, OnInit, Input} from '@angular/core';
import {Power} from './power';

@Component({
  moduleId: module.id,
  selector: 'power-detail',
  templateUrl: 'power.component.html',
  styleUrls: ['power.component.css']
})
export class PowerComponent implements OnInit {
  @Input()
  power:Power;

  constructor() {
  }

  ngOnInit() {
  }

}
