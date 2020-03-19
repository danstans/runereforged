<template>
<div>
  <svg class="svg-top" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 9">
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" :stop-color="getPrimaryColor" stop-opacity="0"></stop>
      <stop offset="50%" :stop-color="getPrimaryColor" stop-opacity="1">
      </stop><stop offset="100%" :stop-color="getPrimaryColor" stop-opacity="0"></stop>
    </linearGradient>
    <path fill="none" stroke="url('#grad1')" d="M0 4.5h193l4 4"></path>
    <path fill="none" stroke="url('#grad1')" d="M286 8.5H62l-7-8H20l-4 4"></path>
  </svg>
  <svg class="svg-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 286 9">
    <path fill="none" stroke="url('#grad1')" d="M0 4.5h193l4 4"></path>
    <path fill="none" stroke="url('#grad1')" d="M286 8.5H62l-7-8H20l-4 4"></path>
  </svg>
</div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SvgBorder",
  computed: {
    ...mapGetters(["getPrimaryColor"])
  }
};
</script>

<style scoped>
.svg-top {
  position: absolute;
  right: 0;
  top: 0;
  width: 286px;
  height: 9px;
}

.svg-bottom {
  position: absolute;
  right: 0;
  width: 286px;
  height: 9px;
  bottom: 0;
  -webkit-transform: scale(1, -1);
  -ms-transform: scale(1, -1);
  transform: scale(1, -1);
}
</style>
