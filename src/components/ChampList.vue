<template>
  <div class="champ-list">
    <div class="champ-row">
      <div class="champ-img">
        <img src="https://ddragon.leagueoflegends.com/cdn/7.5.2/img/champion/Annie.png" alt="">
      </div>
      <div class="champ-runes">
        <div class="champ-info">
          Annie
        </div>
        <div class="champ-meta">
          <div class="lane-meta">
            <img src="http://opgg-static.akamaized.net/images/site/champion/position-sup-over@2x.png" alt="">
          </div>
          <div class="champ-winrate">
            <span>Win %</span>
            <h1>58%</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="champ-row">
      <div class="champ-img">
        <img src="https://ddragon.leagueoflegends.com/cdn/7.5.2/img/champion/Warwick.png" alt="">
      </div>
      <div class="champ-runes">
        <div class="champ-info">
          Warwick
        </div>
        <div class="champ-meta">
          <div class="lane-meta">
            <img src="http://opgg-static.akamaized.net/images/site/champion/position-top-over@2x.png" alt="">
          </div>
          <div class="champ-winrate">
            <span>Win %</span>
            <h1>58%</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ChampList'
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
</style>