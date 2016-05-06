// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: strong-pubsub-redis
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var Client = require('strong-pubsub');
var Adapter = require('../'); // strong-pubsub-redis
var helpers = require('strong-pubsub-test');
var defineClientBehaviorTests = helpers.defineClientBehaviorTests;
var usingRedis = helpers.usingRedis;

describe('redis client behavior', function () {
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

  defineClientBehaviorTests(Client, Adapter);
});
