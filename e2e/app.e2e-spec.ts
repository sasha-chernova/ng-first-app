import { BamGmPage } from './app.po';

describe('bam-gm App', () => {
  let page: BamGmPage;

  beforeEach(() => {
    page = new BamGmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
