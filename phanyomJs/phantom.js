const phantom = require('phantom');

(async function () {
  const instance = await phantom.create();
  const page = await instance.createPage();
  await page.on('onResourceReguested', function (req) {
    console.log('Requesting', requestData.url);
  });

  const status = await page.open('https://hetao101.com');
  const content = await page.property('content');
  console.log(content);

  await instance.exit();
})();