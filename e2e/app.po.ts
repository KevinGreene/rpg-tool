export class RpgToolPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rpg-tool-app h1')).getText();
  }
}
