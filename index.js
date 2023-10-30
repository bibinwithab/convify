#!/usr/bin/env node

const {Command} = require('commander');
const fs = require('fs');
const path = require('path');
const json2csv = require('json2csv').Parser;
const csvtojson = require('csvtojson');

const program = new Command();

program
  .version('1.0.0')
  .description('CLI tool for JSON to CSV and CSV to JSON conversion');

program
    .command('JTC <inputFile> <outputFile>')
    .description('Convert JSON to CSV')
    .action(handleJTC)

program
    .command('CTJ <inputFile> <outputFile>')
    .description('Convert CSV to JSON')
    .action(handleCTJ)

function handleJTC(inputFile, outputFile) {
    try {
        const inputJSON = JSON.parse(fs.readFileSync(inputFile, 'utf-8'))
        const json2csvParser = new json2csv();
        const csv = json2csvParser.parse(inputJSON);
        fs.writeFileSync(outputFile, csv);
        console.log(`JSON converted to CSV and saved to ${outputFile}`);
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}

function handleCTJ(inputFile, outputFile) {
    try {
        const inputFileExtension = path.extname(inputFile).toLowerCase();
        if (inputFileExtension !== '.csv') {
          console.error('Input file must be a CSV file.');
          return;
        }
        csvtojson()
          .fromFile(inputFile)
          .then((jsonArray) => {
            fs.writeFileSync(outputFile, JSON.stringify(jsonArray, null, 2));
            console.log(`CSV converted to JSON and saved to ${outputFile}`);
          });
      } catch (error) {
        console.error('Error:', error);
      }
}

program.parse(process.argv);