import { Angular4ExamplesPage } from './app.po';

describe('angular4-examples App', () => {
  let page: Angular4ExamplesPage;

  beforeEach(() => {
    page = new Angular4ExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
