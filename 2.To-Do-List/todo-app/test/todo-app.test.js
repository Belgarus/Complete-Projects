const test = require('tape');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '..index.html'));
require('jsdom-global')(html);
const app = require('../lib/todo-app.js');
const id = 'test-app';
