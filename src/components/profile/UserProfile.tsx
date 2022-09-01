import { useAuth0 } from '@auth0/auth0-react';
import { MainContainer } from '../home/MainContainer.styles';
import ButtonAppBar from '../toolbar/ToolBar';
import img from '../home/images/summer_doodle.jpg';

const UserProfile = () => {
    const { user } = useAuth0();

    const name: string = user?.name || '';
    const email: string = user?.email || '';
    const picture: string = user?.picture || '';

    return (
        <MainContainer img={img}>
            <ButtonAppBar />
            <div className="col-md-2 mb-3">
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
            </div>
        </MainContainer>
    );
};

export default UserProfile;
