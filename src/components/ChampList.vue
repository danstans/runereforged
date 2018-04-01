<template>
<div>
  <div class="champ-list" v-if="getChampionList">

    <div class="champ-row" v-for="(champ, index) in sortedChampList" :key="index">
      <div class="champ-img">
        <!-- <img src="https://ddragon.leagueoflegends.com/cdn/7.5.2/img/champion/Annie.png" alt=""> -->
        <img :src="champ.champeImg" alt="">
      </div>
      <div class="champ-runes">
        <div class="champ-info">
          {{champ.champName}}
        </div>
        <div class="champ-meta">
          <div class="lane-meta">
            <img src="http://opgg-static.akamaized.net/images/site/champion/position-sup-over@2x.png" alt="" v-if="champ.role == 'DUO_SUPPORT'">
            <img src="http://opgg-static.akamaized.net/images/site/champion/position-adc-over@2x.png" alt="" v-else-if="champ.role == 'DUO_CARRY'">
            <img src="http://opgg-static.akamaized.net/images/site/champion/position-top-over@2x.png" alt="" v-else-if="champ.role == 'TOP'">
            <img src="http://opgg-static.akamaized.net/images/site/champion/position-jun-over@2x.png" alt="" v-else-if="champ.role == 'JUNGLE'">
            <img src="http://opgg-static.akamaized.net/images/site/champion/position-mid-over@2x.png" alt="" v-else-if="champ.role == 'MIDDLE'">
          </div>
          <div class="champ-winrate">
            <span>Win Rate</span>
            <h1>{{(champ.runesWinRate * 100).toFixed(2)}}%</h1>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="sidebar" v-else>
    Create a page and this list will populate with champions that work well with it
  </div>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'
export default {
  name: 'ChampList',
  computed: {
    ...mapGetters([
      'getRunePath',
      'getChampionList'
    ]),
    sortedChampList: function () {
      // return this.getChampionList
      return _.orderBy(this.getChampionList, 'runesWinRate', 'desc')
    }
  },
  methods: {
    ...mapActions([
      'updateChampList'
    ])
  },
  watch: {
    'getRunePath': {
      handler: function (after, before) {
        if (after) {
          this.updateChampList()
        } else {
          this.updateChampList('reset')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.champ-list {
  width: 25%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  overflow: auto;
  overflow-x: hidden;

  .champ-row {
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-right: 10px;

    .champ-img {
      width: 130px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 66%;
        height: 66%;
        display: block;
        border: 3px solid #cdbe91;
        box-sizing: border-box;
      }
    }

    .champ-runes {
      flex-grow: 1;
      text-align: left;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;

      .champ-info {
        padding-top: 20px;
        flex-grow: 1;
        font-size: 1.2rem;
        font-weight: bold;
      }

      .champ-meta {

        width: 130px;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .champ-winrate {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 48px;

          >span {
            font-size: 1rem;
            font-weight: bold;
          }

          >h1 {
            text-align: center;
            font-size: 1.1rem;
          }
        }

        .lane-meta {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          >img {
            max-height: 48px;
            max-width: 48px;
          }
        }
      }
    }
  }
}

.sidebar {
  height: 100vh;
  width: 25%;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
}
</style>
