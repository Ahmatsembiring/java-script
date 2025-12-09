function  sum (name, ...data){
    let total =0 
    for(const item of data){
        total+= item;
    }console.info(`total ${name} is ${total}`);
}

sum('orance',2,3,4,5,6)
sum('Aplle',2,4,4,5,6)
sum('Banana',2,3,4,5,6)