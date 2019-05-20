module.exports = {
    devServer:{
        open:true,
        proxy:{
            "/api":{
                target:"http://127.0.0.1",
                changeOrigin:true,
                pathRewrite:{
                    "^/api":""
                }
            }
        }
    }
}