import * as React from 'react';
import { useState } from 'react';
import { TextField, MenuItem, Button, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers';

const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const PropertyBookingCardForm = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            startDate: startDate,
            endDate: endDate,
            selectedOption: selectedOption,
        };
        console.log(formData);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <DatePicker
                            label="Start Date"
                            value={startDate}
                            onChange={handleStartDateChange}
                            // renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <DatePicker
                            label="End Date"
                            value={endDate}
                            onChange={handleEndDateChange}
                            // renderInput={(params) => <TextField {...params} />}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            select
                            label="Select Option"
                            value={selectedOption}
                            onChange={handleSelectChange}
                            sx={{ width: '100%' }}
                        >
                            {options.map((option) => (
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
    );
};

export default PropertyBookingCardForm;
