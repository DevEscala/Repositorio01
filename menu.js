const {app, Menu} = require('electron')

const setMainMenu = (mainWindow) => {
    const template = [
        
        {
            label : 'miduMarkDown',
            submenu : [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        },
        {
            label: 'View',
            submenu: [
              { role: 'reload' },
              { role: 'forceReload' },
              { role: 'toggleDevTools' },
              { type: 'separator' },
              { role: 'resetZoom' },
              { role: 'zoomIn' },
              { role: 'zoomOut' },
              { type: 'separator' },
              { role: 'togglefullscreen' }
            ]
          },
        {
            label : 'Themes',
            submenu : [
                {
                    label: 'Light',
                    click: () =>{

                        //console.log('Select Light theme')
                        mainWindow.webContents.send('update-themes','light')
                    }
                },
                {
                  label : 'Dark',
                  click: () => {
                    //console.log('Select Dark theme')

                    //este evento se debe escuchar4
                    mainWindow.webContents.send('update-theme','dark')
                  }  
                }

            ]
        }
    ]
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}
module.exports = {setMainMenu

}