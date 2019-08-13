var pathFn = require('path');
var fs = require('hexo-fs');
var swig = require('swig');
var util = require('hexo-util');
var config = require('../config').build;
var moment = require('moment');
var spawn = util.spawn;
var deployDir = config.assetsRoot;
var log = console;

var message = swig.compile('Site updated: {{ now(\'YYYY-MM-DD HH:mm:ss\') }}')({
  now: function (format) {
    return moment().format(format);
  }
});


function git() {
  var len = arguments.length;
  var args = new Array(len);

  for (var i = 0; i < len; i++) {
    args[i] = arguments[i];
  }

  return spawn('git', args, {
    cwd: deployDir
  });;
}

function setup() {
  return spawn('node', ['build/build.js']).then(function () {
    return git('init');
  }).then(function () {
    return git('add', '-A');
  }).then(function () {
    return git('commit', '-m', message);
  });
}

function push(repo) {
  return git('add', '-A').then(function (msg) {
    console.log(msg);
    return git('commit', '-m', message).catch(function () {
      // Do nothing. It's OK if nothing to commit.
    });
  }).then(function () {
    return git('push', '-u', repo.url, 'master:' + repo.branch, '--force');
  });
}

fs.exists(deployDir).then(function (exist) {
  if (exist) return;
  log.info('Building and Setting up Git deployment...');
  return setup();
}).then(function () {
  log.info('Getting github url...');
  return config.github;
}).then(function (repo) {
  log.info('Starting push code...');
  return push(repo);
}).then(()=>{
  log.info('Finish');
  spawn('rm',['-rf',deployDir]);
});

