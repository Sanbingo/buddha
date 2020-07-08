import request from '@/utils/request';

export interface queryParamsType {
    name: string;
    cid: string;
    status: string;
    updateTime: string;
}

export async function queryListData(params: queryParamsType) {
    return request('/api/page/list', {
        method: 'POST',
        data: params,
    });
}