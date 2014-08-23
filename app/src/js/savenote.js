/**
 * savenote.js
 *
 * @description: save note to Evernote
 * @author: fantasy <fantasyshao@icloud.com>
 * @create: 23/8/14
 * @update: 23/8/14
 */

var Evernote = require('evernote');
var config = require('../../../config');

module.exports = function() {
  var client = new Evernote.Client.new({
    consumerKey: config.evernote_key,
    consumerSecret: config.evernote_secret,
    sandbox: config.dev
  });

  client.getRequestToken('', function(err, oauthToken, oauthTokenSecret) {
    //
  });
};