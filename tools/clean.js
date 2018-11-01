const {readdirSync} = require('fs');
const rimraf = require('rimraf');
const colors = require('colors');

readdirSync('dist').map(i => {
    if(i!='.git'){
        rimraf.sync(`dist/${i}`);
        console.log('DEL'.bgRed,` dist/${i}`);
    }
})