const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
  // env
  //argv son los argumentos para saber en que modo estamos
  const { mode } = argv
  const isProduction = mode === 'production'

  return {
    //cambiamos el nombre de la carpeta que manda despues de empaquetar
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    //inyectamos el html en el src
    plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
    //configuracion para hacerle entender nuestras extenciones
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  //automatic hace que ya no tengas que importar react
                  runtime: 'automatic' //classic por defecto
                }
              ]
            ]
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    //configuracion del webpack-dev-server
    devServer: {
      open: true, //abrir en el navegador
      port: 3000,
      // overlay: true //abrir un overlay con los errores
      compress: true,
      client: {
        overlay: true
      }
    },
    devtool: 'source-map'
  }
}
