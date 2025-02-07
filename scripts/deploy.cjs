const fs = require('fs')
const path = require('path')

// Function to update paths in HTML file
function updatePaths() {
  const indexPath = path.join(__dirname, 'dist/index.html')
  let html = fs.readFileSync(indexPath, 'utf-8')
  
  // More comprehensive path replacement
  html = html.replace(
    /(?:src|href)="\/assets\//g, 
    (match) => match.replace('/assets/', '/movix/assets/')
  )
  
  fs.writeFileSync(indexPath, html)
}

updatePaths()