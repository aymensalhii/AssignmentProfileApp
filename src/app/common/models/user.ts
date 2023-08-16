import { Address } from "./address";
import { Company } from "./company";

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: Address;
    company: Company
    constructor(id: number, name: string, username: string, email: string, phone: string, website: string, address: Address, company: Company) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = address;
        this.company = company;        
    }
}
