import * as Styled from './HomeContainer.styles';

interface HomeContainerProps {
    img: string;
    children: React.ReactNode;
}

const HomeContainer = (props: HomeContainerProps): JSX.Element => {
    return (
        <Styled.HomeContainer img={props.img}>
            {props.children}
        </Styled.HomeContainer>
    );
};

export default HomeContainer;
