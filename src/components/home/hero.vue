<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"
// import axios from "axios"

const { t, locale } = useI18n({ useScope: "global" })

const emit = defineEmits(["showregister"])

const openRegister = () => {
  emit("showregister")
}

const authorized = ref(localStorage.getItem("authorized"))

// axios.get("http://157.230.100.45/feeling").then((res) => {
//   console.log(res.data)
// })
</script>

<template>
  <div class="content">
    <div class="main-content">
      <div class="text-container">
        <div class="text-block">
          <p class="title">
            {{ $t("FIRSTBANNER") }}
          </p>
          <p class="hint">
            {{ $t("SECONDBANNER") }}
          </p>
          <div class="main_page-btns">
            <!-- <div class="get-started"><p>GET STARTED</p></div> -->
            <div class="register">
              <button class="button">{{ $t("GETSTARTED") }}</button>
            </div>
            <div class="register" @click="openRegister" v-if="authorized != 'authorized'">
              <button class="button">{{ $t("SIGNUP") }}</button>
            </div>
          </div>
        </div>
      </div>
      <div class="image-container">
        <img src="@/assets/images/mental_heath.svg" />
      </div>
    </div>
    <svg
      class="clip-svg"
      width="1514"
      height="160"
      viewBox="0 0 1514 160"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.17569 63.827C0.17569 63.827 6.59256 105.267 267.118 80.9949C527.642 56.7231 736.832 -77.66 1062.17 63.827C1387.5 205.314 1513.92 140 1513.92 140V160H0.17569"
        fill="white"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "hero-component",
}
</script>

<style scoped>
.main_page-btns {
  display: flex;
  align-items: center;
  gap: 70px;
  margin-top: 60px;
  width: 100%;
  height: 100%;
}
.register {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button {
  min-width: 150px;
  min-height: 51px;
  font-family: Poppins-Bold, system-ui;
  font-size: 14px;
  line-height: 21px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #d63fb6;
  background: #d2fffa;
  background: linear-gradient(90deg, rgb(204, 255, 248) 0%, rgbargb(218, 255, 251) %);
  border: none;
  border-radius: 1000px;
  box-shadow: 3px 3px 6px rgb(204, 255, 248);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 10px;
  padding: 10px 20px;
}

button::before {
  content: "";
  border-radius: 1000px;
  min-width: calc(150px + 12px);
  min-height: calc(51px + 12px);
  border: 6px solid #a4ffed;
  box-shadow: 0 0 51px rgba(186, 255, 241, 0.64);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all 0.3s ease-in-out 0s;
}

.button:hover,
.button:focus {
  color: #313133;
  transform: translateY(-6px);
}

button:hover::before,
button:focus::before {
  opacity: 1;
}

button::after {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 6px solid #adffef;
  position: absolute;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ring 1.5s infinite;
}

button:hover::after,
button:focus::after {
  animation: none;
  display: none;
}

@keyframes ring {
  0% {
    width: 30px;
    height: 30px;
    opacity: 1;
  }
  100% {
    width: 150px;
    height: 150px;
    opacity: 0;
  }
}
.content {
  padding-top: 84px;
  width: 100% !important;
  max-width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  inline-size: max-content;
  height: max-content;
  block-size: max-content;
  background: linear-gradient(174.48deg, #ff6390 -7.33%, #130b74 118.73%);
}
.main-content {
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.clip-svg {
  margin-top: 40px;
  fill: white;
  width: 100%;
  height: max-content;
  margin-bottom: -10px;
}
.text-container {
  width: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.image-container {
  width: 50%;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
}
img {
  width: 80%;
}
.text-block {
  width: 70%;
  margin-left: auto;
  margin-right: auto;
}
.title {
  text-align: start;
  color: white;
  font-family: Poppins-Light, system-ui;
  font-size: 34px;
  line-height: 50px;
}
.hint {
  text-align: start;
  color: white;
  font-size: 18px;
  line-height: 24px;
  padding-top: 30px;
  font-family: Poppins-Light, system-ui;
}
.get-started {
  background: white;
  width: max-content;
  padding: 15px 33px;
  border-radius: 100px;
  cursor: pointer;
}
.get-started p {
  font-family: Poppins-Bold, system-ui;
  font-size: 14px;
  line-height: 21px;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
@media screen and (max-width: 1000px) {
  .text-block {
    width: 100%;
    padding-left: 24px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .title {
    font-size: 28px;
    line-height: 34px;
  }
  img {
    width: 100%;
    padding-right: 24px;
    padding-left: 24px;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
}

@media screen and (max-width: 600px) {
  .text-container {
    width: 100%;
    display: block;
  }
  .text-block {
    padding-right: 24px;
  }
  .image-container {
    display: none;
  }
}
</style>
