import Card from '@mui/material/Card';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import styled from 'styled-components';

export const CostDivContainer = styled.div`
    display: flex;
    justify-content: space-between;
    // font-size: 1.2rem;
    margin: 1rem;
`;

export const PropertyHeaderDivContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
`;

export const PropertyHeaderDivItem = styled.div`
    padding: 1rem;
`;

export const PropertyCalendar = styled(DateCalendar)`
    .MuiPickersDay-root {
        font-size: 1.1rem;
    }
    .MuiDayCalendar-weekDayLabel {
        font-size: 1rem;
        font-weight: 600;
    }
`;

export const PropertyCalendarCard = styled(Card)`
    border: 1px solid ${(props) => props.theme.palette.grey[200]};
    border-radius: 12px;
    padding: 1rem;
    box-shadow: none;
    max-width: 26rem;
`;
