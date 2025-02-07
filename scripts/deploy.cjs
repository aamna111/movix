const fs = require('fs')
const path = require('path')

// Function to update paths in HTML file
function updatePaths() {
  const indexPath = path.join(__dirname, '../dist/index.html')
  let html = fs.readFileSync(indexPath, 'utf-8')
  
  // Update asset paths to include /movix/
  html = html.replace(
    /src="\/assets\//g, 
    'src="/movix/assets/'
  ).replace(
    /href="\/assets\//g, 
    'href="/movix/assets/'
  )
  
  fs.writeFileSync(indexPath, html)
}

updatePaths()