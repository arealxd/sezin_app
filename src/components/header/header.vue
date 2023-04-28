<template>
  <login-component
    v-if="isLoginOpen"
    v-on:startSignUp="openSignUp"
    v-on:startForgotPassword="openForgotPassword"
    v-on:close="closeAll"
  />
  <sign-up-component v-if="isSignUpOpen" v-on:startLogin="openLogin" v-on:close="closeAll" />
  <div class="content">
    <div class="logo-container position">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" />
        <p>Sezin</p>
      </router-link>
    </div>
    <div class="buttons-container position">
      <p
        v-for="i in buttons.length"
        :key="i"
        class="position"
        @click="onSelected(i)"
        :class="{ 'selected-tab': self === i }"
      >
        {{ buttons[i - 1] }}
      </p>
    </div>
    <select
      @change="reload"
      v-model="selectedLang"
      class="form-select"
      id="languages"
      name="languages"
    >
      <option selected value="en">English</option>
      <option value="ru">Руский</option>
      <option value="kz">Казахский</option>
    </select>
    <div class="user-data-container position">
      <div v-if="fullName && auth == 'authorized'" class="user-side">
        <div class="notification-container">
          <p></p>
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.15385 3.5564C9.76923 3.5564 11.9231 5.71021 11.9231 8.32559C11.9231 9.17174 11.6923 10.0179 11.2308 10.7871L11 11.2487L11.4615 12.7102C11.6154 13.2486 12 13.6333 12.5385 13.941C13 14.1718 13.3077 14.6334 13.3077 15.1719V15.4795C13.3077 16.0949 12.7692 16.6333 12.1538 16.6333H2.15385C1.53846 16.6333 1 16.0949 1 15.4795V15.1719C1 14.6334 1.30769 14.1718 1.76923 13.941C2.23077 13.7102 2.61539 13.2486 2.84616 12.7102L3.30769 11.2487L3.07692 10.7871C1.69231 8.55632 2.46154 5.55632 4.69231 4.24863C5.46154 3.78709 6.30769 3.5564 7.15385 3.5564Z"
              stroke="#858585"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.15376 21.2488C8.00343 21.2488 8.69222 20.56 8.69222 19.7103C8.69222 18.8607 8.00343 18.1719 7.15376 18.1719C6.30409 18.1719 5.6153 18.8607 5.6153 19.7103C5.6153 20.56 6.30409 21.2488 7.15376 21.2488Z"
              stroke="#858585"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.6153 3.5572V2.78797C5.6153 1.94182 6.3076 1.24951 7.15376 1.24951C7.99991 1.24951 8.69222 1.94182 8.69222 2.78797V3.5572"
              stroke="#858585"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="login-user-data position" @click="this.$router.push('/profile')">
          <p class="position">{{ fullName }}</p>
          <p class="position">{{ fullName[0].toUpperCase() }}</p>
        </div>
      </div>
      <div v-else class="login-button position" @click="openLogin">{{ $t("LOGIN") }}</div>
    </div>
  </div>
</template>

