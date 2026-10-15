export interface CategoriesType {
    
id : "string"
slug :"string"
nameBn : "string"
icon : "string"
}

export interface ProductsType {
    id: number; 
    slug: string;
    nameBn: string;
    category: string;
    categoryNameBn: string;
    categoryIcon: string;
    unit: string;
    image: string;
    today: number;
    yesterday: number;
    lastWeek: number;
    lastMonth: number;
    change: {
        dir: string; 
        pct: number;
    };
    markets: MarketDetails[]; 
}

export interface MarketDetails {
    
market: "number"
division :"string"
min : "number"
max : "number"
}