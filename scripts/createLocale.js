const fs = require('fs-extra');

const locale = process.argv[2];

if (!locale) {
  console.log('Usage: npm run locale:create <locale name>\n\nExample: npm run locale:create fr');
  process.exit(0);
}
console.log('Creating locale:', locale);

const baseLocaleFolder = './content/ru';
const newLocaleFolder = `./content/${locale}`;
const originalsFolder = `./content/.originals/${locale}`;

if (fs.pathExistsSync(newLocaleFolder)) {
  console.error('Locale already exists at', newLocaleFolder);
  process.exit(1)
}

fs.copySync(baseLocaleFolder, newLocaleFolder);
fs.copySync(baseLocaleFolder, originalsFolder);
