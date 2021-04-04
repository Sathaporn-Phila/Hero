// import { Hero } from './hero';

// var fs = require('fs');
// function readHero() {
//   fs.readFile('test.txt', function (err, data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(data.toString());
//     var heroData = data.toString();
//     var heroDataList = heroData.split(",");
//     var heroList = [];
//     var hero = { id: null , name: null} ;
//     for (let i = 0 ; i < heroDataList.length ; i+= 1 ){
//       if ( i % 2 == 0){
//         hero.id = Number(heroDataList[i].replace(/\r\n/g,""));
//       }
//       if ( i % 2 == 1){
//         hero.name = String(heroDataList[i].replace(/\r\n/g,""));
//         heroList.push(hero);
//         hero.id = null;
//         hero.name = null;
//       }
//     }
//     return heroList;
// });
// }

// var HEROS = readHero();

// export const HEROES: Hero[] = HEROS;
import { Hero } from './hero';

export const HEROES: Hero[] = [];
  for(var i = 1;i<5;i++){
    HEROES.push({id: i, name:'a'})
  }