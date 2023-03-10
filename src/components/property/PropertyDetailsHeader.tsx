import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Typography } from '@mui/material';

import { PropertyDetails } from '../../interfaces/Property';
import { DotSpan } from '../common/DotSpan';
import { ReviewsLink } from '../common/ReviewsLink';

export const PropertyDetailsHeader = ({
    title,
    rating,
    review_count,
    short_address,
}: PropertyDetails) => {
    return (
        <>
            <Typography
                variant="h4"
                sx={{ fontWeight: 600, marginBottom: '1rem' }}
            >
                {title}
            </Typography>
            <Typography>
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
                <DotSpan> &ensp;&#9642; &ensp;</DotSpan>
                {short_address}
            </Typography>
        </>
    );
};
