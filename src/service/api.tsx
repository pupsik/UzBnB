import superagent from 'superagent';

type JSONValue = string | { [x: string]: JSONValue } | Array<JSONValue>;

const SERVER = process.env.REACT_APP_SERVER_URL;

const api = {
    post: (path: string, payload: JSONValue) =>
        superagent
            .post(`${SERVER}/${path}`)
            .send(payload) // sends a JSON post body
            .set(
                'Authorization',
                `Bearer ${localStorage.getItem('access_token')}`
            )
            .set('X-API-Key', 'foobar')
            .set('accept', 'json')
            .end((err, res) => {
                console.log(err);
                console.log(res);
            }),
    get: (path: string) =>
        superagent
            .get(`${SERVER}/${path}`)
            .set(
                'Authorization',
                `Bearer ${localStorage.getItem('access_token')}`
            )
            .set('accept', 'json')
            .then((res) => res.body),
};

export default api;
