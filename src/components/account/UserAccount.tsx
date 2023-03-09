import { Fragment } from 'react';
import { MainContainer } from '../containers/MainContainer.styles';
import MainToolBar from '../toolbar/ToolBar';

const UserAccount = () => {
    return (
        <MainContainer>
            <MainToolBar withSearchBar={false} />
        </MainContainer>
    );
};

export default UserAccount;
