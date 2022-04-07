const somethingWillHappen = () =>{
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('heyyy');

        }else{
            reject ('ooooooppps');
        }
    })
}
somethingWillHappen()

.then(response=> console.log(response))
.catch(err=> console.error(err));



const somethingWillHappen2 = () =>{
    return new Promise((resolve,reject)=>{
        if(false){
            setTimeout(() => {
                resolve('True')
            }, 2000);
        }else{
            const error = new Error('ooooops paila ');
            reject(error)
        }
    })
}
somethingWillHappen2()
.then(response=> console.log(response))
.catch(err => console.error(err));