const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve('ACTIVE')
    }, 2000)
});

promise.then((productStatus) => {
    console.log(`STATUS: ${ productStatus }`)
});