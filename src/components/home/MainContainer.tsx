import * as Styled from './MainContainer.styles';

interface MainContainerProps {
    img: string;
    children: React.ReactNode;
}

const MainContainer = (props: MainContainerProps): JSX.Element => {
    return (
        <Styled.MainContainer img={props.img}>
            {props.children}
        </Styled.MainContainer>
    );
};

export default MainContainer;
