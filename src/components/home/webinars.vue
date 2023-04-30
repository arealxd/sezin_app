<template>
  <div class="content">
    <p class="title">{{ $t("RECENTWEBINARS") }}</p>
    <div class="line"></div>
    <p class="hint">
      {{ $t("WEBINAR") }}
    </p>
    <!-- <p class="view-all">{{ $t("VIEWALL") }}</p> -->
    <div style="width: 100%; padding-top: 50px; display: none">
      <img src="@/assets/images/web_first.svg" />
      <img src="@/assets/images/web_second.svg" class="middle" />
      <img src="@/assets/images/web_third.svg" />
    </div>
    <div class="cards">
      <div class="arrow-webinar" @click="previousWebinar">
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.41421 7L8.70711 12.2929L7.29289 13.7071L0.585787 7L7.29289 0.292893L8.70711 1.70711L3.41421 7Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="cards__card-article">
        <img :src="'http://157.230.100.45/' + webinars[firstWebinarIndex]?.image" alt="" />
        <p>{{ webinars[firstWebinarIndex]?.title }}</p>
      </div>
      <div class="cards__card-article">
        <img :src="'http://157.230.100.45/' + webinars[secondWebinarIndex]?.image" alt="" />
        <p>{{ webinars[secondWebinarIndex]?.title }}</p>
      </div>
      <div class="cards__card-article">
        <img :src="'http://157.230.100.45/' + webinars[thirdWebinarIndex]?.image" alt="" />
        <p>{{ webinars[thirdWebinarIndex]?.title }}</p>
      </div>
      <div class="arrow-webinar" @click="nextWebinar">
        <svg
          width="9"
          height="14"
          viewBox="0 0 9 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.58579 7L0.292892 1.70711L1.70711 0.292892L8.41421 7L1.70711 13.7071L0.292892 12.2929L5.58579 7Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
    <div class="mobile_app">
      <div class="mobile_app-download">
        <p class="mobile_app-download-text">Download our app</p>
        <svg
          width="50"
          height="8"
          viewBox="0 0 50 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="3.5"
            y1="4.21973"
            x2="46.5"
            y2="4.21973"
            stroke="url(#paint0_linear_10_1119)"
            stroke-width="7"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_1119"
              x1="27.5"
              y1="7.56232"
              x2="27.5011"
              y2="9.33559"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FD749B" />
              <stop offset="1" stop-color="#281AC8" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p class="mobile_app-description">{{ $t("MOBILEAPPS") }}</p>
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
import axios from "axios"
import { useI18n } from "vue-i18n"
import { ref } from "vue"

export default {
  setup() {
    const webinars = ref([])
    axios.get("http://157.230.100.45/vebinar").then((res) => {
      webinars.value = res.data
    })

    const firstWebinarIndex = ref(0)
    const secondWebinarIndex = ref(1)
    const thirdWebinarIndex = ref(2)

    const previousWebinar = () => {
      if (firstWebinarIndex.value === 0) {
        firstWebinarIndex.value = webinars.value.length - 1
      } else {
        firstWebinarIndex.value--
      }
      if (secondWebinarIndex.value === 0) {
        secondWebinarIndex.value = webinars.value.length - 1
      } else {
        secondWebinarIndex.value--
      }
      if (thirdWebinarIndex.value === 0) {
        thirdWebinarIndex.value = webinars.value.length - 1
      } else {
        thirdWebinarIndex.value--
      }
    }

    const nextWebinar = () => {
      if (firstWebinarIndex.value === webinars.value.length - 1) {
        firstWebinarIndex.value = 0
      } else {
        firstWebinarIndex.value++
      }
      if (secondWebinarIndex.value === webinars.value.length - 1) {
        secondWebinarIndex.value = 0
      } else {
        secondWebinarIndex.value++
      }
      if (thirdWebinarIndex.value === webinars.value.length - 1) {
        thirdWebinarIndex.value = 0
      } else {
        thirdWebinarIndex.value++
      }
    }

    const { t, locale } = useI18n({ useScope: "global" })
    return {
      t,
      locale,
      webinars,
      firstWebinarIndex,
      secondWebinarIndex,
      thirdWebinarIndex,
      previousWebinar,
      nextWebinar,
    }
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
.arrow-webinar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 18px;
  background: #9347b2;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}
.arrow-webinar:hover {
  background: #570091;
}
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
  padding-top: 80px;
  margin-top: 50px;
}
.mobile_app-description {
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
  margin-top: -20px;
  margin-bottom: -20px;
  gap: 30px;
}
.apple {
  max-width: 150px;
}
.android {
  max-width: 150px;
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
  max-width: 750px;
  margin: 0 auto;
  margin-top: 40px;
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
  margin-top: 50px;
}
.cards__card-article img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;
  filter: brightness(70%);
  transition: all 0.3s ease;
}
.cards__card-article p {
  font-weight: 600;
  font-size: 16px;
  color: #5f5f5f;
  margin-top: 10px;
  text-align: left;
  padding: 0px 5px;
}
.cards__card-article {
  width: 350px;
  height: 300px;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.cards__card-article:hover img {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  filter: brightness(100%);
}
.mobile_app-download {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;
}
.mobile_app-download-text {
  font-weight: 700;
  font-size: 35px;
  line-height: 40px;
  text-align: center;
  color: #d2108b;
  margin: 0 auto;
  font-weight: 600;
}
</style>
