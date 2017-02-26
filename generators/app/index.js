var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'name',
      message : 'Project name',
      default : this.appname
    }]).then(function (answers) {
      this.projectName = answers.name;
    }.bind(this));
  },
  writing: function () {
    this.fs.copy(
      this.templatePath('_babelrc'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('_eslintrc'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { name: this.projectName }
    );
    this.fs.copyTpl(
      this.templatePath('build.js'),
      this.destinationPath('build.js')
    );
    this.fs.copyTpl(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile')
    );
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      { title: this.projectName }
    );
    this.fs.copyTpl(
      this.templatePath('index.jsx'),
      this.destinationPath('src/index.jsx')
    );
    this.fs.copyTpl(
      this.templatePath('readme.md'),
      this.destinationPath('readme.md'),
      { title: this.projectName }
    );
    this.fs.copy(
      this.templatePath('reducers.js'),
      this.destinationPath('src/reducers.js')
    );
    this.fs.copyTpl(
      this.templatePath('root.jsx'),
      this.destinationPath('src/root/index.jsx')
    );
    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('server.js')
    );
    this.fs.copy(
      this.templatePath('testIndex.jsx'),
      this.destinationPath('test/index.jsx')
    );
    this.fs.copy(
      this.templatePath('testSetup.js'),
      this.destinationPath('testSetup.js')
    );
    this.fs.copy(
      this.templatePath('webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );
  }
});
