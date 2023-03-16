import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { PropertyDetails } from '../../interfaces/Property';
import * as Styled from './PropertyBookingFooter.styles';

export const PropertyBookingFooter = ({ pricing }: PropertyDetails) => {
    return (
        <Styled.FooterContainer container spacing={2}>
            <Grid xs={6} item>
                <Typography variant="h6">{`$${pricing.price_per_night.toString()} per night`}</Typography>
            </Grid>
            <Grid xs={6} item>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        fontSize: '1rem',
                        padding: '1rem',
                        width: '100%',
                    }}
                >
                    Reserve
                </Button>
            </Grid>
        </Styled.FooterContainer>
    );
};
