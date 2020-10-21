#!/usr/bin/env node
const { execSync } = require('child_process');
const uniqid = require('uniqid');
const clipboardy = require('clipboardy')

const uid = uniqid();
clipboardy.writeSync(uid);