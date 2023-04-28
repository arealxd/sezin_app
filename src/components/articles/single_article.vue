<template>
  <div class="content">
    <div class="inner-content">
      <div class="in-line">
        <p class="block-title">article</p>
        <div class="middle–container">
          <p>{{article.title}}</p>
        </div>
      </div>
      <div v-if="article.description.includes('<p>')">
        <div class="html-content" v-html="article.description"></div>
      </div>
      <div v-else>
        <p class="content-text">{{article.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "single-article-component",
  props: {
    article: Object
  }
}
</script>

<style scoped>

.content {
  min-width: 90%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  background: white;
  max-width: 600px;
  border-radius: 30px;
  text-align: center;
  padding: 40px 60px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  max-height: 95vh;
  overflow: scroll;
}
.content::-webkit-scrollbar {
  display: none;
}
.in-line {
  display: flex;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  margin-bottom: 40px;
}
.block-title {
  width: max-content;
  color: #7474DD;
  border: 0.5px solid #7474DD;
  border-radius: 20px;
  padding: 7px 16px;
  font-size: 16px;
  line-height: 28px;
  font-family: Poppins-Light, system-ui;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.middle–container {
  flex: 1;
  padding-top: 5px;
  padding-right: 20px;
  text-align: center;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.middle–container>p, .middle–container>svg {
  display: inline-block;
  vertical-align: middle;
}
.middle–container>svg {
  margin-left: 10px;
  width: 34px;
  height: 34px;
  cursor: pointer;
}
.middle–container>p {
  font-size: 24px;
  font-family: Poppins-Light, system-ui;
  color: #1C194E;
}
.close-button {
  cursor: pointer;
  padding: 5px 0 5px 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.html-content {
  text-align: start;
}
.content-text, .html-content>>>p {
  margin-top: 10px;
  color: #1C194E;
  font-size: 16px;
  font-family: Poppins-Regular, system-ui;
  line-height: 160%;
  margin-bottom: 30px;
  display: block;
  text-align: left;
}
.html-content>>>h1 {
  color: #1C194E;
  font-size: 20px;
  font-family: Poppins-SemiBold, system-ui;
}
</style>