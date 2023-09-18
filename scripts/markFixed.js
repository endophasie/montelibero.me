const fs = require('fs-extra');
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const locale = process.argv[2];

if (!locale) {
  console.log('Usage: npm run locale:markFixed <locale name>\n\nExample: npm run locale:markFixed en');
  process.exit(0);
}

rl.question(`Are you sure you have already updated the translation for locale "${locale}" to match the "ru" locale? [y/N]\n`, (answer) => {
  // TODO: Log the answer in a database
  rl.close();
  if (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'yes') {
    console.log('No changes made');
    process.exit(0);
  }

  const baseLocaleFolder = './content/ru';
  const originalsFolder = `./content/.originals/${locale}`;
  fs.copySync(baseLocaleFolder, originalsFolder);
  console.log(`Marked translation for locale "${locale}" as up-to-date`);
});




