import { listenerCount } from "events";
import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class CustomersPage {

  pageTitle = element(by.css('app-customers h1'));


  async navigateTo(): Promise<unknown> {
    return await browser.get('/customers');
  }

  async getTitleText(): Promise<string> {
    return this.pageTitle.getText();
  }

  async tableHeaders(): Promise<string[]> {

    return element.all(by.css('.mat-sort-header-content')).map(el => {
      return el.getText();
    });
  }
}
