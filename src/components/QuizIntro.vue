<template>
  <section class="intro container">
    <p><span class="intro-flair">QUIZ</span></p>
    <h3 class="intro-heading">
      <div class="intro-heading-emoji">
        <img src="../assets/images/emoji.png" width="100%" alt="Emoji" />
      </div>
      <div class="intro-heading-title">
        <TitleCas v-if="$i18n.locale === 'ca'" />
        <TitleVal v-else />
      </div>
    </h3>
    <h2 class="intro-subheading">{{ $t('intro.title') }}</h2>
    <p class="intro-description">{{ $t('intro.description') }}</p>
    <ul>
      <li><button @click="switchLanguage('ca')">Valencià</button></li>
      <li><button @click="switchLanguage('es')">Castellano</button></li>
    </ul>
    <p class="intro-action"><a href="#q1" v-scroll-to="'#q1'"><span class="emoji">📝</span> {{ $t('intro.start') }}</a></p>
  </section>
</template>

<script>
import TitleCas from '../assets/images/title-cas.svg'
import TitleVal from '../assets/images/title-val.svg'

export default {
  name: 'quiz-intro',

  components: {
    TitleCas,
    TitleVal
  },

  methods: {
    switchLanguage (lang) {
      this.$i18n.locale = lang
      document.documentElement.lang = lang
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../variables';

.intro {
  padding: 2.5rem;
  text-align: center;
}

.intro-heading {
  margin: 1rem auto;

  &-emoji {
    max-width: 180px;
    margin: 0 auto;
  }

  &-title {
    max-width: 600px;
    margin: 0 auto;
    margin-top: -4rem;
    margin-bottom: -3rem;
  }
}

.intro-subheading {
  font-size: 2rem;
  letter-spacing: -1px;
  line-height: 1;
}

.intro-description {
  max-width: 800px;
  margin: 1rem auto;
}

.intro-flair {
  border: 1px $text-color solid;
  padding: 0.25rem 1rem;
  border-radius: 20px;
  opacity: 0.75;
}

.intro-action {
  margin-top: 2rem;

  a {
    color: $text-color;
    border: 2px $text-color solid;
    border-radius: 30px;
    padding: 0.5rem 2rem;
    transition: 0.25s ease-in-out;

    &:hover {
      background: $text-color;
      color: $background;
    }
  }
  .emoji {
    position: relative;
    top: 2px;
    margin-right: 0.5rem;
  }
}

@media (min-width: 769px) {
  .intro {
    padding: 3rem 5rem;

    &-heading {
      margin: 2rem auto;

      &-text {
        width: 80%;
      }
    }

    &-subheading {
      font-size: 2.5rem;
      margin-top: 3rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
}

@media (max-height: 700px) {
  .intro {
    padding-top: 2.5rem;
  }
}
</style>
