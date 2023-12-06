import type { InitParams } from './../types/init';
interface pagesType {
    frontMatter: string;
    regularPath: string;
    relativePath: string;
    link: string;
    content: string;
}
export interface SidebarParams extends InitParams {
    pages: Array<pagesType>;
}
declare const _default: (params: SidebarParams) => any;
export default _default;
