import React from 'react';
import { useParams } from 'react-router-dom';

import { Avatar, Divider, Grid, Typography } from '@mui/material';

import { MainContainerNarrow } from '../components/containers/MainContainer.styles';
import { PropertyBookingCard } from '../components/property/PropertyBookingCard';
import { PropertyDetailsHeader } from '../components/property/PropertyDetailsHeader';
import { PropertyDetailsHighlights } from '../components/property/PropertyDetailsHighlights';
import { PropertyImageQuilt } from '../components/property/PropertyImageQuilt';
import MainToolBar from '../components/toolbar/ToolBar';
import { PropertyDetails } from '../interfaces/Property';
import { useStore } from '../store';

const PropertyPage = () => {
    const { id } = useParams();
    const { propertyStore } = useStore();
    const [propertyDetails, setPropertyDetails] =
        React.useState<PropertyDetails | null>(null);

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
                        //  alignItems={'stretch'}
                        //alignContent={'center'}
                    >
                        <Grid
                            container
                            item
                            xs={12}
                            md={8}
                            //  sx={{ border: '1px solid black', height: '100%' }}
                        >
                            <Grid item xs={12}>
                                <PropertyDetailsHighlights
                                    {...propertyDetails}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}

                                //  sx={{ border: '1px solid black' }}
                            >
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
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={4}
                            //   sx={{ border: '1px solid black' }}
                        >
                            <PropertyBookingCard {...propertyDetails} />
                        </Grid>
                    </Grid>
                    <section id="reviews">
                        <h3 className="reviews">Reviews go here</h3>
                        <div>Review 1</div>
                        <div>Review 2</div>
                        <div>Review 3</div>
                        <div>Review 4</div>
                        <div>Review 5</div>
                    </section>
                </>
            )}
        </MainContainerNarrow>
    );
};

export default PropertyPage;
