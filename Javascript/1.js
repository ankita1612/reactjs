function searchAPI(query) {
  console.log("Fetching results for:", query);
}

// Debounce function
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // reset previous timer
    timer = setTimeout(() => {
      fn.apply(this, args); // run function after delay
    }, delay);
  };
}

// Create a debounced version of searchAPI
const debouncedSearch = debounce(searchAPI, 1000); // wait 500ms

for (var i = 0; i < 5; i++) 
    {
    console.log("loop : "+i)
    function f(i){
        setTimeout(() =>{ let x=i; console.log("set time : "+x)}, 1000,i);
    }
    
    function f1(i){
        setTimeout(() =>{ let x=i; console.log("set time 1: "+x)}, 1000,i);
    }
    f1(i);
    f(i);
}

// for (let i = 0; i < 5; i++) {
//     console.log("loop : "+i)
//   setTimeout(() => console.log("set time : "+i), 1000);
// }


// function fn()
// {    
//     var x=1;
//     let l=1;
//     console.log("step1 X-->"+x)   
//     console.log("step1 L-->"+l)   
//     function fn2(){
//         l=10;
//         x=10;
//         console.log("step2 X-->"+x)
//         console.log("step2 L-->"+l)   
//     }
//     fn2();
//     console.log("step3 X-->"+x)
//     console.log("step3 L-->"+l)   
// }

// fn();

// var x=1;
// a();
// b();
// console.log("step3-->"+x)
// function a(){let x=10; console.log("a->"+x)}
// function b(){const x=100; console.log("b->"+x)}
// console.log("step4-->"+x)



// function b(){ console.log("b->"+x)}
// b()
// var x=1; 


