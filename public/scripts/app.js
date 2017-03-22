/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

// var $tweet = createTweetElement(tweetData);

function createTweetElement(tweet) {



  let name = tweet.user.name;
  let avatarSmall = tweet.user.avatars.small;
  let avatarRegular = tweet.user.avatars.regular;
  let avatarLarge = tweet.user.avatars.large;
  let userHandle = tweet.user.handle;
  let contentText = tweet.content.text;
  let createdAt = tweet.created_at;

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
                <img src = '${avatarSmall}'>
              <text>
                ${name}
                </text>
              <dt>
                ${userHandle}
              </dt>
            </header>
            <div>
              ${contentText}
            </div>
            <footer>
              <text>
                ${createdAt}
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
  for (eachTweet of tweets) {
    $('.articleContainer').append(createTweetElement(eachTweet));
  }
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

$(document).ready(function() {
  renderTweets(data);
});