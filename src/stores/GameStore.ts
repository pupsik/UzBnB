import { observable, action, makeObservable } from 'mobx';
import { Stories } from './StoryStore';
import api from '../service/api';

type Game = {
    game_id: number;
    game_name: string;
    stories: Stories;
};

type Games = Array<Game>;

export class GameStore {
    games: Games = [];

    constructor() {
        makeObservable(this, {
            games: observable,
            getGames: action,
        });
    }

    getGames = () => {
        return [];
        // api.get('api/games').then((response) => {
        //     return (this.games = response);
        // });
    };
}

export default new GameStore();
