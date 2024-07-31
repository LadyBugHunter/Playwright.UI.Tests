import { test, expect, Page, BrowserContext } from '@playwright/test';
import PageObjectModel from '../pages/PageObjectModel';

let page: Page;

test.describe('Integrat Website Test Cases', () => {

   test.beforeEach(async ({ page }) => {
    await page.goto('/');
  }); 

  test('Given a user wants to access the webpage, then user is able to access the page and receives expected URL', async ({ page }) => {
    await expect(page).toHaveURL('https://accessintegra.com/')
  });

  test('Given user accesses the webpage, then Company logo is visible', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await expect(pageObjectModel.integraLogo).toBeVisible();
  });

  test('Given user accesses the webpage, then Careers button is visible and enabled', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await expect(pageObjectModel.careersButton).toBeVisible();
    await expect(pageObjectModel.careersButton).toBeEnabled();
  });

  test('Given user accesses the webpage, then clicks on Careers button then Careers page opens', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await pageObjectModel.clickOnCareers();

    await expect(page.getByRole('heading', { name: 'Careers' })).toBeVisible();
  });

  test('Given user accesses the webpage, then Contact Us button is visible and enabled', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await expect(pageObjectModel.contactUsButton).toBeVisible();
    await expect(pageObjectModel.contactUsButton).toBeEnabled();
  });

  test('Given user accesses the webpage, then clicks on Contact Us button then Contact Us page opens', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await pageObjectModel.clickOnContactUs();

    await expect(page.getByRole('heading', { name: 'CONTACT US' })).toBeVisible();
  });

  test('Given user accesses the webpage, then Login button is visible and enabled', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await expect(pageObjectModel.loginButton).toBeVisible();
    await expect(pageObjectModel.loginButton).toBeEnabled();
  });

  test('Given user accesses the webpage, then clicks on Login button then Login options page opens', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await pageObjectModel.clickOnLoginButton();

    await expect(page.getByRole('heading', { name: 'Provider LOG IN' })).toBeVisible();
  });

  test('Given user accesses the webpage, then Join Today button is visible and enabled', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await expect(pageObjectModel.joinTodayButton).toBeVisible();
    await expect(pageObjectModel.joinTodayButton).toBeEnabled();
  });

  test('Given user accesses the webpage, then clicks on Join Today button then page opens', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await pageObjectModel.clickOnJoinTodayButton();

    await expect(page.getByRole('heading', { name: 'GROW YOUR NETWORK AND' })).toBeVisible();
  });

  test('Given user accesses the webpage, then Search button is visible and editabe', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await expect(pageObjectModel.searchButton).toBeVisible();
    await expect(pageObjectModel.searchButton).toBeEditable();
  });

  test('Given user accesses the webpage, then clicks on Search button and receives search results based on search criteria', async ({ page }) => {
    const pageObjectModel = new PageObjectModel(page)
    await pageObjectModel.clickOnSearchButton()
    await pageObjectModel.enterSearchCriteria()
    await pageObjectModel.searchPlaceHolder.press('Enter');
    
    await expect(page.getByRole('heading', { name: 'Search Results for: health' })).toBeVisible();
  });

  test.afterEach(async ({ browser }) => {
    const contexts = browser.contexts();
    for (const context of contexts) {
      const pages = await context.pages();
      //Close all pages in the context
      for (const page of pages) {
        await page.close();
      }
    }
    //Close browser contexts
     for (const context of contexts){
    await context.close();
    }
  });
})