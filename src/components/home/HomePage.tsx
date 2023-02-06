import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useAuth0 } from '@auth0/auth0-react';
import { MainContainer } from './MainContainer.styles';
import ButtonAppBar from '../toolbar/ToolBar';
import img from '../home/images/summer_doodle.jpg';
import api from '../../service/api';
import StoryCardList from '../stories/StoryCardList';

const HomePage = () => {

    

    return (
        <MainContainer img={img}>
            <ButtonAppBar />
            <StoryCardList />
        </MainContainer>
    );
};

export default HomePage;
