const Tarea = require('./tarea');
require('colors');

class Tareas {
  _listado = {};

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = ''){
    if(this._listado[id]){
      delete this._listado[id];
    }
  }

  get listadoArr() {

    const listado = [];
    Object.keys(this._listado).forEach(key => {
      const tarea = this._listado[key];
      listado.push(tarea)
    })

    return listado
  }


  cargarTareasFromArray(tareas = []){
    tareas.forEach(tarea => {
      this._listado[tarea.id] = tarea;
    })
  }

  crearTarea(desc = '') {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    console.log();
    this.listadoArr.forEach(({desc, completadoEn}, idx) => {
      const i = `${idx+1}.`.green;
      const estado = (completadoEn)
                     ? `${completadoEn}`.green
                     : `${completadoEn}`.red
      console.log(`${i} ${desc} :: ${estado}`);
    })
  }

  listarCompletadasPendientes(completadas = true) {
    console.log();
    let index = 0;
    this.listadoArr.forEach(({completadoEn, desc}) => {
      if (completadas) {
        if (completadoEn) {
          index ++;
          console.log(`${(index.toString()+'.').green} ${desc} :: ${(completadoEn).green}`)
        }
      } else {
        if (completadoEn === null) {
          index ++;
          console.log(`${(index.toString()+'.').green} ${desc} :: ${'Pendiente'.red}`)
        }
      }
    })
  }

  toggleCompletadas(ids = []) {
    ids.forEach(id => {
      const tarea = this._listado[id];
      if (!tarea.completadoEn) {
        tarea.completadoEn = new Date().toISOString()
      }
    });
    this.listadoArr.forEach( tarea => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEn = null;
      }
    });

  }

}


module.exports = Tareas;