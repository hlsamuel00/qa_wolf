import { chromium } from 'playwright'
import globalConfig from './config.js'
import jsdom from 'jsdom'
const { JSDOM } = jsdom
global.DOMParser = new JSDOM().window.DOMParser


/**
 * Navigates to the requested URL and extracts the HTML data of the first page
 * @param {string} url The URL string to visit for web scraping
 * @returns {string} The string representation of the HTML extracted from the web page
*/
const getHtml = async (url) => {
    // Launch the browser
    const browser = await chromium.launch({ headless: false });
    
    // Create a new page in the browser
    const page = await browser.newPage();
    
    // Navigate to the requested URL
    await page.goto(url)

    // Extract the HTML data from the web page and close the browser
    const htmlText = await page.content()
    browser.close()

    console.log(`Navigating to webpage and extracting HTML...`)

    return htmlText
}

/**
 * An object containing the title property and url property which both hold strings
 * @typedef {object} Article
 * @property {string} title - The title of the article
 * @property {string} url - The URL of the article
 */

/**
 * Extracts article data from the HTML string
 * @param {string} htmlText The string representation of HTML
 * @returns {Article[]} An array of article objects extracted from the HTML
*/
const getArticles = (htmlText) => {
    // Initialize a parser to extract data from the HTML string
    const parser = new DOMParser()

    // Initialize an array containing all of the articles from the HTML text
    const rows = Array.from(parser.parseFromString(htmlText, 'text/html').querySelectorAll('.athing'))

    console.log(`Parsing HTML and extracting article data...`)

    // Map over the existing array of articles by extracting the Title and URL of the article and return it
    return rows.map(row => {
        const titleNode = row.querySelector('.titleline a')
        const title = titleNode.text
        let url = titleNode.href

        // Logic to convert internal page links to full URLs
        if(url.slice(0,4) != 'http'){
            url = globalConfig.url + url
        }

        return {title, url} 
    })
}

/**
 * Extracts the next page URL from the HTML string
 * @param {string} htmlText The string representation of HTML
 * @returns {string} The string of the next page URL
*/
const getNextPageUrl = (htmlText) => {
    // Initialize parser to extract data from HTML text
    const parser = new DOMParser()

    // Extract the link to the next page from the HTML script and return it.
    const moreLink = parser.parseFromString(htmlText, 'text/html').querySelector('.morelink').href
    return globalConfig.url + moreLink
}

export { getHtml, getArticles, getNextPageUrl }