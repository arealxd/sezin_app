import { login, request } from "@/service/utils"

export default {
  findAllMessages() {
    return request("get", "/feedback").then((response) => {
      return response
    })
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
    return request("post", "/feedback", params).then((response) => {
      return response
    })
  },
}
