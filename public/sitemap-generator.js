const fs = require("fs");
const path = require("path");

const domain = "https://matthewsgondwe-portfolio.netlify.app"; // Change this to your actual domain

const pages = [
  "/", 
  "/About-Me", 
  "/Projects", 
  "/Experience", 
  "/Contact"
  // Add other pages you want indexed
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${domain}${page}</loc>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    )
    .join("")}
</urlset>`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemap, "utf8");

console.log("✅ Sitemap generated successfully!");
