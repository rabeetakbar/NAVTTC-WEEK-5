let closurefunc = ()=>{

    let count=0;

    let increment =()=>{
count+=1;
console.log(count);

    }

    let decrement =()=>{
        count-=1;
        console.log(count);
    }
    console.log(count)
    // return { increment,decrement}
    //
    
    // return ()=>{
    //     increment();
    //     decrement();
    // }
    //
    increment();
    increment();
    increment();
    increment();

    decrement();

    console.log(count);
}

// let counterfunc = closurefunc();
// counterfunc.increment();
// counterfunc.increment();
// counterfunc.increment();

// console.log(closurefunc());
closurefunc();
console.log("-------------------");
//iife function
(
    (a,b)=>{
        console.log(a*b)
    
    
    }

)
(3,4)
