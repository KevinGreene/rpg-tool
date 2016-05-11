import { RpgToolPage } from './app.po';

describe('rpg-tool App', function() {
  let page: RpgToolPage;

  beforeEach(() => {
    page = new RpgToolPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rpg-tool works!');
  });
});
