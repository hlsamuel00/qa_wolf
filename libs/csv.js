import { createObjectCsvWriter as createCsvWriter } from "csv-writer"

/**
 * Writes the specified number of articles to a csv file
 * @param {string} fileName The name of the file received from the user
 * @param {Article[]} articles a list of Article objects from the web scrape
 * @param {number} numArticles The number of articles to write to the csv file
*/
const writeArticlesToCsv = async (fileName, articles, numArticles) => {
    // Configure the CSV writer
    const csvWriter = createCsvWriter({
        path: fileName,
        header: [
            {id: 'title', title: 'Title'},
            {id: 'url', title: 'URL'}
        ]
    })

    // Write the articles to the file
    await csvWriter.writeRecords(articles.slice(0, numArticles))
        .then(() => console.log(`Top ${numArticles} articles have been written to ${fileName}.`))
}

export { writeArticlesToCsv }