const OAuth = require('oauth');

function searchTwatt(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'I6lx4q7HShGkOhoURtAr1dNzV', // Consumer Key(API Key)
      'yLBUE4UIjNl3ilb5itetef0WPMUXi2FXmcfmeRa8mf6b0azNu7', // Consumer Secret(API Secret)
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
        'https://api.twitter.com/1.1/search/tweets.json?q=jakarta',
        '320621031-bATW523ABlGD6niBsFGrdw184er08Dv96HVFRaHF', // Access Token
        'DPYxIeDcOHetFlF5iZK5mrhTYpkw7qjQa8rxT1lsksIv3', // Access Token Secret
        function (e, data){
          console.log('sdah masuk sini');
          if (e) console.error(e);
          res.send(JSON.parse(data))
        });
}

function timeLine(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'I6lx4q7HShGkOhoURtAr1dNzV', // Consumer Key(API Key)
      'yLBUE4UIjNl3ilb5itetef0WPMUXi2FXmcfmeRa8mf6b0azNu7', // Consumer Secret(API Secret)
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.get(
        'https://api.twitter.com/1.1/statuses/user_timeline.json',
        '320621031-bATW523ABlGD6niBsFGrdw184er08Dv96HVFRaHF', // Access Token
        'DPYxIeDcOHetFlF5iZK5mrhTYpkw7qjQa8rxT1lsksIv3', // Access Token Secret
        function (e, data){
          if (e) console.error(e);
          res.send(JSON.parse(data))
        });
}

function cuitCuit(req, res, next) {
  var oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      'I6lx4q7HShGkOhoURtAr1dNzV', // Consumer Key(API Key)
      'yLBUE4UIjNl3ilb5itetef0WPMUXi2FXmcfmeRa8mf6b0azNu7', // Consumer Secret(API Secret)
      '1.0A',
      null,
      'HMAC-SHA1'
    );
    oauth.post(
        `https://api.twitter.com/1.1/statuses/update.json?status=${req.body.newCuit}`,
        '320621031-bATW523ABlGD6niBsFGrdw184er08Dv96HVFRaHF', // Access Token
        'DPYxIeDcOHetFlF5iZK5mrhTYpkw7qjQa8rxT1lsksIv3', // Access Token Secret
        `${req.body.tweet}`,
        `text`,
        function(e, data, result) {
          if (e) console.log(e);
          res.send(require('util').inspect(data));
        })
}

module.exports = {
  searchTwatt,
  timeLine,
  cuitCuit
}
