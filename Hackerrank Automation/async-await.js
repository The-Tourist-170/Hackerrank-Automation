const puppeteer = require("puppeteer"), 
        ans = require('./codes.js');
let page;
const logLink = "https://www.hackerrank.com/auth/login",
        email = "kanekiken@hotsoup.be",
            pass = "#Hack.2002";

(async function(){
    try {
        const bwrOpen = await puppeteer.launch({
            headless:false,
            defaultViewport: null,
            slowMo: true,
            args:["--start-maximized"]
        });        

        const newTab = await bwrOpen.newPage();
        await newTab.goto(logLink);
        console.log("Browser Opened.");
        await newTab.type("input[type='text']", email, {delay: 50});        
        await newTab.type("input[type='password']", pass, {delay: 50});        
        await WNC("button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", newTab);    
        console.log("Logged in Successfully.");
        await WNC(".topic-card a[data-attr1='algorithms'].topic-link", newTab);    
        console.log("Clicked on Algorithms.");    
        await WNC('input[value="warmup"]', newTab);    
        console.log("Warmup Checked.");    
        const quesArr = await newTab.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled');        
        console.log("Number of Questions: ", quesArr.length);
        quesSolver(newTab, quesArr[0], ans.answers[0]);
    } catch (error) {
        console.log(error);
    }
})();

async function WNC (Sel, cPage){
    await cPage.waitForSelector(Sel, {visible: true})
    return cPage.click(Sel);    
}

async function quesSolver(page, ques, answer){
    try {
        await ques.click();
        console.log("Question Clicked.");
        await WNC('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
        console.log("Editor Clicked.");
        await WNC('.checkbox-input', page);
        console.log("Custom Test Case Checked.");
        await page.type('.input.text-area.custominput.auto-width', answer, {delay: 10});
        console.log("Code Copied.");
        await page.keyboard.down('Control');
        await page.keyboard.press('A', {delay:100});
        await page.keyboard.press('X', {delay:100});
        console.log("The Code has been Cut from the Custom Test Case Input Box.");
        await page.keyboard.up('Control');
        await WNC('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
        console.log("Editor Clicked again for Copying Code.");
        await page.keyboard.down('Control');
        await page.keyboard.press('A', {delay:100});
        await page.keyboard.press('V', {delay:100});
        console.log("The Code has been copied.");
        await page.keyboard.up('Control');
        await WNC('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', page);
        console.log("Code Submitted successfully.");
    } catch (error) {
        console.log(error);        
    }
}