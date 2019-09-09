const EXEX_SYNC = require("child_process").execSync;
const BRANCH = EXEX_SYNC("git rev-parse --abbrev-ref HEAD")
  .toString()
  .replace(/\r?\n/g, "")

if (BRANCH === "develop" || BRANCH.match(/^release\//) || BRANCH.match(/^hotfix\//)) {
  // ブランチが"develop"もしくは"release/*"もしくは"hotfix/*"の場合がアップロードの対象
  EXEX_SYNC(`git ftp push -s develop`)
} else {
  // 上記以外は以下のメッセージを出力
  console.error("It is not target of branch for deploy.")
}