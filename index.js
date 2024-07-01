// Import Modules
import globalConfig from "./libs/config.js"
import { getHtml, getArticles, getNextPageUrl } from "./libs/scraper.js"
import { validateCsvFileName } from "./libs/inputValidation.js"
import { writeArticlesToCsv } from "./libs/csv.js"
import PromptSync from 'prompt-sync'

/** Script to save Hacker News articles*/
const saveHackerNewsArticles = async () => {
    // Logic confirming the current setup
    if (globalConfig.url == 'https://news.ycombinator.com/'){

        // Obtain the file name from the user.
        const prompt = PromptSync()
        let fileName = prompt('What would you like to name the file? ')
        
        // Validate that correct file name has been provided from user.
        while(!validateCsvFileName(fileName)){
            fileName = prompt(`Please provide a correct file name ending with '.csv'. `)
        }
        
        let url = globalConfig.url
        let articles = []

        // Ensure that all needed articles are extracted
        while (articles.length < globalConfig.numArticles){
            // Extract the HMTL text from the webpage.
            const htmlText = await getHtml(url)
            
            // Parse the articles from the HTML.
            articles.push(...getArticles(htmlText))
            url = getNextPageUrl(htmlText)
        }
        
        // Write articles to the CSV file.
        writeArticlesToCsv(fileName, articles, globalConfig.numArticles)
    } else {
        console.log(`Sorry, the script is not configured to visit other url's at this time.`)
    }
}

saveHackerNewsArticles()