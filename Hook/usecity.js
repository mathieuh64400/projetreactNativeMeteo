
import React, {useState, useEffect} from 'react';

    
    export default function useCity(local) {
        //etat courant et  fct  pour setloading set error et setResult
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState();
        const [result, setResult] = useState(null);
    
        useEffect(() => {
            //appel vers API -- declaration
            const call = async () => {
                setLoading(true);
                try {

                    const api="https://api.weatherapi.com/v1/search.json?key= ba6f48ecdfef49aaa8193420210405&q="+local;
                    //Requete  pour recuperer données API
                    const response = await fetch(api);
    
                    if (response.status == 200) {
                        //ok on récupère et on parse en JSON
                        const resultJSON = await response.json();
    
                        setResult(resultJSON);
    
                    }
                    else {
                        throw new error('Request failed')
                    }
    
                }
                catch (error) {
                    setError(error);
    
                }
                finally {
                    setLoading(false);
                }
            }
    
    
    
            //on appelle la fct call
            call();
        },
            //variable que l'on souhaite écouter et qui va déclencher le useEffect
            [local]);
    
        //UseWeather retournera un objet 
        return { loading, error, result }
    
    
    };
