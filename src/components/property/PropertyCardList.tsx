import * as React from 'react';
import StoryCard from './PropertyCard';
import { Grid } from '@mui/material';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';

const PropertyCardList = () => {
    const { propertyStore } = useStore();
    const navigate = useNavigate();
    const [lastElement, setLastElement] = useState(null);
    const [pageNum, setPageNum] = useState(1);

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
        propertyStore.getProperties();
    }, [pageNum]);

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