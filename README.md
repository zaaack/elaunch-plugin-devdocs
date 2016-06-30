# elaunch-plugin-devdocs
This is a plugin for ELaunch to search document in <https://devdocs.io> extremly fastly.

## Usage

At first, you need have [ELaunch](https://github.com/zaaack/ELaunch) installed.
Then, run commands below:
```sh
cd ~/.ELaunch
npm i elaunch-plugin-devdocs --save
```
or

```sh
cd ~/.ELaunch
mkdir node_modules
cd node_modules
git clone --depth 1 https://github.com/zaaack/elaunch-plugin-devdocs.git
```
Then, edit your ELaunch config file (path: `~/.ELaunch/config.js`),
add this plugin in plugins field, something like this:
```js
module.exports = {
  //... other config fields
  plugins: {
    //... config for other plugins
    devdocs: {
      path: `./node_modules/electron-plugin-devdocs`,
      command: {
        doc: {}
      }
    }
  }
}
```
see more about [ELaunch config](https://github.com/zaaack/ELaunch#config).

# Screen Capture
![](https://raw.githubusercontent.com/zaaack/elaunch-plugin-devdocs/master/captures/devdocs.png)
