//rhyme generator
var cardSpace = document.getElementById("emptyarea");
var generateBtn4 = document.getElementById("generate4");
var input4 = document.getElementById("rhymeinput");


generateBtn4.addEventListener("click", function(event){
    event.preventDefault();
    var userinput = {
        firstWord: input4.value.trim()
    };


})



function rhymeAPI() {
    var requestUrl4 = "https://www.stands4.com/services/v2/rhymes.php?uid=1001&tokenid=tk324324&term=rhyme&format=json";

    fetch(requestUrl4)
        .then(function (response){
            return response.json();
        })
    .then(function(data){
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            var 
        }
    })
}










//lyrics generator
$(document).ready(function() {

    function generateLyric() {
      var lyrics = [
        ["It's better to burn out, than to fade away.", "Neil Young, My My, Hey Hey"],
        ["I am the key to the lock in your house that keeps your toys in the basement / And if you get too far inside, you'll only see your reflection.", "Radiohead, Climbing Up the Walls"],
        ["All you need is love, love. Love is all you need.", "Beatles, All You Need Is Love"],
        ["The preacher said, you know you always have the Lord by your side. And I was so pleased to be informed of this that I ran twenty red-lights in his name.", "Rolling Stones, Far Away Eyes"],
        ["And I am not afraid of dying, why should I be? We all gotta go sometime.", "Pink Floyd, The Great Gig In The Sky"],
        ["Day destroys the night, night divides the day. Tried to run, tried to hide, break on through to the other side.", "The Doors, Break On Through"]
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
