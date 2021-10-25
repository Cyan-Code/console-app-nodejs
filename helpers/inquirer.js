const inquirer = require('inquirer');
require('colors');
const {
  pausaOpt,
  preguntas,
  questions
} = require('../types/inquirerOpts')

const inquirerMenu = async () => {
  console.clear();
  console.log('========================'.green)
  console.log(' Selecciona una opacion '.green)
  console.log('========================\n'.green)

  const { option } = await inquirer.prompt(preguntas);
  return option;
}

const pausa = async () => {
  console.log('\n')
  await inquirer.prompt(pausaOpt);
}

const leerInput = async (mensaje) => {
  questions[0].message = mensaje;
  const {desc} = await inquirer.prompt(questions);
  return desc;
}

module.exports = {
  inquirerMenu,
  pausa,
  leerInput
}
