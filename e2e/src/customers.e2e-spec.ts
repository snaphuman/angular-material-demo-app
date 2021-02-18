import { CustomersPage } from './customers.po';
import { browser, ElementFinder, logging, protractor } from 'protractor';

describe ('Customers Page', () => {

  let page: CustomersPage = new CustomersPage();

  it('should redirect to customers page', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Customers');
  });

  it('should have corresponding header names', async () => {
    let columns = ['Id', 'Name', 'City', 'Order total'];

    expect(await page.tableHeaders()).toEqual(columns);

  });
});
