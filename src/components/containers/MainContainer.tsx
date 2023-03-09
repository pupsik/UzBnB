import * as Styled from './MainContainer.styles';

interface MainContainerProps {
    children: React.ReactNode;
}

const MainContainer = (props: MainContainerProps): JSX.Element => {
    return <Styled.MainContainer>{props.children}</Styled.MainContainer>;
};

export default MainContainer;
