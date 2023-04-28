<template>
  <div class="content">
    <p class="title">{{ $t("NOTALONE") }}</p>
    <div class="comments-list">
      <div class="comment-container">
        <p class="user-name">{{ $t("GUEST") }}</p>
        <p class="sends-text">{{ $t("SENDHUGE") }}</p>
        <img src="@/assets/images/hug.svg" />
      </div>
      <div class="comment-container">
        <p class="user-name">{{ $t("SPACERABBIT") }}</p>
        <p class="sends-text">{{ $t("SENDMESSAGE") }}</p>
        <p class="content-text">{{ $t("BEKIND") }}</p>
      </div>
      <div class="comment-container">
        <p class="user-name">{{ $t("REBECCA") }}</p>
        <p class="sends-text">{{ $t("SENDMESSAGE") }}</p>
        <p class="content-text">{{ $t("YOUAREAMAZING") }}</p>
      </div>
      <div class="comment-container">
        <p class="user-name">{{ $t("LITTLELEAF") }}</p>
        <p class="sends-text">{{ $t("SENDSYOULOVE") }}</p>
        <div style="width: 100%; text-align: center">
          <img src="@/assets/images/heart.svg" style="width: 120px; height: 120px" />
        </div>
      </div>
      <div class="comment-container">
        <p class="user-name">{{ $t("KAMILLA") }}</p>
        <p class="sends-text">{{ $t("SENDMESSAGE") }}</p>
        <p class="content-text">{{ $t("YOUAREAWESOME") }}</p>
      </div>
      <div class="comment-container" v-for="message in messages" :key="message">
        <p class="user-name">{{ message.fullName }}</p>
        <p class="sends-text">{{ $t("SENDMESSAGE") }}</p>
        <p class="content-text">{{ message.message }}</p>
      </div>
      <div class="comment-container" style="background: none; align-self: center">
        <p class="send-button" @click="showLeaveMessage">{{ $t("LEAVEMESSAGE") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/service/api"
import message from "../../service/message"
import { useI18n } from "vue-i18n"

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" })
    return { t, locale }
  },
  name: "comments-component",
  computed: {
    message() {
      return message
    },
  },
  data() {
    return {
      messages: [],
    }
  },
  mounted() {
    // api.message.findAllMessages().then((response) => {
    //   this.messages = response.data
    // })
  },
  methods: {
    showLeaveMessage: function () {
      this.$emit("showLeaveMessage")
    },
  },
}
</script>

<style scoped>
.content {
  width: 84%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 68px;
}
.title {
  padding-left: 24px;
  color: #b247a7;
  font-size: 34px;
  line-height: 40px;
  font-family: Poppins-Regular, system-ui;
}
.comments-list {
  margin-top: 24px;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
}
.comment-container {
  background: #f8f0ff;
  border-radius: 20px;
  width: 270px;
  height: 323px;
  margin-right: 20px;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.user-name {
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  color: #1c194e;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-size: 20px;
  line-height: 23px;
  font-family: Poppins-Medium, system-ui;
}
.sends-text {
  padding-left: 20px;
  padding-right: 20px;
  color: #1c194e;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  font-size: 20px;
  line-height: 29px;
  font-family: Poppins-Regular, system-ui;
  white-space: pre-wrap;
}
img {
  margin-top: 20px;
  width: 100%;
  height: auto;
}
.content-text {
  color: #1c194e;
  font-size: 30px;
  line-height: 35px;
  width: 100%;
  font-family: Mulish-Light, system-ui;
  margin-top: 50px;
  text-align: center;
  white-space: pre-wrap;
}
@media screen and (max-width: 1000px) {
  .content {
    width: 100%;
  }
}

::-webkit-scrollbar {
  width: 1px;
  height: 0;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: #b247a7;
}
::-webkit-scrollbar:hover {
  background-color: #b247a7;
}
::-webkit-scrollbar-button {
  background: #f8f8f8;
}

.send-button {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  line-height: 30px;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  color: white;
  font-size: 16px;
  font-family: Poppins-Regular, system-ui;
  padding: 6px 40px;
  cursor: pointer;
  border-radius: 14px;
}
</style>
