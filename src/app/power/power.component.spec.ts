import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {PowerComponent} from './power.component';

describe('Component: Power', () => {
  let builder:TestComponentBuilder;

  beforeEachProviders(() => [PowerComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb:TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([PowerComponent],
    (component:PowerComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(PowerComponentTestController)
      .then((fixture:ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(PowerComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-power></app-power>
  `,
  directives: [PowerComponent]
})
class PowerComponentTestController {
}

