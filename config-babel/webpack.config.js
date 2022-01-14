const path = require("path");
const basePath = __dirname;
const distPath = 'dist';
module.exports = {
    //modo de funcionamiento
    mode: 'development',
    //entry point
    entry:{
        app:"./src/index.js",
    },

    module:{
        rules:[
            {
                test:/\.js/,
                exclude:/node_modules/,
                use:["babel-loader"],
            },
        ]
    },


    output:{
        path: path.join(basePath, distPath),
        //nombre del archivo que queremos
        filename: "bundle2.js",
    },
}