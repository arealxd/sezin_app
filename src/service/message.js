import {login, request} from "@/service/utils";

export default {
    findAllMessages() {
        return request('get', '/message').then((response) => {
            return response;
        });
    },
    /**
     *
     * @param {Object} params
     * @param {Object} params.data
     * @param {String} params.data.message
     *
     * @returns {Promise}
     */
    sendMessage(params = {}) {
        return request('post', '/message', params).then((response) => {
            return response;
        });
    },
};
