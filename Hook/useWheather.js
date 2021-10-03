import React, {
    useState,
    useEffect
} from 'react';


export default function useWheather(Search) {


    // const Search = latitude + "," + longitude;
    //etat courant et  fct  pour setloading set error et setResult
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [result, setResult] = useState(null);


    useEffect(() => {
            //appel vers API -- declaration
          
                const call = async () => {
                    setLoading(true);
                    try {
                        // if (!Search) {
                        //     return { loading: false , error :"search is empty",result: null }
                        // }

                        const api = "https://api.weatherapi.com/v1/current.json?key=ba6f48ecdfef49aaa8193420210405&q=" + Search + "&days=1&aqi=no&alerts=no";
                        //Requete  pour recuperer données API
                        const response = await fetch(api);
                        console.log( "response",response);
                        if (response.status == 200) {
                            //ok on récupère et on parse en JSON
                            const resultJSON = await response.json();
                           
                            setResult(resultJSON);
    
                        } else {
                            throw new error('Request failed')
                        }
    
                    } catch (error) {
                        setError(error);
    
                    } finally {
                        setLoading(false);
                    }
                }
    
    
    
                //on appelle la fct call
                call();
           
            
        },
        //variable que l'on souhaite écouter et qui va déclencher le useEffect
        [Search]);

    //UseWeather retournera un objet 
    return {
        loading,
        error,
        result
    }


};