import { queryListData } from '@/services/page'

export default {
    namespace: 'page_list',
    state: {
        listData: [{name: 'san'}],
        pagination: {}
    },
    effects: {
        * fetchListData({ payload, callback }, { call, put }) {
            const { status, data } = yield call(queryListData, payload) 
            if (!status) {
                yield put({
                    type: 'show',
                    payload: { listData: data }
                })
                if (callback && typeof callback === 'function') callback()
            }
        }
    },
    reducers: {
        show(state, { payload }) {
            return {
                ...state,
                ...payload
            }
        }
    }
}