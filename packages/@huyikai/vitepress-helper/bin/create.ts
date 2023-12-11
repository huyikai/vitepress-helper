import { execSync } from 'child_process';
// import chalk from 'chalk';
import fs from 'fs-extra';
// import inquirer from 'inquirer';
// import ora from 'ora';
import path from 'path';

interface Answers {
  name: string;
  author: string;
  newDir: boolean;
  version: string;
}

// 获取当前工作目录
const cwd = process.cwd();

// 进度动画
// const spinner = ora();

// 粗体文字
// const blodText = (text: string) => chalk.blue.bold(text);

export default async (answers: Answers) => {
  const { name, author, version } = answers;

  // const targetDir = path.join(cwd, newDir ? name : '');

  // 初始化package.json
  execSync('npm init -y', { stdio: 'inherit' });
  execSync('npm install @huyikai/vitepress-helper', { stdio: 'inherit' });
  //   execSync('npm link @huyikai/vitepress-helper', { stdio: 'inherit' });

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
    fs.writeFileSync(packagePath, JSON.stringify(packageInfo, null, 2));
  };
  changeConfig();
  execSync('npm run dev', { stdio: 'inherit' });
};
