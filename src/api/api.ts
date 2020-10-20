import axios from 'axios';
axios.defaults.baseURL = 'https://api.edamam.com/api/food-database/v2/parser';
axios.defaults.params = {
    ...axios.defaults.params,
    "app_id": "ee495d67",
    "app_key": "cf938a3406cf8f449c42691748ce249e",
    "ingr": 1
}
export interface Nutrients {
    ENERC_KCAL: number;
    PROCNT: number;
    FAT: number;
    CHOCDF: number;
    FIBTG: number;
}
export interface Food {
    foodId: string;
    label: string;
    nutrients: Nutrients;
    category: string;
    categoryLabel: string;
    image: string;
}
export interface Measures {
    uri: string;
    label: string;
}
export interface Hints {
    food: Food;
    measures: (Measures)[];
}
export interface Next {
    title: string;
    href: string;
}
export interface Links {
    next: Next;
}
export interface FoodData {
    text: string;
    hints: (Hints)[];
    _links: Links;
}
export interface ResponseFoodProps extends AxiosResposne {
    data?: FoodData
}
export interface AxiosResposne {
    status: number;
    data?: any;
    error?: any;
}
export const getFood = async () => {
    return await axios.get<undefined, ResponseFoodProps>('');
}