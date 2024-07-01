/** A class representing the scraper configuration */
class Config{
    /**
     * create -- web scraper configuration
     * @param {string} url - The URL to extract the articles from
     * @param {number} numArticles - The number of articles to write to the csv
    */
    constructor(url, numArticles){
        /**
         * @private
         * @type {string} The URL to extract the the articles from
         */
        this.url = url

        /**
         * @private 
         * @type {number} The number of articles to write to the csv
        */
        this.numArticles = numArticles
    }
}

// Initialize an instance of the configuration class with the requested URL and number of articles
const globalConfig = new Config('https://news.ycombinator.com/', 10)

export default globalConfig