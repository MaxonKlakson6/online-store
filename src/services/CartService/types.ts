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

export interface CartResponse extends Cart {
    __v: number;
    _id: string;
}

export interface ChangeQuantityDTO {
    id: number;
    quantity: number;
}

export interface ChangeQuantityResponse {
    cartState: {
        quantity: number;
        totalPrice: number;
    };
    updatedItem: NewCartItem;
}

export interface DeleteCartItemResponse {
    cartState: {
        quantity: number;
        totalPrice: number;
    };
    removedItemId: number;
}
