import styled from 'styled-components';
import { Box, Typography } from '@mui/material';
import ButtonAppBar from '../toolbar/ToolBar';
import Stack from '@mui/material/Stack';
import MainContainer from './MainContainer';
import img from './images/summer_doodle.jpg';
import Button from '@mui/material/Button';

const StyledGreetBox = styled(Box)`
    margin-top: 10%;
    margin-left: 10%;
    max-width: 50%;
`;

const Home = () => {
    const onTryFreeButtonClick = () => {
        window.dataLayer.push({
            event: 'button-click',
            name: 'try-for-free',
        });
    };

    const onLearnMoreButtonClick = () => {
        window.dataLayer.push({
            event: 'button-click',
            name: 'learn more',
        });
    };

    return (
        <MainContainer img={img}>
            <ButtonAppBar />
            <StyledGreetBox component="div">
                <Typography variant="h1" fontWeight={600}>
                    Hello There!
                </Typography>
                <Typography variant="h4" fontWeight={300} marginBottom="20px">
                    {"Most of the things on this page don't actually work."}
                </Typography>
                <Typography variant="body1" marginBottom="25px">
                    But we still want you to click around and see what you can
                    find. This project does not really have a purpose yet. But
                    one day it will and maybe you will love it. In the meantime,
                    we hope the colors are good and the feel is what you would
                    expect.
                </Typography>
                <Box component="div">
                    <Stack spacing={2} direction="row">
                        <Button
                            variant="contained"
                            onClick={() => onTryFreeButtonClick()}
                        >
                            Try for Free
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={() => onLearnMoreButtonClick()}
                        >
                            Learn More
                        </Button>
                    </Stack>
                </Box>
            </StyledGreetBox>
        </MainContainer>
    );
};

export default Home;
