import { listenerCount } from "events";
import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class CustomersPage {

  pageTitle = element(by.css('app-customers h1'));
  tableResults = element.all(by.css('.mat-row'));
  userOrders = element(by.css('app-orders'));


  async navigateTo(): Promise<unknown> {
    return await browser.get('/customers');
  }

  async getTitleText(): Promise<string> {
    return this.pageTitle.getText();
  }

  async checkTableHeaders(): Promise<string[]> {

    return element.all(by.css('.mat-sort-header-content')).map(el => {
      return el.getText();
    });
  }

  async checkIfTableHasResults(): Promise<number> {

    return this.tableResults.count();
  }

  async selectFirstUser(): Promise<ElementFinder> {

    return this.tableResults.get(0).element(by.css('.mat-column-id'));
  }

  async showOrders(): Promise<boolean> {

    return this.userOrders.isPresent();
  }
}
