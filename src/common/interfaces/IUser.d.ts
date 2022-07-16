import IAddress from "./IAddress";
import ICompany from "./ICompany";

export default interface IUser {
    address: IAddress;
    company: ICompany;
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
}