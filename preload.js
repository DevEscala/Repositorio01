//crear un puento para 2 procesos
const{ contextBridge, ipcRenderer} = require('electron')


//el parametro es un nombre creado
contextBridge.exposeInMainWorld('electronAPI',{
    //cuando se ejecuta update-theme se ejecuta callback
    onUpdateTheme : (callback)  => ipcRenderer.on('update-theme',callback)
})
//comunicacion entre procesos con los modulos ipcMain y ipcRenderer