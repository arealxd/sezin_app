import { login, request } from "@/service/utils"

export default {
  getAllFeelings() {
    return request("get", "/feeling").then((response) => {
      return response
    })
  },
  getFeelingById(id) {
    return request("post", "/feeling/by-id?id=" + id).then((response) => {
      return response
    })
  },
  /**
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {Number} params.data.id
   *
   * @returns {Promise}
   */
  saveFeeling(params = {}) {
    return request("post", "/feeling/save", params).then((response) => {
      return response
    })
  },
  deleteFeeling(id) {
    return request("delete", "/feeling?id=" + id).then((response) => {
      return response
    })
  },
  findAllArticles() {
    return request("get", "/feeling/articles").then((response) => {
      return response
    })
  },
  /**
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {String} params.data.title
   * @param {Object} params.data.article
   * @param {String} params.data.article.title
   * @param {String} params.data.article.description
   * @param {Object} params.data.video
   * @param {String} params.data.video.description
   * @param {String} params.data.video.videoUrl
   * @param {Object[]} params.data.exercises
   * @param {String} params.data.exercises[].name
   * @param {Number} params.data.exercises[].seconds
   * @param {String} params.data.exercises[].imageUrl
   * @param {String} params.data.exercises[].description
   *
   * @returns {Promise}
   */
  addFeeling(params = {}) {
    return request("post", "/feeling/add", params).then((response) => {
      return response
    })
  },
}
