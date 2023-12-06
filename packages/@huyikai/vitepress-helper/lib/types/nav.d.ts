import type { InitParams } from './../types/init';
interface NavParams extends InitParams {
    pages: Array<{
        link: string;
    }>;
}
declare const _default: (params: NavParams) => any[];
export default _default;
