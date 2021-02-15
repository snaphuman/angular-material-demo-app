import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(url: string): Promise<unknown> {
    return await browser.get('/customers')
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .mat-card-content h1')).getText();
  }
}
