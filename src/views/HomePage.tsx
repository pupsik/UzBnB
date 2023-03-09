import { MainContainer } from '../components/containers/MainContainer.styles';
import MainToolBar from '../components/toolbar/ToolBar';
import PropertyCardList from '../components/property/PropertyCardList';

const HomePage = () => {
    return (
        <MainContainer>
            <MainToolBar />
            <PropertyCardList />
        </MainContainer>
    );
};

export default HomePage;
