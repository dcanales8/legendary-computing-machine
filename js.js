//rhyme generator
var cardSpace = document.getElementById("emptyarea");
var generateBtn4 = document.getElementById("generate4");
var input4 = document.getElementById("rhymeinput");


generateBtn4.addEventListener("click", function(event){
    event.preventDefault();
    var userinput = {
        firstWord: input4.value.trim()
    };
    //rhymeAPI(userinput);

})



//lyrics generator
$(document).ready(function() {

    function generateLyric() {
      var lyrics = [
        ["Hello, it’s me – Adele, Hello"],
        ["To the left, to the left, everything you own in a box to the left – Beyonce, Irreplaceable"],
        ["All you need is love, love. Love is all you need.", "Beatles, All You Need Is Love"],
        ["You’re the one that I want (you are the one I want) Oo-oo-oo, honey The one that I want (you are the one I want) – John Travolta, You’re The One That I Want"],
        ["Take on me (take on me)Take me on (take on me) I’ll be gone In a day or two – a-ha, Take On Me"],
        ["Nice to meet you, where you been, I can show you incredible things – Taylor Swift, Blank Space"],
        ["Say it ain’t so, I will not go Turn the lights off, carry me home – Blink-182, All the Small Things"],
        ["Today was gonna be the day But they’ll never throw it back to you By now you should’ve somehow Realized what you’re not to do I don’t believe that anybody Feels the way I do, about you now – Oasis, Wonderwall"],
        ["Do you remember when we used to sing Sha la la la la la la la la la la dee dah – Van Morrison, Brown Eyed Girl"],
        ["Don’t stop believin’ Hold on to the feelin’ Streetlights, people – Journey, Don’t Stop Believin"],
        ["Take my hand, take my whole life too, but I can’t help falling in love with you – Elvis Presley, Can’t Help Falling In Love"],
        ["I get knocked down, but I get up again – Chumbawamba, I Get Knocked Down"],
        ["We are the champions, my friends And we’ll keep on fighting ’til the end – Queen, We Are The Champions"]
      ];
  
      var randomNumber = Math.floor(Math.random() * lyrics.length);
  
      var lyric = lyrics[randomNumber][0];
  
      $("#lyric").text(lyrics[randomNumber][0]);
      $("#artist").text(lyrics[randomNumber][1]);
  
    //   $("#tweetBtn iframe").remove();
    //   var twit = lyrics[randomNumber][0] + " - " + lyrics[randomNumber][1];
    //   var x = $('<a></a>')
    //     .addClass('twitter-share-button')
    //     .attr('href', 'https://twitter.com/share')
    //     .attr('data-url', 'https://codepen.io/ukafadar/full/obBWPB/')
    //     .attr('data-text', twit);
    //   $('#tweetBtn').append(x);
    //   twttr.widgets.load();
    }
  
    $("#generate-btn").click(function() {
      generateLyric();
    });
    
      generateLyric();
  
  });


// Random Song API
// var random_song_out = "";
// document.getElementById("savec2").addEventListener("click",saverandomsong);
// const r_song = document.querySelector('#generatec2');
// r_song.addEventListener('click', newRandomSong);

// function saverandomsong(){
//   localStorage.setItem("randomsong",random_song_out)
//   document.getElementById("savec2").style.display="none";
//   document.getElementById("clearc2").style.display="flex";


// var CLIENTID = "Eq8KSecb2Yz4Lq--EUjuGWH_8OifHCRwdwHr1ztKdLx5Qk_zCZG--AXPSQzMXhL-";
// var CLIENTSECRET = "-3Ynmxt9BZab3Qs5sbr_GdzGxXoGqSqbSISFuEQwquYeVm-5-A3nFIcgUOvDSY731GT-hhJtvTK5jYDccT7juQ";
// var accessToken = "?access_token=CXyFeSBw2lAdG41xkuU3LS6a_nwyxwwCz2dCkUohw-rw0C49x2HqP__6_4is5RPx";
// var API = "https://api.genius.com/search";
// var APISong = "https://api.genius.com/songs/";
// var songID = "2471960";
// var maxSong = 2471960;
// //Max song is 489579 for a fairly safe number. But 2 million songs 

// /**
//  * Returns a random integer between min (inclusive) and max (inclusive)
//  */
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// //https://api.genius.com/search?q=Kendrick%20Lamar
// var xhr = new XMLHttpRequest(); //XML HTTP Request
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     if (xhr.status === 200 || xhr.status === 304) {
//       // Success! Do stuff with data.
//       //console.log(xhr.responseText); 
//     }
//   }
// };
// xhr.open("GET", APISong + songID + accessToken, false);
// //xhr.open("GET", API+accessToken+ '&q=Kendrick%20Lamar', false);

// xhr.send();
// //console.log(xhr.status);
// //console.log(xhr.statusText);
// demo = xhr.response;

// var json = JSON.parse(demo);
// var song = json['response']['song'];


// function newRandomSong() {
//   songID = getRandomInt(1, maxSong);
//   randomSong();
// }

// function randomSong() {
//   xhr.open("GET", APISong + songID + accessToken, false);
//   xhr.send();
//   demo = xhr.response;

//   while (xhr.status === 404) { //Checks if the Random Song Exists
//     songID = getRandomInt(1, maxSong);
//     xhr.open("GET", APISong + songID + accessToken, false);
//     xhr.send();
//     demo = xhr.response;
//   }

//   json = JSON.parse(demo);
//   song = json['response']['song'];
//   console.log(song);
//   random_song_out+=`<ul><li><b>Artist Name:</b>${song['artist_names']}</li></ul>`;
//   random_song_out+=`<li><b>Title:</b>${song['full_title']}</li>`;
//   random_song_out+=`<li><b>Song:</b>${song['embed_content']}</li>`;
//   document.getElementById("card2").querySelector(".result").innerHTML = random_song_out;
//   document.getElementById("savec2").disabled=false;
// };

