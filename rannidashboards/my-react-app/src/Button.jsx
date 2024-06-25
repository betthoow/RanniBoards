function Button(){

    /*const handleclick = () => {
        console.log("Auchhhh");
    } 
    */

    /*
    let count = 0;

    const handleClick2 = (name) => {
        
        if(count <3 ){
            count++;
            console.log(`${name} you clicked me ${count} times/s'`);
        }
        else console.log(`ESTOP!!! ${name}` )
    }
    */ 

    const handleClick = (e) => { 
        //console.log(e);
        e.target.textContent = "Ouch!";
    }
    
    const handleDobleClick = (e) => {
        e.target.textContent = "Ouch x2!";
    }
    return (
        <button onDoubleClick={(e)=> handleDobleClick(e)} onClick={(e)=> handleClick(e)} className="button">Click me :) </button>
    )
}

export default Button