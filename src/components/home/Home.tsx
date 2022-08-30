import EnterCard from './EnterCard';
import HomeContainer from './HomeContainer';
import img from './images/cool-background.png';

const Home = () => {
    return (
        <HomeContainer img={img}>
            <EnterCard />
        </HomeContainer>
    );
};

export default Home;
