import React, { useEffect, useState } from "react";

function App (){
    const [dogImg, setDogImg] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const dogUrl = "https://dog.ceo/api/breeds/image/random";

    useEffect(()=>{
        fetch(dogUrl)
        .then((j)=>j.json())
        .then((data)=>{
            setIsLoaded(!isLoaded)
            setDogImg(data.message)
        })
        .catch(()=>console.log("Error retrieving data"))
    }, [])

    if(!isLoaded) return <p>Loading...</p>


    return (
        <div>
            <img src={dogImg} alt="A Random Dog" />
        </div>
    )

}

export default App;