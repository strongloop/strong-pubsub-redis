// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-redis
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var helpers = require('strong-pubsub-test');
var getPort = helpers.getFreePort;
var defineClientTests = helpers.defineClientTests;
var usingRedis = helpers.usingRedis;
var Client = require('strong-pubsub');
var Adapter = require('../'); // strong-pubsub-redis

describe('Redis', function () {
  beforeEach(function(done) {
    var test = this;
    usingRedis(function(err, port, redis) {
      test.port = port;
      test.redis = redis;
      done(err);
    });
  });

  afterEach(function (done) {
    if(this.redis) {
      this.redis.kill('SIGINT');
      done();
    } else {
      done();
    }
  });

  defineClientTests(Client, Adapter);
});
