const fs = require("fs");
const cheerio = require("cheerio");
const path = require("path");

// Function to update the paths in the HTML file
function updateHtmlPaths(filePath) {
  // Read the HTML file
  const html = fs.readFileSync(filePath, "utf8");

  // Load the HTML into cheerio
  const $ = cheerio.load(html);

  // Update script tags
  $("script").each((index, element) => {
    const src = $(element).attr("src");
    if (src) {
      const updatedSrc = src.startsWith("/") ? `.${src}` : src;
      $(element).attr("src", updatedSrc);
    }
  });

  // Update link tags
  $("link").each((index, element) => {
    const href = $(element).attr("href");
    if (href) {
      const updatedHref = href.startsWith("/") ? `.${href}` : href;
      $(element).attr("href", updatedHref);
    }
  });

  // Write the updated HTML back to the file
  fs.writeFileSync(filePath, $.html(), "utf8");
  console.log(`Updated paths in ${filePath}`);
}

// Path to the HTML file
const htmlFilePath = path.join(__dirname, "build", "index.html");

// Update the paths in the HTML file
updateHtmlPaths(htmlFilePath);
