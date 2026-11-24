'use strict';
const { contextBridge } = require('electron');
const pkg = require('../package.json');
contextBridge.exposeInMainWorld('mcApp', { platform: process.platform, version: pkg.version, electron: true });
