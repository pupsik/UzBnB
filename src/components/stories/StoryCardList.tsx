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
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPageNum((no) => no + 1);
                }
            })
    );

    React.useEffect(() => {
        storyStore.getStories();
    }, [pageNum]);
    

    React.useEffect(()=> {
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
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
        >
            {storyStore.stories.map((s, idx) => {   
                let attributes = {};
                if (storyStore.stories.length-1===idx){
                    attributes = {
                        ref: node=>setLastElement(node)
                    };
                }      
                return (
                    <Grid item
                        xs={2}
                        sm={4}
                        md={4}
                        key={s.index}
                        data-id={s.index}
                        {...attributes}
                    >
                        <StoryCard
                            cardMediaImage={s.image}
                            cardContentShort={s.summary}
                            cardContentLong={s.body}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default observer(StoryCardList);
