import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import Card from '@mui/material/Card';
import * as Styled from './PropertyBookingCard.styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Typography } from '@mui/material';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { DotSpan } from '../common/DotSpan';
import { ReviewsLink } from '../common/ReviewsLink';
import PropertyBookingCardForm from './PropertyBookingCardForm';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export const PropertyBookingCard = ({ id, rating, review_count }) => {
    React.useEffect(() => console.log(id));

    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Styled.PropertyCalendarCard>
            <Styled.PropertyHeaderDivContainer>
                <Styled.PropertyHeaderDivItem>
                    <Typography variant="h6">$140 per night</Typography>
                </Styled.PropertyHeaderDivItem>
                {isLargeScreen && (
                    <Styled.PropertyHeaderDivItem>
                        <span>
                            <StarRoundedIcon style={{ verticalAlign: 'top' }} />
                            {` ${rating.toString()}`}
                        </span>
                        <DotSpan> &ensp;&#9642; &ensp;</DotSpan>
                        <span style={{ fontWeight: 600 }}>
                            <ReviewsLink href="#">
                                {review_count} reviews
                            </ReviewsLink>
                        </span>
                    </Styled.PropertyHeaderDivItem>
                )}
            </Styled.PropertyHeaderDivContainer>
            <PropertyBookingCardForm />
        </Styled.PropertyCalendarCard>
    );
};

// export default function BasicDateCalendar() {
//     return (
//         <Styled.PropertyCalendarCard>
//             <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <Styled.PropertyCalendar disablePast={true} />
//             </LocalizationProvider>
//         </Styled.PropertyCalendarCard>
//     );
// }
