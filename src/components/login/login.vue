<template>
  <div class="background">
    <div class="content">
      <svg
        class="close-button"
        @click="close"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_510_474)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.9998 13.4139L17.6568 19.0709C17.8454 19.2531 18.098 19.3539 18.3602 19.3516C18.6224 19.3493 18.8732 19.2441 19.0586 19.0587C19.2441 18.8733 19.3492 18.6225 19.3515 18.3603C19.3538 18.0981 19.253 17.8455 19.0708 17.6569L13.4138 11.9999L19.0708 6.34291C19.253 6.1543 19.3538 5.9017 19.3515 5.6395C19.3492 5.37731 19.2441 5.1265 19.0586 4.94109C18.8732 4.75568 18.6224 4.65051 18.3602 4.64823C18.098 4.64595 17.8454 4.74675 17.6568 4.92891L11.9998 10.5859L6.34282 4.92891C6.15337 4.75125 5.90224 4.65427 5.64255 4.65849C5.38287 4.6627 5.13502 4.76779 4.95143 4.9515C4.76785 5.13521 4.66294 5.38314 4.65891 5.64283C4.65488 5.90251 4.75203 6.15358 4.92982 6.34291L10.5858 11.9999L4.92882 17.6569C4.83331 17.7492 4.75713 17.8595 4.70472 17.9815C4.65231 18.1035 4.62473 18.2347 4.62357 18.3675C4.62242 18.5003 4.64772 18.632 4.698 18.7549C4.74828 18.8778 4.82254 18.9894 4.91643 19.0833C5.01032 19.1772 5.12197 19.2514 5.24487 19.3017C5.36777 19.352 5.49944 19.3773 5.63222 19.3762C5.765 19.375 5.89622 19.3474 6.01823 19.295C6.14023 19.2426 6.25058 19.1664 6.34282 19.0709L11.9998 13.4139Z"
          />
        </g>
        <defs>
          <clipPath id="clip0_510_474"><rect width="24" height="24" fill="white" /></clipPath>
        </defs>
      </svg>
      <div class="main-content">
        <p class="header-text">{{ $t("WELCOMEBACK") }}</p>
        <p class="header-hint">{{ $t("KINDLY") }}</p>
        <input :placeholder="$t('EMAIL')" type="email" v-model="email" @keyup="hideError" />
        <input
          :placeholder="$t('PASSWORD')"
          type="password"
          v-model="password"
          @keyup="hideError"
        />
        <p
          class="header-hint"
          v-if="isShowError"
          style="font-size: 14px; color: red; text-align: start; margin-bottom: 0"
        >
          {{ $t("WRONGDATA") }}
        </p>
        <p class="login-button" @click="login">{{ $t("LOGIN") }}</p>
        <p class="operation-hint under-text" @click="startSignUp">
          {{ $t("DONTHAVEACC") }}<span class="sign-up-button">{{ $t("SIGNUP") }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n"
import api from "@/service/api"
import { h } from "vue"

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" })
    return { t, locale }
  },
  name: "login-component",
  data() {
    return {
      email: "",
      password: "",
      isShowError: false,
    }
  },
  methods: {
    hideError() {
      this.isShowError = false
    },
    login() {
      if (this.notEmpty(this.email, this.password)) {
        api.authorization
          .login({
            data: {
              email: this.email,
              password: this.password,
            },
          })
          .then(() => {
            localStorage.setItem("authorized", "authorized")
            location.reload()
            this.close()
          })
          .catch(() => {
            this.isShowError = true
          })
      }
    },
    startSignUp: function () {
      this.$emit("startSignUp")
    },
    startForgotPassword: function () {
      this.$emit("startForgotPassword")
    },
    close: function () {
      this.$emit("close")
    },
    notEmpty(...arg) {
      for (let i = 0; i < arg.length; i++) {
        if (arg[i].length === 0) {
          return false
        }
      }
      return true
    },
  },
}
</script>

<style scoped>
.background {
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 100;
}
.content {
  margin-left: auto;
  margin-right: auto;
  margin-top: 140px;
  background: white;
  max-width: 600px;
  border-radius: 30px;
  text-align: right;
}
.main-content {
  text-align: center;
  padding: 50px 24px;
  width: 340px;
  margin-left: auto;
  margin-right: auto;
}
.header-text {
  font-size: 24px;
  font-family: Poppins-Bold, system-ui;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header-hint {
  color: #333333;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: Poppins-Regular, system-ui;
}
input {
  color: black;
  margin-top: 20px;
  border-radius: 5px;
  border: 1px solid #d1d1d1;
  line-height: 20px;
  width: 100%;
  font-size: 14px;
  font-family: Poppins-Regular, system-ui;
  padding: 15px 20px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
::placeholder {
  color: #2f2f2f;
}
input:focus {
  outline: none;
}
.operation-hint {
  cursor: pointer;
  margin-top: 14px;
  color: #2f2f2f;
  font-size: 12px;
  line-height: 20px;
  font-family: Poppins-Regular, system-ui;
  width: max-content;
}
.login-button {
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
.under-text {
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}
.sign-up-button {
  color: black;
  font-family: Poppins-Bold, system-ui;
  text-decoration: underline;
}
.close-button {
  cursor: pointer;
  margin-top: 14px;
  margin-left: -40px;
  position: absolute;
  fill: #b455ab;
}
</style>
