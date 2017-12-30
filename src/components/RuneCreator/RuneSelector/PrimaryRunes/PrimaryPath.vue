<template>
  <div class="primary-path">
    <div class="path-img" @click="reset">
      <svg class="svg-circles">
        <linearGradient id="circle-gradient" x1="1" y1="0.6" x2="0" y2="0">
          <stop stop-opacity="1" offset="0%" :stop-color="getPrimaryColor"></stop>
          <stop stop-opacity="0" offset="70%" :stop-color="getPrimaryColor"></stop>
        </linearGradient>
        <circle class="svg-circle-1" cx="50%" cy="50%" r="43%" fill="none" stroke-width="2" stroke="url(#circle-gradient)"></circle>
        <circle class="svg-circle-2" cx="50%" cy="50%" r="43%" fill="none" stroke-width="2" stroke="url(#circle-gradient)"></circle>
        <circle class="svg-circle-3" cx="50%" cy="50%" r="43%" fill="none" stroke-width="2" stroke="url(#circle-gradient)"></circle>
      </svg>
      <svg class="svg-cup">
        <linearGradient id="cup-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop stop-opacity="0" offset="80%" :stop-color="getPrimaryColor"></stop>
          <stop stop-opacity="1" offset="100%" :stop-color="getPrimaryColor"></stop>
        </linearGradient>
        <circle cx="42" cy="42" r="42" fill="none" stroke-width="2" stroke="url(#cup-gradient)"></circle>
      </svg>
      <img :src="getPrimaryRuneImg" alt="">
    </div>
    <div class="path-text">
      <div class="path-name" :style="{color: getPrimaryColor}">{{getPrimaryPathTitle}}</div>
      <div class="path-info">{{getPrimaryPathSubtitle}}</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'PrimaryPath',
    computed: {
      ...mapGetters([
        'getPrimaryPathTitle',
        'getPrimaryPathSubtitle',
        'getPrimaryColor',
        'getPrimaryRuneImg'
      ])
    },
    methods: {
      ...mapActions([
        'resetState',
        'resetKeystone',
        'resetTier',
        'resetSecondaryRunes'
      ]),
      reset: function () {
        this.resetState()
        this.resetKeystone()
        this.resetTier()
        this.resetSecondaryRunes()

      }
    }
  }
</script>

<style lang="scss" scoped>
.primary-path {
  width: 300px;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  .path-img {
    width: 100px;
    z-index: 3;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    .svg-circles {
      position: absolute;
      margin: -32px;
      top: 50%;
      left: 50%;
      width: 64px;
      height: 64px;
      display: block;
      z-index: 3;

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

    >img {
      max-width: 36px;
      max-height: 36px;
    }

  }

  .path-text {
    flex-grow: 1;
    width: 60%;
    padding-top: 20px;
    text-align: left;
    display: flex;
    flex-direction: column;

    .path-name {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1.2rem;
      padding-bottom: 5px;
    }

    .path-info {
      font-size: 13px;
      height: 10%;
      font-family: 'Roboto', sans-serif;
      color: #a09b8c;
    }
  }
}
</style>