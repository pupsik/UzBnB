import styled from 'styled-components';
import { Card, Typography } from '@mui/material';

export const EnterCard = styled(Card)`
    position: absolute;
    width: 35%;
    height: 35%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &.css-fky5tw-MuiPaper-root-MuiCard-root {
        border-radius: 50px 20px;
    }
`;

export const EnterTitleTypography = styled(Typography)`
    color: #664986;
`;
