import React from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import dayjs from 'dayjs';

import MainToolBar from '../components/toolbar/ToolBar';
import { MainContainerNarrow } from '../components/containers/MainContainer.styles';
import { BookingCost } from '../components/property/PropertyCostBlock';
import { PropertyDetails } from '../interfaces/Property';
import { useStore } from '../store';

const BookingPage = () => {
    const { id: idString } = useParams<{ id: string }>();
    const id = idString ? parseInt(idString) : null;
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { propertyStore } = useStore();
    const [propertyDetails, setPropertyDetails] = React.useState<PropertyDetails | null>(null);

    const startDate = dayjs(searchParams.get('startDate'));
    const endDate = dayjs(searchParams.get('endDate'));
    const guests = parseInt(searchParams.get('guests') || '0');
    const totalNights =
        startDate.isValid() && endDate.isValid()
            ? endDate.diff(startDate, 'day')
            : null;

    React.useEffect(() => {
        if (id) {
            const details = propertyStore.getPropertyDetails(id);
            setPropertyDetails(details);
        }
    }, [id, propertyStore]);

    const handleConfirm = () => {
        navigate('/');
    };

    return (
        <MainContainerNarrow sx={{ maxWidth: '1400px' }}>
            <MainToolBar />
            {propertyDetails && (
                <Grid container spacing={2} sx={{ padding: '1rem' }}>
                    <Grid item xs={12}>
                        <Typography variant="h5">
                            {propertyDetails.title}
                        </Typography>
                        <Typography variant="subtitle1">
                            {startDate.format('MMM D, YYYY')} -{' '}
                            {endDate.format('MMM D, YYYY')} · {guests}{' '}
                            guests
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <BookingCost
                            pricing={propertyDetails.pricing}
                            total_nights={totalNights}
                            total_guests={guests}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleConfirm}
                            sx={{ width: '100%' }}
                        >
                            Confirm booking
                        </Button>
                    </Grid>
                </Grid>
            )}
        </MainContainerNarrow>
    );
};

export default BookingPage;
