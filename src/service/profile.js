import { login, request } from "@/service/utils"

export default {
  getProfile() {
    return request("get", "/user/me").then((response) => {
      return response
    })
  },
  /**
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {String} params.data.password
   * @param {String} params.data.fullName
   *
   * @returns {Promise}
   */
  changeProfile(params = {}) {
    return request("post", "/profile", params).then((response) => {
      return response
    })
  },
}
