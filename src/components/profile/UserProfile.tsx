import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useAuth0 } from '@auth0/auth0-react';
import { MainContainer } from '../home/MainContainer.styles';
import ButtonAppBar from '../toolbar/ToolBar';
import img from '../home/images/summer_doodle.jpg';
import api from '../../service/api';
import StoryCardList from '../stories/StoryCardList';

const UserProfile = () => {
    // const name: string = user?.name || '';
    // const email: string = user?.email || '';
    // const picture: string = user?.picture || '';

    // const [posts, setPosts] = useState(null);
    // const { user, getAccessTokenSilently } = useAuth0();

    // useEffect(() => {
    //     (async () => {
    //         try {
    //             const token = await getAccessTokenSilently({
    //                 audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/`,
    //                 scope: 'read:stories', // Scope that exists for the API being called.
    //             });
    //             const response = await fetch(`http://${process.env.REACT_APP_SERVER_URL}/api/games`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });
    //             setPosts(await response.json());
    //         } catch (e) {
    //             console.error(e);
    //         }
    //     })();
    // }, [getAccessTokenSilently]);

    useEffect(() => {
        const response = api.get('api/games').then((r) => console.log(r));
    }, []);

    return (
        <MainContainer img={img}>
            <ButtonAppBar />
            {/* <div className="col-md-2 mb-3">
                <img
                    src={picture}
                    alt="Profile"
                    className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                />
            </div>
            <div className="col-md text-center text-md-left">
                <h2>{name}</h2>
                <p className="lead text-muted">{email}</p>
            </div>

            <div className="row">
                <pre className="col-12 text-light bg-dark p-4">
                    {JSON.stringify(user, null, 2)}
                </pre>
            </div> */}
            <StoryCardList />
        </MainContainer>
    );
};

export default observer(UserProfile);
