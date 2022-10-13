export interface NewCartItem {
    id: number;
    name: string;
    image: string;
    quantity: number;
    price: number;
}

export interface Cart {
    totalPrice: number;
    quantity: number;
    customerId: string;
    itemsList: NewCartItem[];
}

export interface ChangeQuantityDTO {
    id: number;
    quantity: number;
}
