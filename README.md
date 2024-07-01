# 🐺 QA Wolf Take Home Assignment

Welcome to the QA Wolf take home assignment for our [QA Engineer](https://www.notion.so/qawolf/QA-Wolf-QA-Engineer-Remote-156203a1e476459ea5e6ffca972d0efe) role! We appreciate your interest and look forward to seeing what you come up with.

## Quick Links
- [Setup, Usage, and Testing Instructions](#hacker-news-article-csv-generator)
- [Assignment Instructions](#instructions)

[Why QA Wolf](https://github.com/hlsamuel00/qa_wolf/assets/96807396/a308c0b6-a80a-4052-9ee0-a913862b64d1)

## Instructions

This assignment has two questions as outlined below. When you are done, send [qa-hiring@qawolf.com](mailto:qa-hiring@qawolf.com) a link to a zip file of this folder on Google Drive. Additionally, please include your work location (Country/State) in the email.

### Question 1

In this assignment, you will create a basic script on [Hacker News](https://news.ycombinator.com/) using JavaScript and Microsoft's [Playwright](https://playwright.dev/) framework.

1. Install node modules by running `npm i`.

2. Edit the `index.js` file in this project to go to [Hacker News](https://news.ycombinator.com/) and save the title and URL of the top 10 articles to a CSV file. You can run your script with the `node index.js` command.

Note that you are welcome to update Playwright or install other packages as you see fit.

### Question 2

Why do you want to work at QA Wolf? Please record a short, ~1 min, video with your answer and post a link in `why_qa_wolf.txt` (Please use [Loom](https://www.loom.com) to record your response)

## Frequently Asked Questions

### What is your hiring process? When will I hear about next steps?

This take home assignment is the first step in our hiring process, followed by a final round interview if it goes well. **We review every take home assignment submission and promise to get back to you either way within one week (usually sooner).** The only caveat is if we are out of the office, in which case we will get back to you when we return. If it has been more than one week and you have not heard from us, please do follow up.

The final round interview is a 2-hour technical work session that reflects what it is like to work here. We provide a $100 stipend for your time for the final round interview regardless of how it goes. After that, there may be a short chat with our director about your experience and the role.

Our hiring process is rolling where we review candidates until we have filled our openings. If there are no openings left, we will keep your contact information on file and reach out when we are hiring again.

### How do you decide who to hire?

We evaluate candidates based on three criteria:

- Technical ability (as demonstrated in the take home and final round)
- Customer service orientation (as this role is customer facing)
- Alignment with our values (captured [here](https://www.notion.so/qawolf/QA-Wolf-QA-Engineer-Remote-156203a1e476459ea5e6ffca972d0efe))

This means whether we hire you is based on how you do during our interview process, not on your previous experience (or lack thereof). Note that you will also need to pass a background check to work here as our customers require this.

### How can I help my application stand out?

We've found that our best hires have been the most enthusiastic throughout our process. If you are very excited about working here, please feel free to go above and beyond on this assignment.

# Hacker News Article CSV Generator

This script accesses the Hacker News website, extracts the top 10 articles, and saves them to a CSV file for later use. The script utilizes Playwright for web scraping and csv-writer for generating the CSV file.

## Packages/Dependencies Used
- `csv-writer` for generating the CSV file
- `jsdom` for extracting data from HTML
- `playwright` for webscraping
- `prompt-sync` for user input
- `jest` for testing

This script was written in JavaScript with a simple architecture. The script requests a file name from the user to save the data extracted via a prompt. Once the file name is correctly provided, it navigates to the outlined web address and extracts the HTML data of the web page, parses the HTML data to extract the titles and url's of the articles, and saves the data to a CSV file.

## Setup Instructions

### Cloning the repository
Clone the repository to your local machine.
```bash
git clone GIT URL
```

### Installing Dependencies
Navigate to the project directory and install the dependencies:
```bash
npm install
```

### Configuration
1. Navigate to the `libs` directory and locate a file named `config.js`
2. Ensure the URL and number of articles are configured to the correct specifications.
    - Currently the script is set to extract 10 articles from Hacker News

## Testing 
The script currently supports tests for both the web scraper module to ensure effective parsing of the data from the HTML test, and the input validation module to ensure a correct file name is provided to write the data to.

### Prerequisites
Before running tests, ensure that you have the required dependencies installed: 
```bash
npm install
```

### Running the Tests
To run the test, use:
```bash
npm test
```

### Test Structure
- inputValidation Tests: These tests ensure that the input validator correctly handles instances of correct incorrect file names received from the user.
- scraper Tests: These tests verify that the information is correctly extracted from the HTML text pulled from the requested website.

### Testing Explanation
By running `npm test`, you will execute all the tests in the application and receive feedback on whether the modules function as expected. The tests ensure that the data processed from the HTML is accurately parsed and the responses are reliable and maintain the scripts's integrity.

## Usage
1. Run the script using
```bash
node index.js
```
2. Once the script is run, a prompt will appear in the console requesting a file name. 
3. Ensure a file name is provided that ends with `.csv` and press `Enter`.
    - Example: ```bash
    What would you like to name the file? data.csv
    ```
4. A status message will appear in the console
    - Example: ```bash
    Navigating to webpage and extracting HTML...
    ```
5. Another status message will appear in the console
    - Example: ```bash
    Parsing HTML and extracting article data...
    ```
4. A confirmation message will appear in the console advising the set number of articles have been written to the file name provided
    - Example: ```bash
    Top 10 articles have been written to data.csv.
    ```
5. The file has been saved to the root directory.

### Example Output
The generated CSV file will have the following structure:
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>URL</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Example Article 1</td>
            <td>https://example.com/article1/</td>
        </tr>
        <tr>
            <td>Example Article 2</td>
            <td>https://example.com/article2/</td>
        </tr>
        <tr>
            <td>...</td>
            <td>...</td>
        </tr>
    </tbody>
</table>

## File Structure
- `index.js`: Main script that scrapes Hacker News and saves the article's titles and URL's to a CSV file.
- `inputValidation.js`: Contains the `validateCsvFileName` method to validate user input for the CSV file name.
- `inputValidation.test.js`: Jest test file for testing the `validateCsvFileName` method.
- `scraper.js`: Contains the functions `getHtml` and `getArticles` for fetching and parsing the HTML content from Hacker News.
- `scraper.test.js`: Jest test file for testing the `getArticles` method.
 
## Video Demonstration
To provide a visual guide, I've decided to include a video demonstration of me running the unit tests in Jest and performing an end to end test obtaining the articles from the website.

### Video Link
Watch the video below to see how to run the tests in Jest as well as making an end-to-end test and reviewing the file written.
- [Loom Video Link](https://www.loom.com/share/27ec85f88cff4cceb783f2eca8b633f9?sid=ca6086c4-3343-4c04-9ed3-0adf51b53435)

## Optimizations/Enhancements

- **Error Handling:** Improve error handling for various edge cases and API failures.
- **Expanding Article Limit:** Implement logic to obtain more than 30 articles from the web page.
- **Testing:** Enhance testing to cover various edge cases and API failures
