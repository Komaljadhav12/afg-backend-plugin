const shell = require("shelljs")

// check if git is configured in current dir
// and commit the code

const initialCommit = () => {
  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git")
    shell.exit(1)
  }

  shell.exec("git add .")

  if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
    shell.echo("Error: Git commit failed")
    shell.exit(1)
  }
}

// push the code on given branch

const codePush = (branch) => {
  if (!shell.which("git")) {
    shell.echo("Sorry, this script requires git")
    shell.exit(1)
  }

  if (shell.exec(`git push origin ${branch}`).code !== 0) {
    shell.echo("Error: Git push failed")
    shell.exit(1)
  }
}

initialCommit()

codePush("main")
