const app = require ('../app');

try{
    app.listen(process.env.PORT || 3333);
    console.log('iniciando servidor');

} catch (e) {
    throw e;
}