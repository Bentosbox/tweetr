//Functions for displaying tweeted messages

function createTweetElement(tweet) {

  let name = tweet.user.name;
  let avatarSmall = tweet.user.avatars.small;
  let avatarRegular = tweet.user.avatars.regular;
  let avatarLarge = tweet.user.avatars.large;
  let userHandle = tweet.user.handle;
  let contentText = tweet.content.text;
  let createdAt = timeSince(tweet.created_at);

  tweetStructure = {
    "user": {
      "name": name,
      "avatars": {
       "small":   avatarSmall,
       "regular": avatarRegular,
       "large":   avatarLarge
      },
      "handle": userHandle
    },
    "content": {
      "text": contentText
    },
    "created_at": createdAt
  };


  var $tweet =
    `
      <article>
        <header>
            <img src = '${`${escape(avatarSmall)}`}'>
          <text>
            ${`${escape(name)}`}
          </text>
          <dt>
            ${`${escape(userHandle)}`}
          </dt>
        </header>
        <div>
          ${`${escape(contentText)}`}
        </div>
        <footer>
          <text>
            ${`${escape(createdAt)}`}
          </text>
            <img src = 'https://cdn3.iconfinder.com/data/icons/glypho-free/64/flag-slanted-24.png'>
            <img src = 'https://cdn3.iconfinder.com/data/icons/simple-files-1/128/Update-24.png'>
            <img src = 'https://cdn3.iconfinder.com/data/icons/simple-files-1/128/Like-24.png'>
        </footer>
      </article>
    `
  return $tweet;
  }


function renderTweets(tweets) {
  $('.articleContainer').empty();
  for (eachTweet of tweets) {
    $('.articleContainer').prepend(createTweetElement(eachTweet));
  }
}


function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


function loadTweets(databaseTweets) {
  $.ajax({
      method: "GET",
      url: "/tweets",
  }).done (function (databaseTweets) {
    renderTweets(databaseTweets);
  });
}

//Experimental Time Since Function

function timeSince(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  var interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
      return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
      return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
      return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
      return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
      return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

$(document).ready(function() {
  loadTweets();
  $('.new-tweet form').on('submit', function(event) {
    event.preventDefault();
    let text = $('.new-tweet textarea').serialize();
    let tweetInput = $('.new-tweet textarea').val().length;
    let tweetWords = $('.new-tweet textarea');
    console.log(text);
    if (!tweetInput) {
      alert ('Feed Me Letters NomNomNom');
    } else if (tweetInput > 140) {
      alert ('Halep Too Much Letters I cant eat that much');
    } else {
      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: text
    }).done(function(newTweet) {
        $('.new-tweet textarea').focus();
        $('.new-tweet textarea').val('');
        loadTweets(tweetWords);
      });
    }
  });

//Work in Progress
  $("#nav-bar button").click(function() {
    $(".new-tweet").slideToggle('slow');
    $('.new-tweet textarea').focus();
    // if ($("#nav-bar button") === css("background", "white")) {
    //   $("#nav-bar button").css("background", "#E3F0E3")
    // } else if ($("#nav-bar button") === css("background", "#E3f0E3")) {
    //   $("#nav-bar button").css("background", "white")
    // }
  });
});