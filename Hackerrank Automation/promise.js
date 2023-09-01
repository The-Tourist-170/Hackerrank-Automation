const puppeteer = require("puppeteer"), 
        ans = require('./codes.js');
let page;
const logLink = "https://www.hackerrank.com/auth/login",
        email = "ayushyasaxena2020@outlook.com",
            pass = "#Hack.2002";
const bwrOpen = puppeteer.launch({
    headless:false,
    defaultViewport: null,
    slowMo: true,
    args:["--start-maximized"]
});
bwrOpen.then(function (browser){
    return browser.newPage();
}).then(function (newTab){
    page = newTab;
    return page.goto(logLink);
}).then(function (){
    console.log("Browser Opened.");
}).then(function (){
    return page.waitForSelector("input[type='text']");
}).then(function (){
    return page.type("input[type='text']", email, {delay: 50});
}).then(function (){
    return page.waitForSelector("input[type='password']");
}).then(function (){
    return page.type("input[type='password']", pass, {delay: 50});
}).then(function () {
    return WNC("button.ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled", page);
}).then(function (){
    console.log("Logged in Successfully.");    
}).then(function (){
    return WNC(".topic-card a[data-attr1='algorithms'].topic-link", page);
}).then(function (){
     console.log("Clicked on Algorithms.");
}).then(function (){
    return WNC('input[value="warmup"]', page);
}).then(function (){
    console.log("Warmup Checked.");
}).then(function (){
     return page.$$('.ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled')
}).then(function (quesArr){
    console.log("Number of Questions: ", quesArr.length);
    return quesSolver(page, quesArr[0], ans.answers[0]);
})

function WNC (Sel, cPage){
    return new Promise(function (res, rej){
        cPage.waitForSelector(Sel, {visible: true})
        .then(function (){
            return cPage.click(Sel);
        }).then(function (){
            res();
        }).catch(function (err){
            rej();
        })
    })
}

function quesSolver(page, ques, answer){
    return new Promise(function (res, rej){
        ques.click()
        .then(function (){
            console.log("Question Clicked.");
        })
        .then(function (){
            return WNC('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
        })
        .then(function (){
            console.log("Editor Clicked.");            
        })
        .then(function (){
            return WNC('.checkbox-input', page);
        })
        .then(function (){
            console.log("Custom Test Case Checked.");
        })
        .then(function (){
            return page.waitForSelector('.input.text-area.custominput.auto-width', page);
        })
        .then(function (){
            return page.type('.input.text-area.custominput.auto-width', answer, {delay: 10})
        })
        .then(function (){
            console.log("Code Copied.");
        })
        .then(function (){
            return page.keyboard.down('Control');
        })
        .then(function (){
            return page.keyboard.press('A', {delay:100});
        })
        .then(function (){
            return page.keyboard.press('X', {delay:100});
        })
        .then(function (){
            console.log("The Code has been Cut from the Custom Test Case Input Box.");
        })
        .then(function (){
            return page.keyboard.up('Control');
        })
        .then(function (){
            return WNC('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
        })
        .then(function (){
            console.log("Editor Clicked again for Copying Code.");
        })
        .then(function (){
            return page.keyboard.down('Control');
        })
        .then(function (){
            return page.keyboard.press('A', {delay:100});
        })
        .then(function (){
            return page.keyboard.press('V', {delay:100});
        })
        .then(function (){
            console.log("The Code has been copied.");
        })
        .then(function (){
            return page.keyboard.up('Control');
        })
        .then(function (){
            return WNC('.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', page);
        })
        .then(function (){
            console.log("Code Submitted successfully.");
        })
        .then(function (){
            res();
        })
        .catch(function (err){
            rej();
        })
    })
}