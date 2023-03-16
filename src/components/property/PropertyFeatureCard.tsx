import React from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import { feature_icon_map } from '../../constants/feature_icon_map';

type Features = {
    set: any[];
};

export const PropertyFeatureCard = (features: Features) => {
    const [groupedFeatures, setGroupedFeatures] = React.useState([]);

    React.useEffect(() => {
        const grouped = features.set.reduce((acc, _cv, ci, arr) => {
            if (ci % 2 === 0) {
                acc.push(arr.slice(ci, ci + 2));
            }
            return acc;
        }, []);
        setGroupedFeatures(grouped);
    }, [features]);
    return (
        <>
            {groupedFeatures.map((gr: any[], i) => (
                <Grid
                    container
                    spacing={2}
                    key={i}
                    style={{ padding: '1rem 0' }}
                >
                    {gr.map((x, j) => (
                        <Grid item xs={6} key={j}>
                            <div
                                style={{
                                    display: 'inline-block',
                                    padding: '0 1rem',
                                }}
                            >
                                {feature_icon_map[x]}
                            </div>
                            <div style={{ display: 'inline-block' }}>
                                <Typography variant="body1">{x}</Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </>
    );
};
