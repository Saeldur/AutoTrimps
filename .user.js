// ==UserScript==
// @name         AutoTrimps-Saeldur
// @version      1.0-Zek
// @namespace    https://Saeldur.github.io/AutoTrimps
// @updateURL    https://Saeldur.github.io/AutoTrimps/.user.js
// @description  Automate all the trimps!
// @author       zininzinin, spindrjr, Ishkaru, genBTC, Zeker0, Saeldur
// @include      *trimps.github.io*
// @include      *kongregate.com/games/GreenSatellite/trimps
// @include      *trimpstesting411.netlify.com*
// @connect      *Saeldur.github.io/AutoTrimps*
// @connect      *trimps.github.io*
// @connect      self
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.id = 'AutoTrimps-Zek';
//This can be edited to point to your own Github Repository URL.
script.src = 'https://Saeldur.github.io/AutoTrimps/AutoTrimps2.js';
//script.setAttribute('crossorigin',"use-credentials");
script.setAttribute('crossorigin',"anonymous");
document.head.appendChild(script);
