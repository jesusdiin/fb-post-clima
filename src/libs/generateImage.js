const puppeteer = require('puppeteer');

// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();

//     page.setViewport({width:1080, height:1350, deviceScaleFactor:1})

//     await page.goto('https://blog.dinomx.com');
//     await page.screenshot({path: 'example2.png'});

//     await browser.close();
// })();

const screen = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    page.setViewport({width:1080, height:1350, deviceScaleFactor:1})

    await page.goto('https://clima.lamaschingona.com.mx/post');
    await page.screenshot({path: `src/public/img/temp/clima.png`});

    await browser.close();
};
// screen()
export default screen;