import { CardContent } from '@mui/material';
import * as Styled from './EnterCard.styles';
import LoginButton from '../auth/LoginButton';

const EnterCard = (): JSX.Element => {
    return (
        <Styled.EnterCard raised={true}>
            <CardContent>
                <Styled.EnterTitleTypography variant="h3">
                    Oh Hello There!
                </Styled.EnterTitleTypography>
                <LoginButton />
            </CardContent>
        </Styled.EnterCard>
    );
};

export default EnterCard;
