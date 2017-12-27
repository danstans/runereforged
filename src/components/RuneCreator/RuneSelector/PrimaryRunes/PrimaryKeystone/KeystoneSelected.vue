<template>
  <div class="primary-keystone">
    <div class="keystone-information">
      <div class="keystone-name">
        {{getKeystoneSelected.keystoneName}}
      </div>
      <div class="keystone-short">
        {{ getKeystoneSelected.keystoneDescription }}
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'KeystoneSelected',
    computed: {
      ...mapGetters([
        'getKeystoneSelected'
      ])
    }
  }
</script>

<style lang="scss" scoped>
.keystone-information {
  flex-grow: 1;
  width: 60%;
  padding-top: 20px;
  padding-bottom: 50px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .keystone-name {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
  }

  .keystone-short {
    font-size: 13px;
    height: 10%;
    font-family: 'Roboto', sans-serif;
  }
}
</style>