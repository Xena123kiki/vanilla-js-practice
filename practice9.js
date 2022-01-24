const condition = true

const promise = new Promise((resolve, reject) => {
    if(condition) resolve('suceess')
    else resolve('fail')
})

promise
    .then((message) => console.log(message))
    // .then((message2) => {
    //     console.log(message2)
    //     return new Promise((resolve, reject) => {
    //         resolve(message2)
    //     })
    // })
    .catch((error) => console.log(error))
    .finally(() => console.log('definitely'))