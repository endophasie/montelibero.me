const { exec } = require("child_process");

const baseLocaleFolder = './content/ru';

const locale = process.argv[2];

if (!locale) {
  console.log('Usage: npm run locale:check <locale name>\n\nExample: npm run locale:check en');
  process.exit(0);
}

(async () => {
  const originalsFolder = `./content/.originals/${locale}`;

  await new Promise((resolve) => {
    exec(`diff --unified --recursive ${baseLocaleFolder} ${originalsFolder} | ./node_modules/.bin/diff2html -i stdin`, (error, stdout, stderr) => {
      if (stderr && !stderr.startsWith('The input is empty. Try again')) {
        console.log(`Translations for locale "${locale}" are outdated`);
        console.error(error, stderr);
      } else {
        console.log(`Translations for locale "${locale}" are up-to-date`);
      }
      resolve();
    });
  });
})();





