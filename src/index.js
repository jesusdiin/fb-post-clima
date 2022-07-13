import app from "./config/app";
import './database/db';

app.listen(app.get('port'), function() {
    console.log('Server listen on port: ', app.get('port'))
});
