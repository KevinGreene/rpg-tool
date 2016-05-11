import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RpgToolAppComponent } from '../app/rpg-tool.component';

beforeEachProviders(() => [RpgToolAppComponent]);

describe('App: RpgTool', () => {
  it('should create the app',
      inject([RpgToolAppComponent], (app: RpgToolAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rpg-tool works!\'',
      inject([RpgToolAppComponent], (app: RpgToolAppComponent) => {
    expect(app.title).toEqual('rpg-tool works!');
  }));
});
