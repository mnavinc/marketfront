/**
 * Created by ncreato on 09/06/2020.
 */

// export class Product {
//     title: string;
//     brand?: string;
//     price?: number;
//     description?: string;
//     image?: string
// }


export class Product {
    id: number;
    title: string;
    company: string;
    rera: string;
    address: string;
    description: string;
    image: string;
    startingPrice: number;
    type: string;
    plots: string;
    approval: string;
    launchDate: string;
    status: string;
    totalArea:number;
    availablePlots: Plots[];
    logo: string;
}

export class Plots {
    id: number;
    title: string;
    company: string;
    type: string;
    area: number;
    price: number;
    status: string;
    facing: string;
    approvedBy: string;
    image:string;
}
