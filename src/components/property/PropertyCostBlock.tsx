import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { PropertyPricingDetails } from '../../interfaces/Property';
import * as Styled from './PropertyCostBlock.styles';

interface BookingCostProps {
    pricing: PropertyPricingDetails;
    total_nights: number | null;
    total_guests: number;
}

export const BookingCost = (props: BookingCostProps) => {
    const cost_for_total_nights =
        props.pricing.price_per_night * (props.total_nights || 0);

    const extra_guests = (props.total_guests || 0) - props.pricing.min_guests;

    const cost_for_extra_guests =
        props.pricing.price_per_extra_guest *
        Math.max(extra_guests, 0) *
        (props.total_nights || 0);

    const service_fee = Math.round(
        cost_for_total_nights * props.pricing.service_fee_factor
    );

    const total_cost =
        service_fee + cost_for_total_nights + cost_for_extra_guests;

    return (
        <>
            <Styled.CostDivContainer>
                <Typography variant="h6"> Price Details</Typography>
            </Styled.CostDivContainer>
            <Styled.CostDivContainer>
                <div>
                    {`$${props.pricing.price_per_night} per night X ${props.total_nights} nights`}
                </div>
                <div>{`$${cost_for_total_nights}`}</div>
            </Styled.CostDivContainer>
            {cost_for_extra_guests > 0 && (
                <Styled.CostDivContainer>
                    <div>
                        {`$${props.pricing.price_per_extra_guest} per extra guest X ${props.total_nights} nights`}
                    </div>
                    <div>{`$${cost_for_extra_guests}`}</div>
                </Styled.CostDivContainer>
            )}
            <Styled.CostDivContainer>
                <div>Service Fee</div>
                <div>{`$${service_fee}`}</div>
            </Styled.CostDivContainer>
            <Divider orientation="horizontal" />
            <Styled.CostDivContainer>
                <div>Total</div>
                <div>{`$${total_cost}`}</div>
            </Styled.CostDivContainer>
        </>
    );
};
