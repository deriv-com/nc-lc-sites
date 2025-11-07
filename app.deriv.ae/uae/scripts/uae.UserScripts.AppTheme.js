// Remove old theme-color meta tags, if any
document.querySelectorAll('meta[name="theme-color"]').forEach(e => e.remove());

// Add the new one
const meta = document.createElement('meta');
meta.name = "theme-color";
meta.content = "#181c25";
document.head.appendChild(meta);