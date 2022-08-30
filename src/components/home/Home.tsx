import EnterCard from './EnterCard';
import { HomeContainer } from './styles/HomeContainerStyles';
import img from './styles/images/cool-background.png';

const Home = () => {
    return(
        <HomeContainer img={img}>
            <EnterCard/>
        </HomeContainer>
    );
};


export default Home;
