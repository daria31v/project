import axios, { AxiosError } from 'axios';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default class NewsApiService {    
    constructor() {
        this.page = 1;
    }
    async fetchImage() {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '31608375-581536e59e6cd039daecb6e21';
    const value = 'mountain,landscape,rivers,sun'
    const params = 'image_type=photo&per_page=40';
    const quantityImg = 17;       
    
        try {
            const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${value}&${params}&per_page=${quantityImg}&page=${this.page}`);
            const data = response.data;
            // console.log(data);         
                     
            if (data.total === 0) {
                throw new Error('Something went wrong')
            }
                                                 
            this.page += 1; 

            return data;   

        } catch (err) {
            console.error(err)
        }
    }
    
    resetPage() {
        this.page = 1;
    }
    get query() {
        return data;
    }    
    set query(newQuery) {
        this.searchQuery = newQuery;
    }    
}