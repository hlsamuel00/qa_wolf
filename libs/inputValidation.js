/**
 * Determines whether the provided file name is the correct format
 * @param {string} fileName The name of the file received from the user
 * @returns {boolean} The boolean value ensuring the file ends in '.csv'
*/
const validateCsvFileName = (fileName) => {
    return fileName.length >= 4 && fileName.slice(-4) == '.csv'
}

export { validateCsvFileName }