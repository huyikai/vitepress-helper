import fs from 'fs-extra';
import globby from 'globby';
import matter from 'gray-matter';

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

// 定义一个比较日期的函数
const compareDate = (obj1: Page, obj2: Page) => {
  return obj1.frontMatter.date < obj2.frontMatter.date ? 1 : -1; // 按照日期降序排序
};

// 导出一个异步函数
export default async () => {
  // 使用globby查找所有的md文件
  const paths = await globby(['**.md'], {
    ignore: ['node_modules', 'README.md', 'packages'] // 忽略的文件夹和文件
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
          .toLowerCase()
      };
    })
  );

  // 过滤掉frontMatter中有page属性的Page
  pages = pages.filter((item: Page) => !item.frontMatter.page);

  // 根据日期排序
  pages.sort(compareDate);
  return pages; // 返回所有页面的数组
};
