var generators = require('yeoman-generator');

const ComponentType = 0;
const ControllerType = 1;

function kebaberise(str) {
  return str
    .split()
    .reduce(function (acc, next) {
      if(isNaN(next * 1) && next === next.toUpperCase()) {
        return acc + '-' + next.toLowerCase();
      }
      return acc + next;
    })
    .join('');
}

module.exports = generators.Base.extend({
  prompting: function () {
    var done = this.async();
    this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Component name',
        default : this.appname
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
    ], function (answers) {
      this.componentName = answers.name;
      this.componentType = answers.type;
      done();
    }.bind(this));
  },
  writing: function () {
    var tpl = this.componentType == ControllerType)
      ? 'controller.jsx'
      : 'component.jsx';
    var filename = kebaberise(this.componentName);
    this.fs.copyTpl(
      this.templatePath(tpl),
      this.destinationPath(filename + '.jsx'),
      { name: this.componentName }
    );
  }
});
