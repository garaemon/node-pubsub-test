#!/usr/bin/env node
var subscriber = require('redis').createClient(6379, 'localhost');
subscriber.subscribe('hello')
subscriber.on('message', function(channel, data) {
    console.log(data);
});
