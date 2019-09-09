# git-ftp workflow template

Use: Node.js = `v10.15.3`

## Usage

### Prepare

#### 環境変数の準備
`direnv edit .`
もしくは、
.envrc-sampleを.envrcにリネーム

```bash
ex)
export DEVELOP_SFTP_HOST=sftp://example.com/path/to/directory/
export DEVELOP_SFTP_USER=user
export DEVELOP_SFTP_PASSWORD=password
export DEVELOP_SFTP_SYNCROOT=dist/
... 必要であれば本番も
export MASTER_SFTP_HOST=...
```

[direnv/direnv](https://github.com/direnv/direnv)
[git-ftp/git-ftp](https://github.com/git-ftp/git-ftp)

#### git-ftp 初期化
デプロイ先の初期設定
`npm run gitftp:init` or `yarn gitftp:init`

#### デプロイ
デプロイ対象のブランチに移動してデプロイ
`git checkout develop`
`npm run gitftp:deploy` or `yarn gitftp:deploy`
