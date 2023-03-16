import React from 'react';
import { useParams } from 'react-router-dom';

import { Avatar, Divider, Grid, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import { MainContainerNarrow } from '../components/containers/MainContainer.styles';
import { PropertyBookingCard } from '../components/property/PropertyBookingCard';
import { PropertyBookingFooter } from '../components/property/PropertyBookingFooter';
import { PropertyDetailsHeader } from '../components/property/PropertyDetailsHeader';
import { PropertyDetailsHighlights } from '../components/property/PropertyDetailsHighlights';
import { PropertyFeatureCard } from '../components/property/PropertyFeatureCard';
import { PropertyImageQuilt } from '../components/property/PropertyImageQuilt';
import { PropertyReviewsGrid } from '../components/property/PropertyReviewsGrid';
import MainToolBar from '../components/toolbar/ToolBar';
import { PropertyDetails, PropertyReviews } from '../interfaces/Property';
import { useStore } from '../store';


// TODO: this needs a lot of fixing -- responsivenes is all messed - needs to be consistent

const PropertyPage = () => {
    const { id } = useParams();
    const { propertyStore } = useStore();
    const [propertyDetails, setPropertyDetails] =
        React.useState<PropertyDetails | null>(null);
    const [propertyReviews, setPropertyReviews] =
        React.useState<PropertyReviews | null>(null);

    React.useEffect(() => {
        const getPropertyDetails = async () => {
            if (id) {
                const images = await propertyStore.getPropertyDetails(
                    parseInt(id)
                );
                setPropertyDetails(images);
            }
        };
        getPropertyDetails();
    }, [id]);

    React.useEffect(() => {
        const getPropertyReviews = async () => {
            if (id) {
                const reviews = await propertyStore.getPropertyReviews(
                    parseInt(id)
                );
                setPropertyReviews(reviews);
            }
        };
        getPropertyReviews();
    }, [id]);

    const theme = useTheme();
    // I wonder how to do this better --because between the grid and this const,
    // I have to coordinate two values for a single effect
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <MainContainerNarrow sx={{ maxWidth: '1400px' }}>
            <MainToolBar />
            {propertyDetails && (
                <>
                    <PropertyDetailsHeader {...propertyDetails} />
                    <div
                        className="property__image-quilt"
                        style={{ marginBottom: '3rem', marginTop: '2rem' }}
                    >
                        <PropertyImageQuilt id={id} />
                    </div>
                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        alignContent={'flex-start'}
                        sx={{padding: '1rem'}}
                    >
                        <Grid
                            container
                            item
                            xs={12}
                            lg={8}
                            alignContent={'flex-start'}
                            sx={{marginBottom: "1rem"}}
                        >
                            <Grid item xs={12}>
                                <PropertyDetailsHighlights
                                    {...propertyDetails}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ padding: '1rem 0' }}>
                                    <Typography variant="h6">
                                        Description
                                    </Typography>
                                    <Typography variant="body1">
                                        {propertyDetails.description}
                                    </Typography>
                                </div>
                                <Divider
                                    orientation="horizontal"
                                    sx={{ borderWidth: '1px' }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    What this place offers
                                </Typography>
                                <PropertyFeatureCard
                                    {...{
                                        set: propertyDetails.features || [],
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <section id="reviews">
                                    {id && propertyReviews?.reviews && (
                                        <>
                                            {' '}
                                            <Divider
                                                orientation="horizontal"
                                                sx={{
                                                    borderWidth: '1px',
                                                }}
                                            />
                                            <Typography variant="h6">
                                                What others say
                                            </Typography>
                                            <PropertyReviewsGrid
                                                id={parseInt(id)}
                                                reviews={
                                                    propertyReviews?.reviews
                                                }
                                            />
                                        </>
                                    )}
                                </section>
                            </Grid>
                        </Grid>
                        {isSmallScreen ? (
                            <PropertyBookingFooter {...propertyDetails} />
                        ) : (
                            <Grid item xs={12} lg={4}>
                                <PropertyBookingCard {...propertyDetails} />
                            </Grid>
                        )}
                    </Grid>
                </>
            )}
        </MainContainerNarrow>
    );
};

export default PropertyPage;
