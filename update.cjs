const fs = require('fs');
const path = require('path');

// 1. Replace "Sanmay" with "Thrayana"
function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      replaceInDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.json')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let updated = content.replace(/Sanmay/g, 'Thrayana');
      // also replace lowercase for domain names
      updated = updated.replace(/sanmaytechnologies\.in/g, 'thrayanatechnologies.in');
      if (content !== updated) {
        fs.writeFileSync(filePath, updated);
        console.log('Updated', filePath);
      }
    }
  }
}
replaceInDir('.');
