const { chromium } = require("playwright-chromium");
const { expect } = require("chai");
const host = "http://127.0.0.1:5500/01.Messenger/index.html";

describe("Tests", async function () {
    this.timeout(10000);

    let browser, page;

    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 1000 });
    });

    after(async () => {
        await browser.close();
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        page.close();
    });

    // it('works', async () => {
    //     await new Promise(r => setTimeout(r, 2000));
    //     expect(1).to.equal(1);
    // });

    it("loads chat", async () => {
        await page.goto(host);
        await page.click('#refresh');
    });

    it("send text", async () => {
        await page.goto(host);

        await page.fill("#author", "Name");
        await page.fill("#content", "Content");
        await page.click("#submit");
        await page.click('#refresh');
    });
});
