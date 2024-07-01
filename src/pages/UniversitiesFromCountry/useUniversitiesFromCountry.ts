import { useCallback, useState } from "react";
import { Endpoints, University } from "../../services/Endpoints";

const useUniversitiesFromCountry = () => {
    const endpoints = new Endpoints();
    
    const [country, setCountry] = useState('')
    const [universities, setUniversities] = useState<University[]>([])

    const getUniversitiesFromCountry = useCallback((country: string) => {
        endpoints
          .getUniversitiesFromCountry(country)
          .then((res: University[]) => setUniversities(res));
      }, []);

    return {
        country, 
        setCountry,
        getUniversitiesFromCountry,
        universities,
    }
}

export default useUniversitiesFromCountry;