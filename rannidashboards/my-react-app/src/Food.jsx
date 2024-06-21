function Food(){
    const food1 = "Hot Dog",
        food2 = "ChickenBake";



    return ( 
        <ul>
            <li>Iceream</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );

}

export default Food;