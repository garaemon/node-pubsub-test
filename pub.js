#!/usr/bin/env node
var publisher = require('redis').createClient(6379, 'localhost');

publisher.publish('hello', 'hello world');
