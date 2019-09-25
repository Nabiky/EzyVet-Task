import axios from 'axios';
import { Env } from '../helpers/constants';
import productsData from '../data/products';

const axiosCustom = axios.create();
axiosCustom.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

export const fetchCatalog = async payload => {
    if (process.env.NODE_ENV === Env.DEVELOPMENT) {
        return productsData;
    }
    const catalog = await axiosCustom.get(`rest/blahblah=${payload}`);
    return catalog;
};
