import { getHtml, getArticles, getNextPageUrl } from "./scraper.js"
import { describe, test, expect, jest } from "@jest/globals"


const normalArticlesHtml = `
<html>
    <head></head>
    <body>
        <table class='allthethings'>
            <caption class='title'>This is a mock table</caption>
            <tbody class='athings'>
                <tr class='athing'>
                    <td class='title'>
                        <span class='titleline'>
                            <a href='https://www.testy.com'>Test Example</a>
                        </span>
                    </td>
                </tr> 
                                <tr class='athing'>
                    <td class='title'>
                        <span class='titleline'>
                            <a href='https://www.example.com'>Example</a>
                        </span>
                    </td>
                </tr> 
                                <tr class='athing'>
                    <td class='title'>
                        <span class='titleline'>
                            <a href='https://www.nexttest.com'>Another Example</a>
                        </span>
                    </td>
                </tr> 
                                <tr class='athing'>
                    <td class='title'>
                        <span class='titleline'>
                            <a href='https://www.herewegoagain.com'>Yet Another Example</a>
                        </span>
                    </td>
                </tr> 
                                <tr class='athing'>
                    <td class='title'>
                        <span class='titleline'>
                            <a href='https://www.title.com'>Tricky Example</a>
                        </span>
                    </td>
                </tr> 
                                <tr class='athing'>
                    <td class='title'>
                        <span class='titleline'>
                            <a href='https://www.almostdone.com'>Last Example</a>
                        </span>
                    </td>
                </tr>
                <tr>
                    <td> 
                        <a href='?p=thenextpage' class='morelink'>Next Page</a>
                    </td>
                <tr> 
            </tbody>
        </table>
    </body>   
</html>
`
describe('Testing scraper.js', () => {
    test('Ensure getArticles() can extract articles from html string.', () => {
        const expected = [
            {
                title: 'Test Example',
                url: 'https://www.testy.com/'
            },
            {
                title: 'Example',
                url: 'https://www.example.com/'
            },            {
                title: 'Another Example',
                url: 'https://www.nexttest.com/'
            },            {
                title: 'Yet Another Example',
                url: 'https://www.herewegoagain.com/'
            },            {
                title: 'Tricky Example',
                url: 'https://www.title.com/'
            },            {
                title: 'Last Example',
                url: 'https://www.almostdone.com/'
            },
        ]

        const articles = getArticles(normalArticlesHtml)
        expect(articles).toEqual(expected)
    })

    test('Ensure that the getNextPageUrl() can extract the link from the html string.', () => {
        const expected = 'https://news.ycombinator.com/?p=thenextpage'
        
        expect(getNextPageUrl(normalArticlesHtml)).toEqual(expected)
    })

})