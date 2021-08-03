module.exports = {
    devServer : {
        proxy : {
            '/api' : {
                target : "https://jsonplaceholder.typicode.com",
                changeOrigin : true,
                pathRewrite : {
                    '^/api' : ''
                }
            },
            '/aw' : {
                target : 'http://localhost:8000/',
                changeOrigin : true,
                pathRewrite : {
                    '^/aw' : ''
                }
            }
        }
    },

    transpileDependencies: [
      'vuetify'
    ]
}
