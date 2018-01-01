# Runes Reforged Tool

### Runes reforged tool is created for the Riot API contest 2017. You can view a working demo at [this URL.](https://runesreforged-87f0f.firebaseapp.com/)

This project is a recreation of the new rune creator that can be viewed in the client. I wanted to recreate this tool so that other developers can utilize it for their own ideas. This will allow developers to create unique experience that help educate the community about the new runes system.

I have created my own use case to showcase the rune-creator tool. Upon creating a completing a rune page, the client calls for data stored in the database and populates the sidebar with champions from the champion.gg API.

> Must be viewed on a large display

## Goals

- [ ] Build a standalone rune-creator component for others to use
- [x] Build a rough draft of the rune-creator component.
- [x] Write a script that refreshes the database with new champion.gg / riot API data.
- [x] Populate the champion list with information based on the completed rune page.
- [ ] Present additional information like why a certain champion may take a certain rune over the one you chose. Sort by percent match between the page you created and the page that is best.

## Languages & Packages

- VueJs
- Vuex
- Lodash
- HTML/SCSS/JS
- SVG
- Node.js (Async Await)
- Rito API
- Champion.gg API
- Firebase


## Build Setup
Make sure you have node/npm installed :^)

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Things I learned along the way
* SVG/lineargradients (or at least how to copy SVG)
* CSS animations
* Managing state requires careful planning and foresight
* Lodash is easier than I thought
* How to change state of something inside a list (this was a big one)

## Things I didn't have the time for
* The champ list is lacking, currently the list just shows champ with the matching keystone in decreasing order of win rate. The idea was to show the runes that each champion takes so that you can compare them to the rune page you created.
* The ability to sort the champ list by different roles. Sort by highest win rate or sort by % in common with your page.
* The secondary rune tier selection is finnicky. I know how the team did it and I wasn't feeling up for the task. Sorry, at most it's 1 extra click to get your secondary tier runes perfect. :/
* The background images don't reflect changes based on primary and secondary paths.

## Final thoughts
These api contest are very fun for me. The community and the ideas are very worthwhile. However, the timing for this event was not good for me at all, I didn't realize this was going on until last saturday so I only had 7 days to develop - holidays. VueJS is a great framework and I much prefer it to others like React; I suppose I'll have to become more comfortable to react soon. I'd like to continue working on this and distribute it to other developers, but I understand if riot will not allow me to do that. Please send me a PM or email if you need to get in touch with me.
