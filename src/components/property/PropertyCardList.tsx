import * as React from 'react';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';
import { observer } from 'mobx-react-lite';

import useAccessToken from '../../hooks/useAccessToken';
import { useStore } from '../../store';
import StoryCard from './PropertyCard';

const PropertyCardList = () => {
    const { propertyStore } = useStore();
    const navigate = useNavigate();
    const [lastElement, setLastElement] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const token = useAccessToken();

    const observer = useRef(
        new IntersectionObserver((entries) => {
            const first = entries[0];
            if (first.isIntersecting) {
                setPageNum((no) => no + 1);
            }
        })
    );

    const goToPropertyPage = (id: number) => {
        navigate(`/property/${id}`);
    };

    React.useEffect(() => {
        if (token) {
            propertyStore.getProperties(token);
        }
    }, [pageNum, token]);

    React.useEffect(() => {
        const currentElement = lastElement;
        const currentObserver = observer.current;

        if (currentElement) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [lastElement]);

    return (
        <Grid
            container
            spacing={{ xs: 2, sm: 2, md: 4 }}
            // columns={{ xs: 1, sm: 2, md: 5 }}
            className={'section__main'}
        >
            {propertyStore.properties.map((s, idx) => {
                let attributes = {};
                if (propertyStore.properties.length - 1 === idx) {
                    attributes = {
                        ref: (node) => setLastElement(node),
                    };
                }
                return (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        key={s.index}
                        data-id={s.index}
                        {...attributes}
                    >
                        <StoryCard
                            cardMediaImages={s.images}
                            cardContentShort={s.highlights}
                            cardContentLong={s.body}
                            onClick={() => goToPropertyPage(s.id)}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default observer(PropertyCardList);
