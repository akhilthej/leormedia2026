const fs = require("fs");
const path = require("path");
const xmlbuilder = require("xmlbuilder");

console.log("🚀 Generating build files...");

// Step 1: Generate react-snap routes
const packageJsonPath = path.join(__dirname, "package.json");
const appJsPath = path.join(__dirname, "src", "App.js");
const appJsContent = fs.readFileSync(appJsPath, "utf8");

const routeRegex = /path:\s*"([^"]+)"/g;
const routes = [];
let match;

while ((match = routeRegex.exec(appJsContent)) !== null) {
  const route = match[1];
  if (!route.startsWith("/auth") && route !== "/*" && !route.includes(":")) {
    routes.push(route);
  }
}

const uniqueRoutes = [...new Set(routes)].sort();

// Update package.json for react-snap
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
packageJson.reactSnap = { include: uniqueRoutes };
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
console.log(`✅ React Snap routes updated: ${uniqueRoutes.length} routes`);

// Step 2: Generate sitemap
const websiteURL = "https://leormedia.com";

const root = xmlbuilder.create("urlset", { version: "1.0", encoding: "UTF-8" });
root.att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

uniqueRoutes.forEach((url) => {
  const urlElement = root.ele("url");
  urlElement.ele("loc", {}, websiteURL + url);
  urlElement.ele("lastmod", {}, new Date().toISOString().split('T')[0]);
  urlElement.ele("changefreq", {}, "monthly");
  urlElement.ele("priority", {}, getPriority(url));
});

function getPriority(url) {
  if (url === "/") return "1.0";
  if (url.startsWith("/services")) return "0.9";
  if (url.startsWith("/blogs")) return "0.8";
  return "0.7";
}

const sitemapXML = root.end({ pretty: true });
fs.writeFileSync("public/sitemap.xml", sitemapXML, "utf8");
console.log("✅ Sitemap generated in public/sitemap.xml");

console.log("🎉 All build files generated successfully!");