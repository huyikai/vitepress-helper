import { blodText } from './utils';
import { execSync } from 'child_process';
import fs from 'fs-extra';
// import inquirer from 'inquirer';
import ora from 'ora';
import path from 'path';
interface Answers {
  name: string;
  author: string;
  cms: boolean;
  version: string;
}

// 获取当前工作目录
const cwd = process.cwd();

// 进度动画
const spinner = ora();

export default async (answers: Answers) => {
  const { name, author, version, cms } = answers;
  spinner.start('Installing...');
  // const targetDir = path.join(cwd, newDir ? name : '');

  // 初始化package.json
  execSync('npm init -y');
  execSync('npm install @huyikai/vitepress-helper', { stdio: 'inherit' });
  // execSync('npm link @huyikai/vitepress-helper');

  // 模板文件的路径
  const templatePath = path.join(
    cwd,
    'node_modules/@huyikai/vitepress-helper/template'
  );
  // 目标目录的路径
  const targetPath = path.join(cwd, '');
  // 将模板文件拷贝到目标目录
  fs.copySync(templatePath, targetPath);
  // 修改package.json
  const changeConfig = () => {
    const packagePath = path.join(cwd, 'package.json');
    let packageInfo = JSON.parse(fs.readFileSync(packagePath).toString());
    packageInfo.name = name;
    packageInfo.author = author;
    packageInfo.version = version;
    packageInfo.scripts['cms'] = cms
      ? 'node node_modules/@huyikai/local-cms/cms.js docs'
      : undefined;
    packageInfo.devDependencies['@huyikai/vitepress-helper'] = '^0.0.7';
    packageInfo.devDependencies['@huyikai/local-cms'] = cms
      ? 'latest'
      : undefined;
    fs.writeFileSync(packagePath, JSON.stringify(packageInfo, null, 2));
  };
  changeConfig();
  execSync('npm i', { stdio: 'inherit' });
  spinner.succeed('Install Complete!!!');
  console.log(
    `\r\nNow you can:\r\nrun ${blodText('npm run dev')} to preview` +
      (cms ? `\r\nrun ${blodText('npm run cms')} to manage content` : '')
  );
};
