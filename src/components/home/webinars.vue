<template>
  <div class="content">
    <p class="title">{{ $t("RECENTWEBINARS") }}</p>
    <div class="line"></div>
    <p class="hint">
      {{ $t("WEBINAR") }}
    </p>
    <p class="view-all">{{ $t("VIEWALL") }}</p>
    <div style="width: 100%; padding-top: 50px; display: none">
      <img src="@/assets/images/web_first.svg" />
      <img src="@/assets/images/web_second.svg" class="middle" />
      <img src="@/assets/images/web_third.svg" />
    </div>
    <div class="cards">
      <div class="cards__card-article">
        <p class="cards__card-category">article</p>
        <p class="cards__card-title">How to start thinking positively?</p>
      </div>
      <div class="cards__card-article story">
        <p class="cards__card-category">story</p>
        <p class="cards__card-title">Yoga to reduce fatigue</p>
      </div>
      <div class="cards__card-article video">
        <p class="cards__card-category">video</p>
        <svg
          width="59"
          height="68"
          viewBox="0 0 59 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M58.5 33.134C59.1667 33.5189 59.1667 34.4811 58.5 34.866L1.5 67.775C0.833329 68.1599 -3.2206e-06 67.6788 -3.18695e-06 66.909L-3.09959e-07 1.09103C-2.7631e-07 0.321228 0.833332 -0.159895 1.5 0.225005L58.5 33.134Z"
            fill="white"
          />
        </svg>
        <p class="cards__card-title">You are not lazy, bored, or unmotivated</p>
      </div>
    </div>
    <div class="mobile_app">
      <p>{{ $t("MOBILEAPPS") }}</p>
      <div class="apps">
        <img
          @click="openInNewTab('https://www.apple.com/ru/app-store/')"
          class="apple"
          src="../../assets/images/appstore.png"
          alt=""
        />
        <img
          @click="openInNewTab('https://play.google.com/store/apps?hl=ru&gl=US')"
          class="android"
          src="../../assets/images/market.png"
          alt=""
        />
      </div>
    </div>
  </div>
  <div class="screen-mobile">
    <img src="/img/apps.png" alt="" />
    <img src="/img/appsBubbles.png" style="width: max-content" alt="" />
  </div>
</template>

<script>
import { useI18n } from "vue-i18n"

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" })
    return { t, locale }
  },
  name: "webinars-component",
  methods: {
    openInNewTab(url) {
      window.open(url, "_blank", "noreferrer")
    },
  },
}
</script>

<style scoped>
.screen-mobile {
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  padding-top: 60px;
  padding-bottom: 30px;
}
.mobile_app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 50px;
}
.mobile_app p {
  font-weight: 400;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  color: #333333;
  max-width: 378px;
  margin: 0 auto;
  font-weight: 600;
}
.apps {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 15px;
}
.apple {
  max-width: 85px;
}
.android {
  max-width: 100px;
}
.content {
  width: 84%;
  margin-top: 54px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.title {
  color: #1c1c33;
  font-size: 44px;
  line-height: 52px;
  font-family: Poppins-Regular, system-ui;
  font-weight: 700;
}
.line {
  margin-left: auto;
  margin-right: auto;
  margin-top: 17px;
  width: 150px;
  height: 2px;
  background: #9347b2;
}
.hint {
  color: #4e4e65;
  font-size: 22px;
  line-height: 33px;
  margin-top: 50px;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
}
.view-all {
  width: max-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 46px;
  font-size: 18px;
  line-height: 26px;
  font-family: Poppins-Regular, system-ui;
  color: #1c1c33;
  padding: 12px 50px;
  background: #f88ae6;
  cursor: pointer;
}
img {
  width: 32%;
  cursor: pointer;
}
.middle {
  margin-left: 2%;
  margin-right: 2%;
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
.cards {
  display: flex;
  align-items: center;
  gap: 45px;
  justify-content: center;
  margin-top: 90px;
}
.cards__card-category {
  font-weight: 500;
  font-size: 12px;
  display: flex;
  align-items: center;
  color: #7474dd;
  padding: 5px 10px;
  border: 1px solid #7474dd;
  border-radius: 20px;
  margin-bottom: 0 auto;
  margin-right: 0 auto;
  width: max-content;
}
.cards__card-title {
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 4px 39px 4px 18px;
  width: max-content;
  max-width: 150px;
  background: #5353c9;
  border-radius: 20px;
  text-align: left;
  position: absolute;
  bottom: 10px;
  height: 100%;
  max-height: 50px;
}
.cards__card-article {
  width: 386px;
  height: 413px;
  background: linear-gradient(235.64deg, #ffeacc 0%, #ffcdec 95.42%);
  border-radius: 20px;
  padding: 10px;
  position: relative;
}
.story {
  background: linear-gradient(235.64deg, #7474dd 0%, #ffcdec 95.42%);
}
.story .cards__card-category {
  color: #ffeacc;
  border: 1px solid #ffeacc;
}
.video {
  background: linear-gradient(54.16deg, #ccd0ff 2.58%, #ffcdec 95.61%);
}
.video .cards__card-category {
  color: #c484b0;
  border: 1px solid #c484b0;
}
.video svg {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
