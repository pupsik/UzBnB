import React, { FC } from 'react';
import Toolbar from '@mui/material/Toolbar';
import * as Styled from './ToolBar.styles';
import AuthenticationButton from '../auth/AuthenticationButton';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import img from './logo.png';

type ToolBarProps = {
    withSearchBar?: boolean;
};

const MainToolBar: FC<ToolBarProps> = ({ withSearchBar = true }) => {
    const navigate = useNavigate();
    const goToHome = () => navigate('/');

    return (
        <Styled.ToolBarContainer>
            <Toolbar className="toolbar">
                <img 
                    src={img}
                    alt="Rooms Logo"
                    className="toolbar__logo"
                    onClick={goToHome}
                />
                {withSearchBar && <SearchBar setSearchQuery={undefined} />}
                <div className="toolbar__avatar">
                    <AuthenticationButton />
                </div>
            </Toolbar>
        </Styled.ToolBarContainer>
    );
};

export default MainToolBar;
