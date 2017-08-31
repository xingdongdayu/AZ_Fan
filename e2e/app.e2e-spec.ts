import { FanPage } from './app.po';

describe('fan App', () => {
  let page: FanPage;

  beforeEach(() => {
    page = new FanPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
