<template>
  <div>
    <div class="quizz-wrapper">
      <app-header />
      <quiz-intro />
      <true-false-quiz :questions="questions" :results="results" />
      <app-footer />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import QuizIntro from './components/QuizIntro'
import TrueFalseQuiz from './components/TrueFalseQuiz'
import QuizCas from './data/quiz-cas.json'
import QuizVal from './data/quiz-val.json'

export default {
  name: 'quiz',

  components: {
    AppHeader,
    AppFooter,
    QuizIntro,
    TrueFalseQuiz
  },

  data () {
    return {
      questions: [],
      results: []
    }
  },

  mounted () {
    if (this.$i18n.locale === 'es') {
      this.questions = QuizCas.questions
      this.results = QuizCas.results
    } else {
      this.questions = QuizVal.questions
      this.results = QuizVal.results
    }
  },

  watch: {
    '$i18n.locale': {
      handler: function (newLocale) {
        if (newLocale === 'es') {
          this.questions = QuizCas.questions
          this.results = QuizCas.results
        } else {
          this.questions = QuizVal.questions
          this.results = QuizVal.results
        }
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
@import 'variables';

html,
body {
  font-family: $font-base;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $text-color;
  font-size: 100%;
}

body:after {
  content: '';
  position: fixed;
  top: 0;
  height: 100vh;
  left: 0;
  right: 0;
  z-index: -1;
  background-image: url(./assets/images/background.jpg);
  background-size: cover;
  background-position: center 50px;
}

a {
  color: $basic-orange;

  &:hover {
    color: $orange-end;
  }
}

@font-face {
    font-family: 'Compromis';
    src: url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.eot?2');
    src: url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.eot?#iefix') format('embedded-opentype'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.woff?2') format('woff'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.ttf?2') format('truetype'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-webfont.svg#AkkuratRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Compromis';
    src: url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.eot?2');
    src: url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.woff?2') format('woff'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.ttf?2') format('truetype'),
         url('https://compromis.net/wp-content/themes/Compromis/fonts/akkurat-bold-webfont.svg#Akkurat-BoldRegular') format('svg');
    font-weight: bold;
    font-style: normal;
}

.quizz-wrapper {
  position: relative;
  z-index: 2;
}

.slide-enter-active, .slide-leave-active {
  transition: opacity .5s;
  height: auto;
  overflow: hidden;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  height: 0;
  overflow: hidden;
}
</style>
