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
      this.templatePath('actions.js'),
      this.destinationPath('src/actions.js')
    );
    this.fs.copyTpl(
      this.templatePath('root.jsx'),
      this.destinationPath('src/root/index.jsx')
    );
    this.fs.copyTpl(
      this.templatePath('Dockerfile'),
      this.destinationPath('Dockerfile')
    );
    this.fs.copyTpl(
      this.templatePath('entry.js'),
      this.destinationPath('src/entry.js')
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
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { name: this.projectName }
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
    this.fs.copy(
      this.templatePath('server.js'),
      this.destinationPath('server.js')
    );
  }
});
