import * as React from 'react';
import StoryCard from '../stories/StoryCard';
import { Grid } from '@mui/material';
import { useStore } from '../../store';

import { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';

const StoryCardList = () => {
    const { storyStore } = useStore();

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

    React.useEffect(() => {
        storyStore.getStories();
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
            spacing={{ xs: 2, sm: 2, md: 5 }}
            columns={{ xs: 1, sm: 2, md: 5 }}
        >
            {storyStore.stories.map((s, idx) => {
                let attributes = {};
                if (storyStore.stories.length - 1 === idx) {
                    attributes = {
                        ref: (node) => setLastElement(node),
                    };
                }
                return (
                    <Grid
                        item
                        xs={1}
                        sm={2}
                        md={4}
                        key={s.index}
                        data-id={s.index}
                        {...attributes}
                        
                    >
                        <StoryCard
                            cardMediaImages={s.images}
                            cardContentShort={s.highlights}
                            cardContentLong={s.body}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default observer(StoryCardList);
