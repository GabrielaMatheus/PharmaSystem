const PROXY_CONFIG =[
// configuração pro back se conectar com o front sem o cors
    {
        context:['/api'],
        target: 'http://localhost:5510/',
        secure:false,
        logLevel: 'debug',
        pathRewrite:{'^/api':''}
    }

];

module.exports =  PROXY_CONFIG;