const { exec } = require("child_process");

function runSolhint(filePath) {
  return new Promise((resolve, reject) => {
    exec(`yarn solhint ${filePath}`, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr) {
        reject(new Error(stderr));
        return;
      }
      resolve(stdout);
    });
  });
}

module.exports = {
  runSolhint,
};
