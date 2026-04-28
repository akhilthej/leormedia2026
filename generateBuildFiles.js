const fs = require("fs");
const path = require("path");
const xmlbuilder = require("xmlbuilder");

console.log("🚀 Generating build files...");

const routes = new Set();

// Helper to add internal routes only
function addRoute(url) {
  if (!url) return;
  try {
    let pathname = "";
    if (url.startsWith("http")) {
      const urlObj = new URL(url);
      if (urlObj.hostname === "leormedia.com" || urlObj.hostname === "www.leormedia.com") {
        pathname = urlObj.pathname;
      } else {
        return; // External
      }
    } else if (url.startsWith("/")) {
      pathname = url;
    } else {
      return; // Not a path
    }

    // Normalize: remove trailing slash except for root
    if (pathname.length > 1 && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }
    
    // Skip dynamic or wildcard routes
    if (pathname.includes(":") || pathname.includes("*")) return;
    
    // Skip auth routes (admin only)
    if (pathname.startsWith("/auth")) return;

    routes.add(pathname);
  } catch (e) {
    // Ignore invalid URLs
  }
}

// Function to recursively find all JS/JSX files
function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      if (file !== "node_modules" && file !== "dist" && file !== "build") {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      }
    } else {
      if (file.endsWith(".js") || file.endsWith(".jsx") || file.endsWith(".json")) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

// Scan all source files for anything that looks like an internal path
const srcFiles = getAllFiles(path.join(__dirname, "src"));
srcFiles.forEach(file => {
  const content = fs.readFileSync(file, "utf8");
  
  // Pattern 1: path: "/..." or link: "/..."
  const genericPattern = /(?:path|link|canonical|url|to):\s*["']([^"']+)["']/g;
  let match;
  while ((match = genericPattern.exec(content)) !== null) {
    addRoute(match[1]);
  }
  
  // Pattern 2: Special case for BlogsData.json which has "slug"
  if (file.endsWith("BlogsData.json")) {
    try {
      const blogs = JSON.parse(content);
      blogs.forEach(b => {
        if (b.slug) addRoute(`/blogs/${b.slug}`);
      });
    } catch(e) {}
  }
});

const uniqueRoutes = [...routes].sort();

// Update package.json for react-snap
const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
packageJson.reactSnap = { 
  include: uniqueRoutes,
  minify: true,
  skipThirdPartyRequests: true,
  cacheResponses: true,
  crawl: true
};
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), "utf8");
console.log(`✅ React Snap routes updated: ${uniqueRoutes.length} routes found across project.`);

// Generate sitemap
const websiteURL = "https://leormedia.com";
const root = xmlbuilder.create("urlset", { version: "1.0", encoding: "UTF-8" });
root.att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");

uniqueRoutes.forEach((url) => {
  const urlElement = root.ele("url");
  urlElement.ele("loc", {}, websiteURL + (url === "/" ? "" : url));
  urlElement.ele("lastmod", {}, new Date().toISOString().split('T')[0]);
  urlElement.ele("changefreq", {}, "monthly");
  urlElement.ele("priority", {}, getPriority(url));
});

function getPriority(url) {
  if (url === "/" || url === "") return "1.0";
  if (url.startsWith("/services")) return "0.9";
  if (url.startsWith("/blogs")) return "0.8";
  return "0.7";
}

const sitemapXML = root.end({ pretty: true });
fs.writeFileSync("public/sitemap.xml", sitemapXML, "utf8");
console.log("✅ Sitemap generated in public/sitemap.xml");

console.log("🎉 All build files generated successfully!");