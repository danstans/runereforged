<template>      
  <div class="secondary-path-img" @click="toggleClicked"> 
    <img :src="getSecondaryPathSelected.pathSmall" alt="" v-if="getSecondaryPathSelected">
    <svg class="svg-circles">
      <linearGradient id="circle-gradient-secondary" x1="1" y1="0.6" x2="0" y2="0">
        <stop stop-opacity="1" offset="0%" :stop-color="getSecondaryPathColor"></stop>
        <stop stop-opacity="0" offset="70%" :stop-color="getSecondaryPathColor"></stop>
      </linearGradient>
      <circle class="svg-circle-1" cx="50%" cy="50%" r="43%" fill="none" stroke-width="2" stroke="url(#circle-gradient-secondary)"></circle>
      <circle class="svg-circle-2" cx="50%" cy="50%" r="43%" fill="none" stroke-width="2" stroke="url(#circle-gradient-secondary)"></circle>
      <circle class="svg-circle-3" cx="50%" cy="50%" r="43%" fill="none" stroke-width="2" stroke="url(#circle-gradient-secondary)"></circle>
    </svg>
    <svg class="svg-cup">
      <linearGradient id="cup-gradient-secondary" x1="0" y1="0" x2="0" y2="1">
        <stop stop-opacity="0" offset="80%" :stop-color="getSecondaryPathColor"></stop>
        <stop stop-opacity="1" offset="100%" :stop-color="getSecondaryPathColor"></stop>
      </linearGradient>
      <circle cx="42" cy="42" r="42" fill="none" stroke-width="2" stroke="url(#cup-gradient-secondary)"></circle>
    </svg>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'PathImg',
    computed: {
      ...mapGetters([
        'getSecondaryPathColor',
        'getSecondaryPathSelected'
      ])
    },
    methods: {
      toggleClicked: function () {
        this.$emit('toggleClicked')
      }
    }
  }
</script>

<style lang="scss" scoped>
.secondary-path-img {
  width: 100px;
  height: inherit;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  >img {
    max-width: 36px;
    max-height: 36px;
  }

  .svg-circles {
    position: absolute;
    margin: -32px;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    display: block;

    .svg-circle-1 {
      transform: translateY(6%);
      transform-origin: 50% 50%;
    }

    .svg-circle-2 {
      transform: rotate(120deg) translateY(6%);
      transform-origin: 50% 50%;
    }

    .svg-circle-3 {
      transform: rotate(240deg) translateY(6%);
      transform-origin: 50% 50%;
    }
  }

  .svg-cup {
    position: absolute;
    left: 7px;
    bottom: 7px;
    width: 86px;
    height: 86px;
    display: block;
  } 
} 
</style>