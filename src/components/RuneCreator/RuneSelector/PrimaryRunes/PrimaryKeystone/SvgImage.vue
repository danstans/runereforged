<template>
  <div class="svg-img">
    <div class="svgs" @mouseover="showHover = true" @mouseout="showHover = false">
      <img :src="getKeystoneSelected.imgSrc" alt="" v-if="getKeystoneSelected">      
      <svg class="svg-hover-frame" viewBox="0 0 60 60" size="large" v-if="showHover">
        <linearGradient id="keystone-gradient-fade" x1="0" y1="0" x2="0" y2="0">
            <stop stop-opacity=".5" offset="0%" :stop-color="getPrimaryColor"></stop>
        </linearGradient>
        <circle cx="30" cy="30" r="28.5" stroke-width="3" fill="none" stroke="url(#keystone-gradient-fade)"></circle>
      </svg>
      <svg class="svg-inner-frame" viewBox="0 0 47 47" size="large">
        <linearGradient id="keystone-gradient" x1="0" y1="0" x2="0" y2="0">
            <stop stop-opacity="1" offset="0%" :stop-color="getPrimaryColor"></stop>
        </linearGradient>
        <circle cx="23.5" cy="23.5" r="22.5" stroke-width="2" fill="none" stroke="url(#keystone-gradient)"></circle>
      </svg>
      <svg class="svg-spinner">
        <linearGradient id="gradient-white-transparent" x1="0" y1="0" x2="0" y2="1">
          <stop stop-opacity="1" stop-color="#fff" offset="0%"></stop><stop stop-opacity="0" stop-color="#fff" offset="100%"></stop>
        </linearGradient>
        <path fill="none" stroke-linecap="round" stroke-width="2px" stroke="url(#gradient-white-transparent)" d="M 31 1 A 30 30 0 0 0 31 61"></path>
        <ellipse cx="50%" cy="1px" fill="#fff" rx="5" ry="2"></ellipse>
      </svg>      
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'SvgImage',
    computed: {
      ...mapGetters([
        'getPrimaryColor',
        'getKeystoneSelected'
      ])
    },
    data () {
      return {
        showHover: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .svg-img {
  min-width: 100px;
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .svgs {
    display: block;
    background: #1e2328;
    border-radius: 50%;
    box-shadow: inset 0 0 7px #000, 0 0 1px #000;
    position: relative;
    transition: opacity 0.2s,filter 0.2s;
    width: 62px;
    height: 62px;
    cursor: pointer;

    >img {
      max-width: 100%;
      max-height: 100%;
      position: absolute;
    }

    .svg-hover-frame {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: opacity 0.2s;
      width: 76px;
      height: 76px;
    }

    .svg-inner-frame {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .svg-spinner {
      width: 100%;
      height: 100%;
      opacity: 1;
      visibility: visible;
      pointer-events: none;
      position: absolute;
      left: 0;
      top: 0;
      transition: opacity 0.2s;
      filter: blur(1px);
      animation: key-rotation 2s linear forwards infinite;
    }
  }
}

@-webkit-keyframes key-rotation {
  to {
    -webkit-transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    transform:rotate(360deg);
  }
}
@keyframes key-rotation{
  to {
    -webkit-transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    transform:rotate(360deg);
  }
}
</style>