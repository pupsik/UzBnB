import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TvIcon from '@mui/icons-material/Tv';
import WifiIcon from '@mui/icons-material/Wifi';

const iconFontSize = "large";

export const feature_icon_map = {
    WiFi: <WifiIcon fontSize={iconFontSize}/>,
    Kitchen: <KitchenIcon fontSize={iconFontSize}/>,
    'Cooking basics': <RestaurantIcon fontSize={iconFontSize}/>,
    'Free parking': <LocalParkingIcon fontSize={iconFontSize}/>,
    Books: <MenuBookIcon fontSize={iconFontSize}/>,
    TV: <TvIcon fontSize={iconFontSize}/>,
};
