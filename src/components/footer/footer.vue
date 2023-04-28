<template>
  <div class="content">
    <div class="footer-content">
      <table>
        <tr>
          <td>
            <div class="logo-container position">
              <img src="@/assets/images/logo.svg" />
              <p>Sezin</p>
            </div>
          </td>
          <td>{{ $t("ABOUTUS") }}</td>
          <td>{{ $t("HELP") }}</td>

          <td style="margin-top: 90px">
            {{ $t("SOCIALMEDIA") }}
          </td>
        </tr>
        <tr>
          <td>Sezin, Inc, 234</td>
          <td>{{ $t("PROFILE") }}</td>
          <td>{{ $t("SUPPORT") }}</td>
          <td>
            <div class="social">
              <a href="https://ru-ru.facebook.com/" target="_blank"
                ><img src="../../assets/images/facebook.png" alt=""
              /></a>
              <a href="https://twitter.com/?lang=ru" target="_blank"
                ><img src="../../assets/images/twitter.png" alt=""
              /></a>
              <a href="https://www.instagram.com/" target="_blank"
                ><img src="../../assets/images/insta.png" alt=""
              /></a>
            </div>
          </td>
        </tr>
        <tr>
          <td>{{ $t("ADDRESS") }}</td>
          <td>{{ $t("FEATURES") }}</td>
          <td>{{ $t("SIGNUP") }}</td>
        </tr>
        <tr>
          <td class="link-text">sezin@gmail.com</td>
          <td></td>
          <td>{{ $t("REPORTS") }}</td>
        </tr>
        <tr>
          <td class="link-text">+77025559992 ({{ $t("MAIN") }})</td>
          <td></td>
          <td>{{ $t("QA") }}</td>
        </tr>
      </table>
      <p class="company-text">
        © Sezin™, 2023. {{ $t("COPYRIGHT") }}<br />{{ $t("REGNUM") }}
        +77025559992.
      </p>
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
  name: "footer-component",
}
</script>

<style scoped>
.social {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
}
.social img {
  cursor: pointer;
}
.content {
  padding-top: 20px;
}
.logo-container {
  margin: 20px 0;
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
.footer-content {
  width: 84%;
  margin-left: auto;
  margin-right: auto;
}
td {
  color: #212353;
  font-size: 16px;
  font-family: Poppins-Medium, system-ui;
  line-height: 30px;
}
.link-text {
  color: #212353;
  font-size: 14px;
  line-height: 30px;
  font-family: Poppins-LightItalic, system-ui;
}
.company-text {
  margin-bottom: 40px;
  color: #212353;
  font-size: 12px;
  line-height: 20px;
  font-family: Poppins-LightItalic, system-ui;
}
table {
  margin-bottom: 40px;
  width: 100%;
}
</style>
