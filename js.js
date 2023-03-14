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








// document.addEventListener('DOMContentLoaded', () => {
//   // Functions to open and close a modal
//   function openModal($el) {
//     $el.classList.add('is-active');
//   }

//   function closeModal($el) {
//     $el.classList.remove('is-active');
//   }

//   function closeAllModals() {
//     (document.querySelectorAll('.modal') || []).forEach(($modal) => {
//       closeModal($modal);
//     });
//   }

//   // Add a click event on buttons to open a specific modal
//   (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
//     const modal = $trigger.dataset.target;
//     const $target = document.getElementById(modal);

//     $trigger.addEventListener('click', () => {
//       openModal($target);
//     });
//   });

//   // Add a click event on various child elements to close the parent modal
//   (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
//     const $target = $close.closest('.modal');

//     $close.addEventListener('click', () => {
//       closeModal($target);
//     });
//   });

//   // Add a keyboard event to close all modals
//   document.addEventListener('keydown', (event) => {
//     const e = event || window.event;

//     if (e.keyCode === 27) { // Escape key
//       closeAllModals();
//     }
//   });
// });
