import Card from 'pages/Contact/components/Card';
import deliveryImage from 'static/icons/delivery.png';
import billingImage from 'static/icons/billing.png';
import preordersImage from 'static/icons/preorder.png';
import faqImage from 'static/icons/FAQ.png';
import styled from '@emotion/styled';

const CardsHolder = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
`;

const Cards = (): JSX.Element => (
    <CardsHolder>
        <Card
            image={deliveryImage}
            alt="delivery"
            title="Shipping and Returns"
        />
        <Card image={billingImage} alt="payment" title="Billing and Payments" />
        <Card image={preordersImage} alt="preorders" title="Preorders" />
        <Card image={faqImage} alt="FAQs" title="FAQs" />
    </CardsHolder>
);

export default Cards;
