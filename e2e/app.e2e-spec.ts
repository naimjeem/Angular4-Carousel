import { Ng4CarouselPage } from './app.po';

describe('ng4-carousel App', () => {
  let page: Ng4CarouselPage;

  beforeEach(() => {
    page = new Ng4CarouselPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
