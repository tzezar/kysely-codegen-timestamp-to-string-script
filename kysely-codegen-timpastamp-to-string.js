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

    // Split the file content into lines
    const lines = data.split('\n');

    // Modify the line starting with "export type Timestamp"
    const updatedLines = lines.map(line => {
      if (line.startsWith('export type Timestamp')) {
        return line.replace(/Date/g, 'string');
      }
      return line;
    });

    // Join the lines back into a single string
    const updatedData = updatedLines.join('\n');

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
