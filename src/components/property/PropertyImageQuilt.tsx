import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useStore } from '../../store';
import { PropertyImages } from '../../interfaces/Property';
import Carousel from 'react-material-ui-carousel';
import Image from 'mui-image';
import { CarouselDiv, QuiltDiv } from './PropertyImageQuilt.styles';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export const PropertyImageQuilt = ({ id }) => {
    const [propertyImages, setPropertyImages] = React.useState<PropertyImages>(
        []
    );

    const { propertyStore } = useStore();

    React.useEffect(() => {
        const getPropertyImages = async () => {
            const images = await propertyStore.getPropertyImages(id);
            setPropertyImages(images);
        };
        getPropertyImages();
    }, [id]);

    // https://mui.com/material-ui/react-image-list/
    return (
        <>
            <QuiltDiv>
                <ImageList
                    variant="quilted"
                    cols={4}
                    rowHeight={250}
                    sx={{ borderRadius: '15px' }}
                >
                    {propertyImages.slice(0, 5).map((item, idx) => {
                        let rows;
                        let cols;

                        if (idx === 0) {
                            rows = 2;
                            cols = 2;
                        }

                        if ([1, 2, 3].includes(idx)) {
                            rows = 1;
                            cols = undefined;
                        }

                        return (
                            <ImageListItem
                                key={item.path}
                                cols={cols}
                                rows={rows}
                            >
                                <img
                                    {...srcset(item.path, 121, rows, cols)}
                                    alt={item.label}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        );
                    })}
                </ImageList>
            </QuiltDiv>
            <CarouselDiv>
                <Carousel autoPlay={false}>
                    {propertyImages.map((item, i) => (
                        <Image
                            key={i}
                            //  height="300"
                            src={item.path}
                            alt="Paella dish"
                            sx={{ borderRadius: '32px' }}
                        />
                    ))}
                </Carousel>
            </CarouselDiv>
        </>
    );
};
