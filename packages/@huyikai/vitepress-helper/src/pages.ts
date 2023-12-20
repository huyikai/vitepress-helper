import type { InitParams } from './../types/init';
import fs from 'fs-extra';
import globby from 'globby';
import matter from 'gray-matter';
import { v4 as uuidv4 } from 'uuid';
// 定义一个页面的接口 Define the interface of a page
interface Page {
  frontMatter: FrontMatter; // 页面的前置元数据
  link: string; // 页面的链接
  content: string; // 页面的内容
}

// 定义页面的前置元数据的接口
interface FrontMatter {
  page?: any; // 页面的类型
  date?: any; // 页面的日期
}

// Compare Dates
const compareDate = (obj1: Page, obj2: Page) => {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1; // 按照日期降序排序
};

export default async (params: InitParams) => {
  const { directory } = params;
  const getNonRootKeys = (obj: any) => {
    return Object.keys(obj).filter((key) => key !== 'root');
  };
  let localesArray: any = [];
  if (params?.locales) {
    localesArray = getNonRootKeys(params.locales).map(
      (item) => `${directory}/${item}`
    );
  }

  // 使用globby查找所有的md文件
  const paths = await globby([`${directory}/**/**.md`], {
    ignore: ['node_modules', 'README.md', 'packages', ...localesArray] // 忽略的文件夹和文件
  });
  // 使用Promise.all并发读取所有md文件的内容
  let pages: Page[] = await Promise.all(
    paths.map(async (item: string) => {
      const content = await fs.readFile(item, 'utf-8'); // 读取md文件的内容
      const matterData = matter(content); // 解析md文件的内容
      return {
        frontMatter: matterData.data, // 获取md文件的前置元数据
        link: item, // 获取md文件的链接
        // 将md文件内容中的非字母数字字符替换为空格，并转换为小写
        content: matterData.content
          .replace(/[^a-zA-Z0-9._ ]+/g, '')
          .toLowerCase(),
        uuid: uuidv4()
      };
    })
  );

  // 过滤掉frontMatter中有page属性的Page
  // 过滤掉不在设置的根目录下的文件
  pages = pages.filter(
    (item: Page) =>
      !item.frontMatter.page || item.link.includes(`${directory}/`)
  );

  pages.sort(compareDate);
  return pages;
};
