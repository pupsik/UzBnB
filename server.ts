const express = require('express');
const os = require('os');
const cors = require('cors');

const app = express();

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);

const GAMES = [
    {
        game_id: 1,
        game_name: 'X-Mas Stories',
        game_created: '2022-12-01',
        data: [
            {
                email: 'rita.linets@gmail.com',
                full_name: 'Rita Linets',
                story_id: 1,
                story_prompt:
                    'Rita and Christian decided to make espresso martini',
                story_response: 'Some really hilarious story here!',
            },
            {
                email: 'cdimare@gmail.com',
                full_name: 'Christian DiMare',
                story_id: 2,
                story_prompt: 'One day we built a catalog',
                story_response: 'There was nothing funny about that!',
            },
        ],
    },
    {
        game_id: 2,
        game_name: 'Practice Games',
        game_created: '2022-12-01',
        data: [
            {
                email: 'nealgharrington@gmail.com',
                full_name: 'Neal Harrington',
                story_id: 1,
                story_prompt:
                    'Bob Dylan and Norm McDonaland were sitting on the bench',
                story_response: 'A really funny story right here!',
            },
        ],
    },
];

app.use(express.static('dist'));
app.get('/api/getUsername', (_req, res) =>
    res.send({ username: os.userInfo().username })
);

app.get('/api/', (_req, res) => res.send({ data: 'Hello World!' }));

app.get('/api/games/:game_id', (req, res) =>
    res.send(GAMES.find((x) => x.game_id == req.params.game_id))
);

app.get('/api/games', (_req, res) => {
    console.log('Request made to /api/games');
    res.send(GAMES);
});

app.listen(process.env.PORT || 6060, () =>
    console.log(`Listening on port ${process.env.PORT || 6060}!`)
);
