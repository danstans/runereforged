const axios = require('axios')
const firebase = require('firebase')
const process = require('process')

var config = {
  apiKey: "AIzaSyBw0ffYIn0FhoNa9kN3tZNnVxQGTkikSUE",
  authDomain: "runesreforged-87f0f.firebaseapp.com",
  databaseURL: "https://runesreforged-87f0f.firebaseio.com",
  projectId: "runesreforged-87f0f",
  storageBucket: "runesreforged-87f0f.appspot.com",
  messagingSenderId: "228645880730"
}
firebase.initializeApp(config)

const database = firebase.database()
const championGG = 'http://api.champion.gg/v2/champions/?&limit=200&champData=hashes&api_key=61afa0f08a607de79c54e39080551dcc'
const riotAPI = `https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=image&dataById=false&api_key=RGAPI-4f1854a2-a0e6-48e1-9eb8-2bac07ea5580`
const paths = [8000, 8100, 8200, 8300, 8400]

function clearDB () {
  paths.forEach(path => {
    database.ref(path).remove()
  })
}

async function makeRequest (champIds) {
  await axios.get(championGG).then(response => {
  response.data.forEach(champion => {
    let championId = champion.championId
    let champName = champIds[championId].name
    let champImg = champIds[championId].image
    let role = champion.role
    let runes = champion.hashes.runehash.highestWinrate.hash
    let runesWinrate = champion.winRate
    let primaryKey = runes.slice(0, 4)
    let secondaryKey = runes.slice(5, 9)
    let payload = constructJSON(championId, champName, champImg, role, runes, runesWinrate)
    writeToDb(primaryKey, secondaryKey, payload)
    })
  }).catch(error => {
    console.log(error)
  })
}

function constructJSON (championId, champName, champImg,  role, runes, runesWinrate) {
  // Get the champion Img Src function
  return {
    'champId': championId,
    'champName': champName,
    'champeImg': `https://ddragon.leagueoflegends.com/cdn/7.24.2/img/champion/${champImg}`,
    'role': role,
    'runes': runes,
    'runesWinRate': runesWinrate
  }
}

function writeToDb (primaryKey, secondaryKey, payload) {
  database.ref(primaryKey).child(secondaryKey).push(payload)
}

async function getChampionIds () {
  let response = await axios.get(riotAPI).catch(error => {
    console.log(error)
  })
  let champIds = await constructImageJSON(response).catch(error => {
    console.log(error)
  })
  return champIds
}

async function constructImageJSON (response) {
  var champIds = []
  for (const champ of Object.keys(response.data.data)) {
    var champName = champ // This is the champ name
    var image = response.data.data[champ].image.full // This is the champ image
    var id = response.data.data[champ].id // This is the champ ID
    champIds[id] = { 'name': champName, 'image': image }
  }
  return await champIds
}

function main(){
  clearDB()
  getChampionIds().then(id => {
    makeRequest(id)
  })
}

main()
