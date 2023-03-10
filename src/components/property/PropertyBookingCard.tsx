import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Divider, Typography } from '@mui/material';
import { TextField, MenuItem, Button, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import moment from 'moment';

import {
    PropertyDetails,
    PropertyPricingDetails,
} from '../../interfaces/Property';
import { DotSpan } from '../common/DotSpan';
import { ReviewsLink } from '../common/ReviewsLink';
import * as Styled from './PropertyBookingCard.styles';

interface BookingCostProps {
    pricing: PropertyPricingDetails;
    total_nights: number | null;
    total_guests: number;
}

const BookingCost = (props: BookingCostProps) => {
    const cost_for_total_nights =
        props.pricing.price_per_night * (props.total_nights || 0);

    const extra_guests = (props.total_guests || 0) - props.pricing.min_guests;

    const cost_for_extra_guests =
        props.pricing.price_per_extra_guest *
        Math.max(extra_guests, 0) *
        (props.total_nights || 0);

    const service_fee = Math.round(
        cost_for_total_nights * props.pricing.service_fee_factor
    );

    const total_cost =
        service_fee + cost_for_total_nights + cost_for_extra_guests;

    return (
        <>
            <Styled.CostDivContainer>
                <div>
                    {`$${props.pricing.price_per_night} per night X ${props.total_nights} nights`}
                </div>
                <div>{`$${cost_for_total_nights}`}</div>
            </Styled.CostDivContainer>
            {cost_for_extra_guests > 0 && (
                <Styled.CostDivContainer>
                    <div>
                        {`$${props.pricing.price_per_extra_guest} per extra guest X ${props.total_nights} nights`}
                    </div>
                    <div>{`$${cost_for_extra_guests}`}</div>
                </Styled.CostDivContainer>
            )}
            <Styled.CostDivContainer>
                <div>Service Fee</div>
                <div>{`$${service_fee}`}</div>
            </Styled.CostDivContainer>
            <Divider orientation="horizontal" />
            <Styled.CostDivContainer>
                <div>Total</div>
                <div>{`$${total_cost}`}</div>
            </Styled.CostDivContainer>
        </>
    );
};

export const PropertyBookingCard = ({
    id,
    rating,
    review_count,
    pricing,
    config,
}: PropertyDetails) => {
    React.useEffect(() => console.log(id));

    const [startDate, setStartDate] = useState<moment.Moment>(moment(null));
    const [endDate, setEndDate] = useState<moment.Moment>(moment(null));
    const [totalNights, setTotalNights] = useState<number | null>(null);
    const [selectedGuestCount, setSelectedGuestCount] = useState<string>('0');
    const [renderCostTotal, setRenderCostTotal] = useState<boolean>(false);
    const [cost, setCost] = useState<number | null>(null);

    const {
        register,
        handleSubmit,
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
        const formData = {
            startDate: startDate,
            endDate: endDate,
            selectedOption: selectedGuestCount,
        };
        console.log(formData);
    };

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Styled.PropertyCalendarCard>
            <Styled.PropertyHeaderDivContainer>
                <Styled.PropertyHeaderDivItem>
                    <Typography variant="h6">{`$${pricing.price_per_night.toString()} per night`}</Typography>
                </Styled.PropertyHeaderDivItem>
                {isLargeScreen && (
                    <Styled.PropertyHeaderDivItem>
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
                    </Styled.PropertyHeaderDivItem>
                )}
            </Styled.PropertyHeaderDivContainer>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <form onSubmit={handleSubmit(onSubmit)}>
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
