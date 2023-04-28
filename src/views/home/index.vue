<template>
  <article-component v-if="isShowArticle" :article="article" v-on:close="hideArticle" />
  <video-component v-if="isShowVideo" :video="video" v-on:close="hideVideo" />
  <exercise-component v-if="isShowExercise" :exercises="exercises" v-on:close="hideExercises" />
  <leave-message-component v-if="isShowMessage" v-on:closeMessage="isShowMessage = false" />
  <header-component :registerprops="showRegister" :selected-tab-index="selectedTab" />
  <hero-component @showregister="test" id="hero" />
  <welcome-component id="welcome" />
  <feeling-component
    v-on:showArticle="showArticle"
    v-on:showVideo="showVideo"
    v-on:showExercises="showExercises"
  />
  <comments-component v-on:showLeaveMessage="isShowMessage = true" id="comments" />
  <webinars-component />
  <footer-component id="contacts" />
</template>

<script>
import HeaderComponent from "@/components/header/header.vue"
import FooterComponent from "@/components/footer/footer.vue"
import HeroComponent from "@/components/home/hero.vue"
import WelcomeComponent from "@/components/home/welcome.vue"
import FeelingComponent from "@/components/home/feeling.vue"
import CommentsComponent from "@/components/home/comments.vue"
import WebinarsComponent from "@/components/home/webinars.vue"
import ArticleComponent from "@/components/alert/article.vue"
import VideoComponent from "@/components/alert/video.vue"
import ExerciseComponent from "@/components/alert/exercise.vue"
import LeaveMessageComponent from "@/components/alert/leave_message.vue"

export default {
  name: "home-view",
  components: {
    LeaveMessageComponent,
    ExerciseComponent,
    VideoComponent,
    ArticleComponent,
    WebinarsComponent,
    CommentsComponent,
    FeelingComponent,
    WelcomeComponent,
    HeroComponent,
    FooterComponent,
    HeaderComponent,
  },
  data() {
    return {
      isShowArticle: false,
      isShowVideo: false,
      isShowExercise: true,
      article: null,
      video: null,
      exercises: null,
      selectedTab: 0,
      isShowMessage: false,
      showRegister: 0,
    }
  },
  mounted() {
    let part = this.$route.query.part
    if (!part) {
      part = "hero"
    }
    this.scrollToComponent(part)
    this.$watch(
      () => this.$route.query.part,
      (toValue) => {
        this.scrollToComponent(toValue)
      }
    )
  },
  methods: {
    test() {
      this.showRegister = this.showRegister + 1
      console.log("test", this.showRegister)
    },
    showArticle(article) {
      this.article = article
      this.isShowArticle = true
    },
    showVideo(video) {
      this.video = video
      this.isShowVideo = true
    },
    showExercises(exercises) {
      this.exercises = exercises
      this.isShowExercise = true
    },
    hideArticle() {
      this.isShowArticle = false
    },
    hideVideo() {
      this.isShowVideo = false
    },
    hideExercises() {
      this.isShowExercise = false
    },
    scrollToComponent(path) {
      let position = document.getElementById(path).offsetTop
      if (path === "welcome") {
        this.selectedTab = 0
      } else if (path === "comments") {
        this.selectedTab = 1
      } else if (path === "contacts") {
        this.selectedTab = 3
      } else if (path === "hero") {
        position -= 100
      }
      window.scrollTo({ top: position, behavior: "smooth" })
    },
  },
}
</script>

<style scoped></style>
