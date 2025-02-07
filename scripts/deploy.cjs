const path = require('path')
const fs = require('fs')

function updatePaths() {
  // Use the correct path to your dist folder
  const indexPath = path.join(__dirname, '../dist/index.html')
  
  // Rest of your script remains the same
  let html = fs.readFileSync(indexPath, 'utf-8')
  
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