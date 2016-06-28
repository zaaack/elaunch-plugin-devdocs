let {shell, ipcMain} = require('electron')
var querystring = require('querystring');
let pluginConfig, globalConfig

module.exports = {
  setConfig: function (pConfig, gConfig) {
    if(globalConfig) return
    pluginConfig = pConfig
    globalConfig = gConfig
  },
  exec: function (args, event, cmdInfo) {
    args = args.join(' ')
    event.sender.send('exec-reply', [{
      value: args,
      custom_view: `<webview id="wv-devdocs" src="https://devdocs.io/#q=${args}" style="display:inline-flex;width: 100%;height:${globalConfig.max_height-globalConfig.height-5}px;"
       useragent="Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.76 Mobile Safari/537.36"></webview>`
    }])
  },
  execItem: function (item, event) {
    globalConfig.context.mainWindow.webContents.executeJavaScript(`
        ;(function(){
          let wvDevdocs=document.getElementById('wv-devdocs')
          return wvDevdocs && wvDevdocs.getURL()
        })()
      `, true, (result)=>{
        console.log('rel', result);
        result = result || `https://devdocs.io/#q=${querystring.escape(item.value)}`
        shell.openExternal(result)
        event.sender.send('exec-item-reply')
      })
  }
}
