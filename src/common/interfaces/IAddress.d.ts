export default interface IAddress {
    city: string
    geo: {
        lat: string;
        lng: string;
    }
    street: string;
    suite: string;
    zipcode: string;
}