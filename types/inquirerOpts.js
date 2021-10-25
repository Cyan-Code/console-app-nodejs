require('colors');

const preguntas = [
  {
    type: 'list',
    name: 'option',
    message: '¿Que desea hacer?',
    choices: [
      {
        value: '1',
        name: `${'1'.green}. Crear tarea`
      },
      {
        value: '2',
        name: `${'2'.green}. Lista de tareas`
      },
      {
        value: '3',
        name: `${'3'.green}. Lista de tareas Completadas`
      },
      {
        value: '4',
        name: `${'4'.green}. Lista de tareas Pendientes`
      },
      {
        value: '5',
        name: `${'5'.green}. Completar tarea(s)`
      },
      {
        value: '6',
        name: `${'6'.green}. Borrar tarea`
      },
      {
        value: '0',
        name: `${'0'.green}. Salir`
      }
    ]
  }
]


const pausaOpt = [
  {
    type: 'input',
    name: 'pressKey',
    message: `Presione ${'Enter'.green} para continuar`
  }
]

const questions = [
  {
    type: 'input',
    name: 'desc',
    message: '',
    validate(value) {
      if (value.length === 0){
        return 'por favor ingrese un valor'
      }
      return true
    }
  }
]

const optDeleteTarea = [
  {
    type: 'list',
    name: 'id',
    message: 'Borrar',
    choices: []
  }
]


module.exports = {
  pausaOpt,
  preguntas,
  questions,
  optDeleteTarea
}
