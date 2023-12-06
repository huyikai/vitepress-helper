import type { InitParams } from './../types/init';
interface Page {
    frontMatter: FrontMatter;
    link: string;
    content: string;
}
interface FrontMatter {
    page?: any;
    date?: any;
}
declare const _default: (params: InitParams) => Promise<Page[]>;
export default _default;
