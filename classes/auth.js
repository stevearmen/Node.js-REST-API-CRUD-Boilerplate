class Auth {

    status_code = 0;

    constructor(){
    }

    authenticate(req){
        return new Promise((resolve, reject) => {
            if (typeof req.get('Authorization') === 'undefined')
            {
                this.status_code = 400;
                reject('Missing authorization header');
                return false;
            }
            let api_key = '';
            if ((api_key = this.parse(req.get('Authorization'))) === '')
            {
                this.status_code = 400;
                reject('Authorization token not provided');
                return false;
                
            }
            const api_keys = require('../classes/api_keys');
            let ak = new api_keys();
            ak.get_one(api_key).then((document) => {
                if (document === null)
                {
                    this.status_code = 401;
                    reject('Invalid API key');
                    return false;
                }
                resolve();
            }).catch((err) => {
                this.status_code = 500;
                reject(err);
            });
        });
    }

    parse(header)
    {
        return header.split(/\s+/).pop() || '';
    }
}
module.exports = Auth;