<template>
  <div id="app">
    <rune-creator></rune-creator>
    <champ-list></champ-list>
  </div>
</template>

<script>
import RuneCreator from './components/RuneCreator'
import ChampList from './components/ChampList'
export default {
  name: 'app',
  components: { RuneCreator, ChampList }
}
</script>

<style>
@import url('https://necolas.github.io/normalize.css/7.0.0/normalize.css');
@font-face {
  font-family: Beaufort;
  src: url('../static/Beaufort.ttf');
}

@font-face {
    font-family: Beaufort;
    src: url('../static/Beaufort-Bold.ttf');
    font-weight: bold;
}

#app {
  font-family: Beaufort, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: url('http://d181w3hxxigzvh.cloudfront.net/wp-content/themes/rune_forge/imgs/magic-repeater-sm.jpg');
  color: white;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
