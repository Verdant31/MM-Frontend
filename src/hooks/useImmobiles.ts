import { useQuery } from 'react-query';
import { api } from '../services/api';

type Immobile = {
    id: string;
    image: string;
    type: string;
    price: number;
    size: number;
    toilets: number;
    suites: number;
    rooms: number;
    slots: number;
}[];

type GetImmobilesResponse = {
    totalCount: number;
    immobiles: Immobile;
}

export async function getImmobiles(page: number): Promise<GetImmobilesResponse> {
    const { data, headers } = await api.get(`getproducts?page=${page}`);
    const totalCount = Number(headers['x-total-count']);

    const immobiles = Object.keys(data).map(key => {
        return {
            id: key,
            image: data[key].fotosDoTerreno[0],
            type: data[key].tipo,
            price: data[key].preco,
            size: data[key].tamanho,
            toilets: data[key].banheiros,
            rooms: data[key].quartos,
            suites: data[key].suites,
            slots: data[key].vagas
        }
    });

    return {
        immobiles, totalCount
    };
};


export function useImmobiles(page: number) {
    return useQuery(['imóveis', page], () => getImmobiles(page), {
        staleTime: 1000 * 5
    });
}


