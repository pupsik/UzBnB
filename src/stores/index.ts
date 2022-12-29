import gameStore, { GameStore } from './GameStore';
import storyStore, { StoryStore } from './StoryStore';

export type RootStore = {
    gameStore: GameStore;
    storyStore: StoryStore;
};

const rootStore: RootStore = {
    gameStore,
    storyStore,
};

export default rootStore;