<script>
// import { watch } from "vue"
import LoginComponent from "@/components/login/login.vue"
import SignUpComponent from "@/components/sign_up/sign_up.vue"
import api from "@/service/api"
import { useI18n } from "vue-i18n"

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" })
    return { t, locale }
  },
  name: "header-component",
  components: { SignUpComponent, LoginComponent },
  props: {
    selectedTabIndex: Number,
    registerprops: Number,
  },
  data() {
    return {
      buttons: [
        this.$t("HOME"),
        this.$t("FINDHELP"),
        this.$t("ARTICLES"),
        this.$t("CONTACTUS"),
        // this.$t("WEBINARS"),
      ],
      isLoginOpen: false,
      isForgotPasswordOpen: false,
      isSignUpOpen: false,
      fullName: null,
      selectedLang: "en",
      auth: localStorage.getItem("authorized"),
      self: 0,
    }
  },
  watch: {
    selectedLang: function (val) {
      localStorage.setItem("lang", val)
      this.locale = val
      this.buttons = [
        this.$t("HOME"),
        this.$t("FINDHELP"),
        this.$t("ARTICLES"),
        this.$t("CONTACTUS"),
        // this.$t("WEBINARS"),
        ,
      ]
    },
    registerprops: function (val) {
      this.openSignUp()
      console.log("registerprops" + val, this.registerprops)
    },
  },
  mounted() {
    api.profile.getProfile().then((response) => {
      this.fullName = response.data.fullName
    })
    if (localStorage.getItem("lang")) {
      this.selectedLang = localStorage.getItem("lang")
    }
    if (localStorage.getItem("authorized") != "authorized") {
      this.fullName = null
    }
  },
  methods: {
    reload() {
      this.$router.go(0)
    },
    onSelected(index) {
      if (index === 1) {
        this.showComponent("/", "welcome")
        this.self = 1
      } else if (index === 2) {
        this.showComponent("/", "comments")
        this.self = 2
      } else if (index === 3) {
        this.$router.push("/articles")
        this.self = 3
      } else if (index === 4) {
        this.showComponent("/", "contacts")
        this.self = 4
      } else if (index === 5) {
        this.self = 5
      }
    },
    showComponent(path, name) {
      this.$router.push({ path: path, query: { part: name }, replace: false })
    },
    openLogin() {
      this.closeAll()
      this.isLoginOpen = true
    },
    openSignUp() {
      this.closeAll()
      this.isSignUpOpen = true
    },
    openForgotPassword() {
      this.closeAll()
      this.isForgotPasswordOpen = true
    },
    closeAll() {
      this.isLoginOpen = false
      this.isSignUpOpen = false
      this.isForgotPasswordOpen = false
    },
  },
}
</script>

<style scoped>
.form-select {
  margin-right: 50px;
  padding: 6.5px 10px;
  margin-left: -60px;
  font-size: 14px;
  border-radius: 8px;
  border: 2px solid #fd749b;
  outline: none;
}
.content {
  background: white;
  padding: 25px 30px;
  display: flex;
}
.selected-tab {
  text-decoration: underline;
  text-decoration-color: #fd749b;
  text-underline-offset: 5px;
  text-decoration-thickness: 3px;
}
.buttons-container {
  text-align: center;
  flex: 1;
}
.user-data-container {
  float: right;
  text-align: end;
  display: flex;
  align-items: center;
}
.logo-container {
  text-align: start;
}
.logo-container img {
  width: 36px;
  height: 36px;
  display: inline-block;
  vertical-align: middle;
}
.logo-container p {
  font-size: 20px;
  color: #111111;
  font-family: Mulish-Bold, system-ui;
  margin-left: 12px;
  display: inline-block;
  vertical-align: middle;
}
.buttons-container p {
  color: black;
  margin-left: 15px;
  margin-right: 15px;
  width: max-content;
  font-size: 15px;
  font-family: Poppins-Bold, system-ui;
  padding: 5px 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 700;
}
.buttons-container p:hover {
  background: rgba(0, 0, 0, 0.1);
}
.user-side {
  display: flex;
  align-items: center;
}
.notification-container {
  position: relative;
  cursor: pointer;
}
.notification-container svg {
  width: 20px;
  height: 30px;
  margin-top: 8px;
  margin-right: 12px;
}
.notification-container p {
  right: 0;
  top: 0;
  margin-left: 10px;
  position: absolute;
  width: 20px;
  color: white;
  text-align: center;
  line-height: 20px;
  font-size: 10px;
  font-family: Poppins-Bold, system-ui;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  border-radius: 100%;
}
.position {
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.login-user-data p:nth-child(1) {
  font-size: 16px;
  color: #858585;
  margin-left: 20px;
  font-family: Mulish-Bold, system-ui;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
}
.login-user-data p:nth-child(2) {
  margin-left: 12px;
  width: 36px;
  line-height: 36px;
  text-align: center;
  color: white;
  border-radius: 100%;
  font-size: 20px;
  cursor: pointer;
  font-family: Poppins-Regular, system-ui;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
}
.login-button {
  line-height: 30px;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  color: white;
  font-size: 14px;
  font-family: Poppins-Regular, system-ui;
  padding: 3px 40px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
}
</style>
