# Convify - CSV to JSON and JSON to CSV Converter CLI

![npm](https://img.shields.io/npm/v/convify)
![GitHub last commit](https://img.shields.io/github/last-commit/bibinwithab/convify)
![Commander](https://img.shields.io/badge/commander-^11.1.0-brightgreen)
![CSV to JSON](https://img.shields.io/badge/csvtojson-^2.0.10-brightgreen)
![JSON to CSV](https://img.shields.io/badge/json2csv-^6.0.0--alpha.2-brightgreen)

Convify is a Command Line Interface (CLI) tool designed for converting CSV files to JSON and JSON files to CSV effortlessly.

### Installation

```bash
npm install -g convify
```

### Usage

#### Convert JSON to CSV

```bash
convify JTC <inputFile> <outputFile>
```

- `inputFile`: The input JSON file path.
- `outputFile`: The output CSV file path.

#### Convert CSV to JSON

```bash
convify CTJ <inputFile> <outputFile>
```

- `inputFile`: The input CSV file path.
- `outputFile`: The output JSON file path.

### Example

#### JSON to CSV

```bash
convify JTC input.json output.csv
```

#### CSV to JSON

```bash
convify CTJ input.csv output.json
```

### Dependencies

- [commander](https://github.com/tj/commander.js/)
- [csvtojson](https://github.com/Keyang/node-csvtojson)
- [json2csv](https://github.com/zemirco/json2csv)

### Contributing

Feel free to open issues and pull requests. Contributions are welcome!

### Author

- [bibinwithab](https://github.com/bibinwithab)

### Acknowledgments

Special thanks to the maintainers of the dependencies used in this project.

---

**Happy converting with Convify!**
