import { login, request } from "@/service/utils"

export default {
  getMyTasks() {
    return request("get", "/task").then((response) => {
      return response
    })
  },
  /**
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {String} params.data.name
   * @param {String} params.data.author
   *
   * @returns {Promise}
   */
  createTask(params = {}) {
    return request("post", "/task", params).then((response) => {
      return response
    })
  },
  /**
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {String} params.data.id
   *
   * @returns {Promise}
   */
  finishTask(params = {}) {
    return request("post", "/task/finish", params).then((response) => {
      return response
    })
  },
}
