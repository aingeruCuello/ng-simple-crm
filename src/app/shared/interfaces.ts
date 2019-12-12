export interface ICustomer {
    id: number;
    name: string;
    city: string;
    orderTotal?: number;
    customerSince: any;


}

export interface IOrder {
    customerId: number;
    orderItems: IOrderItem[];
}

export interface IOrderItem {
    ID: number;
    PRODCUTnAME: string;
    itemCost: number;
}