import { validateCsvFileName } from './inputValidation.js'
import { describe, test, expect } from '@jest/globals'

describe('Testing inputValidation.js', () => {
    test('Ensure that validateCsvFileName() returns a truthy when the file name is valid', () => {
        expect(validateCsvFileName('validfile.csv')).toBeTruthy()
    })

    test('Ensure that validateCsvFileName() returns a falsy when file incorrect file type.', () => {
        expect(validateCsvFileName('invalidfile.xlsx')).toBeFalsy()
    })

    test('Ensure that validateCsvFileName() returns a falsy when the file name is too short.', () => {
        expect(validateCsvFileName('.js')).toBeFalsy()
    })

    test('Ensure that validateCsvFileName() returns a falsy when no file type is referenced.', () => {
        expect(validateCsvFileName('data')).toBeFalsy()
    })
})