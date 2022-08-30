import { CardContent } from '@mui/material';
import * as Styled from './styles/EnterCardStyles';
import Typography from '@mui/material/Typography';
import LoginButton from '../auth/LoginButton';

const EnterCard = (): JSX.Element => {
    return (
        <Styled.EnterCard raised={true}>
            <CardContent>
                <Typography variant='h3'>
                    Oh Hello There!
                </Typography>
                <LoginButton/>
            </CardContent>
        </Styled.EnterCard>);
};

export default EnterCard;
