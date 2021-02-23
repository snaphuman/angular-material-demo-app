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
    expect(await page.checkTableHeaders()).toEqual(columns);
  });

  it('should have at least one result in table', async() => {

    let result = await page.checkIfTableHasResults()
    expect(result).toBeGreaterThan(0);
  });

  it('should read customer id value from customers table', async() => {

    let value = await (await page.selectFirstUser()).getText();
    expect(value).toBe('1');
  });

  it('should show customer order details', async() => {

    await (await page.selectFirstUser()).click();
    expect(await page.showOrders()).toBe(true);
  })
});
