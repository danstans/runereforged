<template>
  <div class="path-selector">
    <path-category  v-for="(path, index) in getPaths" :category="path" :key="index"></path-category>
  </div>
</template>

<script>
  import PathCategory from './PathSelector/PathCategory'
  import { mapGetters } from 'vuex'
  export default {
    name: 'PathSelector',
    components: { PathCategory },
    computed: {
      ...mapGetters([
        'getPaths'
      ])
    }
  }
</script>

<style lang="scss" scoped>
.path-selector {
  background-color: #020b0e;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>