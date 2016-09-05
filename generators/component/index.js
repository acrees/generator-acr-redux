var generators = require('yeoman-generator');
var path = require('path');

const ComponentType = 0;
const ControllerType = 1;

function toTitleCase(str) {
  return str
    .split('-')
    .reduce(function (acc, next) {
      return acc + next[0].toUpperCase() + next.slice(1);
    }, '');
}

module.exports = generators.Base.extend({
  prompting: function () {
    return this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Component name',
        default : 'my-component'
      },
      {
        type: 'list',
        name: 'type',
        message: 'Component type',
        default: 0,
        choices: [
          { name: 'Stateless component', value: ComponentType },
          { name: 'Stateful controller', value: ControllerType }
        ]
      }
    ]).then(function (answers) {
      this.componentName = answers.name;
      this.componentType = answers.type;
    }.bind(this));
  },
  writing: function () {
    var tpl = this.componentType == ControllerType
      ? 'controller.jsx'
      : 'component.jsx';
    var typeName = toTitleCase(this.componentName);
    this.fs.copyTpl(
      this.templatePath(tpl),
      this.destinationPath(path.join('src', this.componentName, 'index.jsx')),
      { name: typeName }
    );
  }
});
