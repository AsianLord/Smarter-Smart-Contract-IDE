const { exec } = require("child_process");
const path = require("path");

async function runSolhint(file) {
  const solhintConfigPath = path.join(__dirname, '..', '.solhint.json'); // Looks for .solhint config file inside plugin directory rather than working directory
  const command = `yarn solhint --config ${solhintConfigPath} ${file}`;
  console.log(`Running command: ${command}`); // Debug logging

  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error details: ${stderr}`); // Detailed error logging
        reject(`Error running Solhint: ${stderr}`);
      } else {
        resolve(stdout);
      }
    });
  });
}

module.exports = {
  runSolhint,
};
