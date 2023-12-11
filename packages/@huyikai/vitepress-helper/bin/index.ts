#!/usr/bin/env node

import { Command } from 'commander';
import chalk from 'chalk';
import create from './create';
import figlet from 'figlet';
import { fileURLToPath } from 'url';
import fs from 'fs-extra';
import inquirer from 'inquirer';
import path from 'path';

const program: Command = new Command();


// 粗体文字
const blodText = (text: string) => chalk.blue.bold(text);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const packagePath = path.join(__dirname, './../../package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

program
  .name('VitePress-Helper')
  .description(
    'A Tool for Enhance VitePress Experience\r\n一个增强VitePress体验的工具'
  )
  .helpOption('-h, --help', 'Display help for command\r\n显示命令的帮助')
  .version(
    packageJson.version,
    '-v,-V, --version',
    'Output current version information\r\n输出当前版本信息'
  );

program
  .command('init')
  .description(
    'Guide to complete the initialization operation\r\n完成初始化操作的指南'
  )
  .summary('initialization\r\n初始化')
  .action(async () => {
    const question = [
      {
        name: 'name',
        message: 'Project Name',
        type: 'input',
        default: 'my-docs'
      },
      {
        name: 'author',
        description: 'Input Author Name',
        message: 'Author',
        default: 'huyikai'
      },
      {
        name: 'version',
        description: 'Version',
        message: 'Version',
        default: '1.0.0'
      }
      // {
      //   name: 'newDir',
      //   message: 'Create A New Directory?',
      //   type: 'list',
      //   choices: [
      //     { name: 'yes', value: true },
      //     { name: 'no', value: false }
      //   ]
      // }
    ];
    let answers = await inquirer.prompt(question);
    create(answers);
  });

// 设置程序的使用方法
program.usage('<command> [option]');

// 使用帮助指令时触发的事件
program.on('--help', () => {
  console.log(
    `\r\nRun ${blodText(
      'vitepress-helper <command> --help'
    )} for detailed usage of given command`
  );
  console.log(
    `\r\nGitHub: ${blodText('https://github.com/huyikai/vitepress-helper')}`
  );
  console.log(
    `\r\nHomePage: ${blodText('https://huyikai.github.io/vitepress-helper')}`
  );
  console.log(
    '\r\n' +
      chalk
        .hex('#41B883')
        .bgHex('#35495E')
        .bold(
          figlet.textSync('VitePress-Helper', {
            font: 'Standard',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: false
          })
        )
  );
});

// 解析命令行参数(必须)
program.parse(process.argv);
