'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var IndexGenerator = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the prime Index generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'generateIndex',
      message: 'Would you like to generate an index.html?',
      default: true
    }];

    this.prompt(prompts, function (props) {
      this.generateIndex = props.generateIndex;

      if (this.generateIndex) {
        this.src.copy('_index.html', 'index.html');
      }

      done();
    }.bind(this));
  },

  writing: {
    app: function () {},
    projectfiles: function () {}
  },

  end: function () {}
});

module.exports = IndexGenerator;
