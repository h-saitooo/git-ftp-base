const EXEX_SYNC = require("child_process").execSync;

const developCmd = [
  `git config --local git-ftp.develop.url ${process.env.DEVELOP_SFTP_URL}`,
  `git config --local git-ftp.develop.user ${process.env.DEVELOP_SFTP_USER}`,
  `git config --local git-ftp.develop.password ${process.env.DEVELOP_SFTP_PASSWORD}`,
  `git config --local git-ftp.develop.syncroot ${process.env.DEVELOP_SFTP_SYNCROOT}`
]

for (let i = 0, len = developCmd.length; i < len; i++) {
  EXEX_SYNC(developCmd[i])

  if (len === i + 1) {
    EXEX_SYNC('git ftp init -s develop')
  }
}
