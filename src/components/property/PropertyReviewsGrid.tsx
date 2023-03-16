import React from 'react';

import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

import { PropertyReviews } from '../../interfaces/Property';

export const PropertyReviewsGrid = (props: PropertyReviews) => {
    const pages = 6;

    const [reviews, setReviews] = React.useState([[]]);
    const [currentPage, setCurrentPage] = React.useState(1);

    // Transform the array into the format that's easy to render
    React.useEffect(() => {
        const group_reviews = props.reviews.reduce((acc, _cv, ci, arr) => {
            if (ci % 2 === 0) {
                acc.push(arr.slice(ci, ci + 2));
            }
            return acc;
        }, []);
        const paginatedReviews = group_reviews.reduce((acc, _cv, ci, arr) => {
            if (ci % (pages / 2) === 0) {
                acc.push(arr.slice(ci, ci + 3));
            }
            return acc;
        }, []);
        setReviews(paginatedReviews);
    }, []);

    const handleOnPageChange = (
        _event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setCurrentPage(value);
    };

    return (
        <>
            {reviews[currentPage - 1].map((duo: any[], i) => (
                <Grid
                    container
                    spacing={1}
                    key={i}
                    sx={{ marginBottom: '1rem' }}
                >
                    {duo.map((x, j) => {
                        return (
                            <Grid item xs={12} md={6} key={j}>
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }}
                                >
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar
                                                alt="User Name"
                                                src="https://i.pravatar.cc/300"
                                            />
                                        </ListItemAvatar>
                                        <ListItemText
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{
                                                            display: 'inline',
                                                        }}
                                                        component="span"
                                                        variant="body1"
                                                        color="text.primary"
                                                    >
                                                        {`${x.review_by.first_name} ${x.review_by.last_name} `}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        component="span"
                                                    >
                                                        {x.review_text.length <
                                                        251
                                                            ? x.review_text
                                                            : x.review_text.substring(
                                                                  0,
                                                                  240
                                                              )}
                                                        <a
                                                            href="#"
                                                            style={{
                                                                margin: '.5rem',
                                                            }}
                                                        >
                                                            Show more
                                                        </a>
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </List>
                            </Grid>
                        );
                    })}
                </Grid>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <Pagination
                    count={Math.round(props.reviews.length / 6)}
                    page={currentPage}
                    color="primary"
                    onChange={handleOnPageChange}
                    size={'large'}
                />
            </div>
        </>
    );
};
