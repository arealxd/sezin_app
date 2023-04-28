import {request} from "@/service/utils";

export default {

    findAllUsers() {
        return request('get', '/admin/user').then((response) => {
            return response;
        })
    },

};
