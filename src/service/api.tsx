import superagent from 'superagent';

type JSONValue = string | { [x: string]: JSONValue } | Array<JSONValue>;

const SERVER = process.env.REACT_APP_SERVER_URL;

const api = {
    post: (path: string, payload: JSONValue, accessToken: string | null) =>
        superagent
            .post(`${SERVER}/${path}`)
            .send(payload)
            .set('Authorization', `Bearer ${accessToken}`)
            .set('X-API-Key', 'foobar')
            .set('accept', 'json')
            .end((err, res) => {
                console.log(err);
                console.log(res);
            }),
    get: (path: string, accessToken: string | null) =>
        superagent
            .get(`${SERVER}/${path}`)
            .set('Authorization', `Bearer ${accessToken}`)
            .set('accept', 'json')
            .then((res) => res.body),
};

export default api;
