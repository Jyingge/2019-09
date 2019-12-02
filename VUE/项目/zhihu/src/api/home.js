import http from './index'

export function hotlist(option) {
    return http.get('/v4//mweb-feed/content/list?', {
        params: option,
        /*  params: {
                category: "yule",
                reload: false,
                tm_source: null,
                count: 8
            } */
    })
}