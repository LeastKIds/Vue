module.exports = {
    entry : '../210720/src/js/index.js',
    output : {
        // path : '/Users/gimjinhong/github/Vue/210720/dist/js',
        path : __dirname+'/../210720/dist/js',  // 무조건 절대 경로. 이유는 모름
        filename : 'bundle.js'
    },
    mode : "development"
}