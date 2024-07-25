const fs = require('fs');
const path = require('path');

// File paths
const inputFile = path.join(__dirname, 'input.txt');  
// Assuming input.txt is in the same directory as this script
const outputFile = path.join(__dirname, 'output.txt');

// Read file function
function readFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

// Write file function
function writeFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, 'utf8', err => {
      if (err) {
        reject(err);
      } else {
        resolve('File has been written successfully!');
      }
    });
  });
}

// Example usage
readFile(inputFile)
  .then(data => {
    console.log(`Content of ${inputFile}:`);
    console.log(data);
    // Example: process the data (e.g., convert to uppercase)
    const processedData = data.toUpperCase();
    return writeFile(outputFile, processedData);
  })
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(err => {
    console.error('Error:', err);
  });

