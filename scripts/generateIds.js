const fs = require('fs');
const ids = process.argv.slice(2)
const execSync = require('child_process').execSync

if (ids.every(Number)) {
  const fileContent = `export default [${ids}]`

  fs.writeFileSync('./src/otuIds.js', fileContent)
}

execSync('npm run build', { stdio: 'inherit' })