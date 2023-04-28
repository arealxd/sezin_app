<template>
  <header-component :selected-tab-index="2" />
  <div class="list" v-if="isLoaded">
    <p class="title">{{ $t("ARTICLES") }}</p>
    <single-article-component v-for="article in articles" :key="article" :article="article" />
  </div>
</template>

<script>
import SingleArticleComponent from "@/components/articles/single_article.vue"
import HeaderComponent from "@/components/header/header.vue"
import api from "@/service/api"
import { useI18n } from "vue-i18n"

export default {
  setup() {
    const { t, locale } = useI18n({ useScope: "global" })
    return { t, locale }
  },
  name: "index",
  components: { HeaderComponent, SingleArticleComponent },
  data() {
    return {
      articles: [],
      isLoaded: false,
    }
  },
  mounted() {
    api.feeling.findAllArticles().then((response) => {
      this.articles = response.data
      this.isLoaded = true
    })
  },
}
</script>

<style scoped>
.title {
  color: black;
  font-size: 20px;
  font-family: Poppins-SemiBold, system-ui;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 40px;
}
</style>
