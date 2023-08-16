import { Geo } from "./geo";

export class Address {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: Geo;

    constructor(city: string, street: string, suite: string, zipcode: string, geo: Geo) {
        this.city = city;
        this.street = street;
        this.suite = suite;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}
