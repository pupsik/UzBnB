import * as Styled from './PropertyCard.styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react-lite';
import Carousel from 'react-material-ui-carousel';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

interface CardImageProps {
    path: string;
    label: string;
}

interface ListingHighlits {
    short_address: string;
    rating: string;
    price: string;
}

interface PropertyCardProps {
    cardMediaImages: Array<CardImageProps>;
    cardContentShort: ListingHighlits;
    cardContentLong: string;
    onClick?: () => void;
}

const PropertyCard = (props: PropertyCardProps) => {
    const { cardMediaImages } = props;

    return (
        <Styled.PropertyCard onClick={props.onClick}>
            <Carousel autoPlay={false}>
                {cardMediaImages.map((item, i) => (
                    <CardMedia
                        key={i}
                        component="img"
                        height="300"
                        image={item.path}
                        alt="Paella dish"
                    />
                ))}
            </Carousel>
            <CardContent>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    align="justify"
                    sx={{fontSize: "1rem"}}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span>
                            <strong>
                                {props.cardContentShort.short_address}
                            </strong>
                        </span>
                        <span>
                            <StarRoundedIcon style={{ verticalAlign: 'top' }} />
                            {` ${props.cardContentShort.rating}`}
                        </span>
                    </div>
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" sx={{fontSize: ".9rem"}}>
                    {props.cardContentShort.price}
                </Typography>
            </CardContent>
        </Styled.PropertyCard>
    );
};

export default observer(PropertyCard);
