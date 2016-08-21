// var Prelude = require('purescript-prelude/src/Prelude');

// const main = require('./Main.purs');

// purs-loader sucks yo
console.log(`webpack entrez here called...`);
const main = require('../output/Main').main;
main();
console.log(`webpack entrez here finish...`);
