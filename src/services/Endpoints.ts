import axios from "axios";
interface Genderize {
    count: number,
    gender: string,
    name: string,
    probability: number,
}
interface Agify {
    count: number,
    name: string,
    age: number,

}
export interface University {
    alpha_two_code: string,
    name: string,
    domains: string[],
    web_pages: string[],
    country: string,
    state_province: string
}
export class Endpoints {
    public async getGenderFromName(name: string): Promise<Genderize> {
        const { data } = await axios.get(`https://api.genderize.io/?name=${name}`)
        return data;
    }

    public async getAgeFromName(name: string): Promise<Agify> {
        const { data } = await axios.get(`https://api.agify.io/?name=${name}`)
        return data;
    }
    
    public async getUniversitiesFromCountry(country: string): Promise<University[]> {
        const { data } = await axios.get(`http://universities.hipolabs.com/search?country=${country}`)
        return data;
    }

    public async getMeteoSource() {
        const { data } = await axios.get(`https://www.meteosource.com/api/v1/free/point?place_id=dominican-republic-3508796&sections=current&language=en&units=auto&key=3bjrltwpshk0l66qp2pi8fvozn2ycdwwav8h8cem`)
        console.log(data)
        return data;
    }
}