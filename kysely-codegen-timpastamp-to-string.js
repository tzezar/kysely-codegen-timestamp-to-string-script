// replaceDate.mjs (Change the file extension to .mjs)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify the file path you want to modify
const filePath = path.join(__dirname, '../database/kysely-codegen-types.ts');

// Function to replace "Date" with "string"
const replaceDateInFile = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    // Replace "Date" with "string"
    const updatedData = data.replace(/Date/g, 'string');

    // Write the updated content back to the file
    fs.writeFile(file, updatedData, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file: ${err}`);
      } else {
        console.log('File updated successfully.');
      }
    });
  });
};

// Run the function
replaceDateInFile(filePath);
