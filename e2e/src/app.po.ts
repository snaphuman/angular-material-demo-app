import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(url: string): Promise<unknown> {
    return await browser.get(url);
  }
}
