import { Avatar, Typography } from '@mui/material';
import { PropertyDetails } from '../../interfaces/Property';
import { DotSpan } from '../common/DotSpan';

export const PropertyDetailsHighlights = ({
    subtitle,
    config,
}: PropertyDetails) => {
    return (
        <>
            <div>
                <div style={{ width: '70%', float: 'left' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {subtitle}
                    </Typography>
                    <Typography>
                        <span>{config.max_guests} guests</span>
                        <DotSpan> &ensp;&#9642; &ensp;</DotSpan>
                        <span>{config.bedrooms} bedrooms</span>
                        <DotSpan> &ensp;&#9642; &ensp;</DotSpan>
                        <span>{config.beds} beds</span>
                        <DotSpan> &ensp;&#9642; &ensp;</DotSpan>
                        <span>{config.bathrooms} bathrooms</span>
                    </Typography>
                </div>
                <div style={{ float: 'right', padding: '1rem 1rem' }}>
                    <Avatar alt="Home Owner" src="https://i.pravatar.cc/300" />
                </div>
            </div>
        
        </>
    );
};
