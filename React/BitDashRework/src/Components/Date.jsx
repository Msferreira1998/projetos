/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import '../Styles/hora.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>{

    let today = new Date();
    
    const [hora, setHora] = useState(today.getHours())
    const [min, setMin] = useState(today.getMinutes())
    const [sec, setSec] = useState(today.getSeconds())


    useEffect(()=>{

        const interval = setInterval(()=>{
            setSec(sec + 1);

            if (sec === 59){
                setSec(0);
                setMin(min + 1);

                if (min === 59){
                    setMin(0);
                    setHora(hora + 1);

                    if(hora === 23){
                        setHora(0);
                    }
                } 
            }
        }, 1000);

        return ()=> clearInterval(interval);
    });

    function horaFormatada(){

        let horaF;
        let minF;
        let secF;

        if(hora < 10){
            horaF = `0${hora}`
        }else{
            horaF = hora;
        }
        if(min < 10){
            minF = `0${min}`
        }else{
            minF = min;
        }
        if(sec < 10){
            secF = `0${sec}`
        }else{
            secF = sec;
        }

        return (
            <>{horaF}:{minF}:{secF}</>
        )

    }
    

    // function Hour(){
    //     if (hora >= 0 && hora < 6){
    //         return(
    //             <>
    //                 <h1>{`${hora}:${min}`}</h1>
    //                 <p>Boa Madrugada</p>
    //             </>
    //         )
    //     }

    //     else if (hora >= 6 && hora < 12){
    //         return(
    //             <>
    //                 <h1>{`${hora}:${min}`}</h1>
    //                 <p>Bom Dia</p>
    //             </>)
    //     }
    //     else if (hora >= 12 && hora < 18){
    //         return(
    //             <>
    //                 <h1>{`${hora}:${min}`}</h1>
    //                 <p>Boa Tarde</p>
    //             </>)
    //     }
    //     else if (hora >= 18 && hora <= 23){
    //         return(
    //             <>
    //                 <h1>{`${hora}:${min}`}</h1>
    //                 <p>Boa Noite</p>
    //             </>)
    //     }
    // }

    
    return( 
        
        <div className='hora'>
            {horaFormatada()}
        </div>

    )
}