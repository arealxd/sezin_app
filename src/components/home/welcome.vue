<template>
  <div class="content">
    <div class="main-content">
      <div class="image-container">
        <img src="@/assets/images/welcome.svg" />
      </div>
      <div class="text-container">
        <div class="text-block">
          <p class="title">{{ $t("WELCOME") }}</p>
          <p class="hint">{{ $t("EXIST") }}</p>
          <ul>
            <li class="hint">
              {{ $t("WORKFOR") }}
            </li>
            <li class="hint">
              {{ $t("WORKFOR2") }}
            </li>
          </ul>
          <div class="get-started">
            <p>{{ $t("DISCOVER") }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n"

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" })
    return { t, locale }
  },
  name: "welcome-component",
}
</script>

<style scoped>
.content {
  padding-top: 84px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  inline-size: max-content;
  height: max-content;
  block-size: max-content;
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
  padding-bottom: 30px;
  text-align: start;
  font-family: Poppins-Light, system-ui;
  font-size: 34px;
  line-height: 50px;
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.hint {
  text-align: start;
  color: #333333;
  font-size: 18px;
  line-height: 24px;
  font-family: Poppins-Light, system-ui;
}
.get-started {
  background: linear-gradient(178.18deg, #fd749b -13.56%, #281ac8 158.3%);
  border-radius: 100px;
  width: max-content;
  padding: 15px 33px;
  margin-top: 60px;
  cursor: pointer;
}
.get-started p {
  font-family: Poppins-Bold, system-ui;
  font-size: 14px;
  line-height: 21px;
  color: white;
  text-decoration: underline;
  font-weight: 700;
}
@media screen and (max-width: 1000px) {
  .text-block {
    width: 100%;
    padding-right: 24px;
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
    padding-left: 24px;
  }
  .image-container {
    display: none;
  }
}
</style>
