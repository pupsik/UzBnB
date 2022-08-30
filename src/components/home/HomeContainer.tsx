import * as Styled from './styles/HomeContainerStyles';

interface HomeContainerProps {
    img: string;
}

const HomeContainer = ({ img }: HomeContainerProps): JSX.Element => {
    return <Styled.HomeContainer img={img} />;
};

export default HomeContainer;
