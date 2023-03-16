import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from '@mui/material';
import { TextField, MenuItem, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';

import { PropertyDetails } from '../../interfaces/Property';
import { DotSpan } from '../common/DotSpan';
import { ReviewsLink } from '../common/ReviewsLink';
import * as Styled from './PropertyBookingCard.styles';
import { PropertyBookingFooter } from './PropertyBookingFooter';
import { BookingCost } from './PropertyCostBlock';

export const PropertyBookingCard = ({
    id,
    rating,
    review_count,
    pricing,
    config,
}: PropertyDetails) => {
    const [startDate, setStartDate] = useState<moment.Moment>(moment(null));
    const [endDate, setEndDate] = useState<moment.Moment>(moment(null));
    const [totalNights, setTotalNights] = useState<number | null>(null);
    const [selectedGuestCount, setSelectedGuestCount] = useState<string>('0');
    const [renderCostTotal, setRenderCostTotal] = useState<boolean>(false);

    const {
        register,
        formState: { errors },
    } = useForm();

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleSelectChange = (event) => {
        setSelectedGuestCount(event.target.value);
    };

    const navigate = useNavigate();

    React.useEffect(() => {
        if (startDate && endDate) {
            const nights = endDate.diff(startDate, 'days');

            if (nights < 0) {
                setStartDate(moment(null));
            } else {
                setTotalNights(nights);
            }
        }
    }, [startDate, endDate]);

    React.useEffect(() => {
        if (totalNights && parseInt(selectedGuestCount) > 0) {
            setRenderCostTotal(true);
        } else {
            setRenderCostTotal(false);
        }
    }, [totalNights, selectedGuestCount]);

    const onSubmit = (event) => {
        event.preventDefault();
        const formData = new URLSearchParams({
            startDate: startDate.format('YY/MM/DD'),
            endDate: endDate.format('YY/MM/DD'),
            guests: selectedGuestCount,
        });
        console.log(formData);
        navigate(`/book/${id}?${formData.toString()}`);
    };

    // const theme = useTheme();
    // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Styled.PropertyCalendarCard>
            <Styled.PropertyHeaderDivContainer>
                <Styled.PropertyHeaderDivItem>
                    <Typography variant="h6">{`$${pricing.price_per_night.toString()} per night`}</Typography>
                </Styled.PropertyHeaderDivItem>

                <Styled.PropertyHeaderDivItem>
                    <Typography variant="subtitle1">
                        <span>
                            <StarRoundedIcon style={{ verticalAlign: 'top' }} />
                            {` ${rating.toString()}`}
                        </span>
                        <DotSpan> &ensp;&#9642; &ensp;</DotSpan>
                        <span style={{ fontWeight: 600 }}>
                            <ReviewsLink href="#reviews">
                                {review_count} reviews
                            </ReviewsLink>
                        </span>
                    </Typography>
                </Styled.PropertyHeaderDivItem>
            </Styled.PropertyHeaderDivContainer>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <DatePicker
                                label="Start Date"
                                value={startDate}
                                onChange={handleStartDateChange}
                                disablePast={true}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={handleEndDateChange}
                                disablePast={true}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                select
                                label="Guests"
                                value={selectedGuestCount}
                                onChange={handleSelectChange}
                                sx={{ width: '100%' }}
                            >
                                {[
                                    ...Array(config.max_guests)
                                        .fill(0)
                                        .map((_, x) => ({
                                            value: `${x + 1}`,
                                            label: `${x + 1} guests`,
                                        })),
                                ].map((option) => (
                                    <MenuItem
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '2rem',
                            }}
                        >
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
                    </Grid>
                </form>
            </LocalizationProvider>
            {renderCostTotal && (
                <BookingCost
                    pricing={pricing}
                    total_nights={totalNights}
                    total_guests={parseInt(selectedGuestCount)}
                />
            )}
        </Styled.PropertyCalendarCard>
    );
};
