import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { PropertyPricingDetails } from '../../interfaces/Property';
import * as Styled from './PropertyBookingFooter.styles';

interface PropertyBookingFooterProps {
    pricing: PropertyPricingDetails;
}

export const PropertyBookingFooter: React.FC<PropertyBookingFooterProps> = ({
    pricing,
}) => {
    return (
        <Styled.FooterContainer
            container
            spacing={2}
            sx={{ display: {lg: 'none' } }}
        >
            <Grid xs={6} item>
                <Typography variant="h6">{`$${pricing.price_per_night.toString()} per night`}</Typography>
            </Grid>
            <Grid xs={6} item>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        width: '100%',
                        maxWidth: '10rem',
                    }}
                >
                    <Typography sx={{padding: '.3rem'}}>Reserve</Typography>
                </Button>
            </Grid>
        </Styled.FooterContainer>
    );
};
