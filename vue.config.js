const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

let plugins
let output

if(process.env.NODE_ENV === 'production'){
  const base_url = process.env.BASE_URL
  output = {
      publicPath: base_url,
      filename: "[hash].[name].js"
  }
  plugins = [
      new UglifyJsPlugin({
          parallel: true,
          uglifyOptions: {
              ecma: 8,
              compress: {
                passes: 2,
                ecma: 8
              },
              parse: {
                html5_comments: false
              },
              toplevel: true,
              output: {
                beautify: false,
                ecma: 8
              }
          }
    })
  ]
}
else{
  plugins = []
  output = {}
}

module.exports = {
   configureWebpack: {
      output,
      plugins,
      resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          'vue$': 'vue/dist/vue.esm.js'
        }
      }
    }
}
