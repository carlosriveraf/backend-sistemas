import app from './app';

app.listen(app.get('port'), () => {
    console.log('Server initialized on port', app.get('port'));
});