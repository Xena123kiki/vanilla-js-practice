async function findAndSaveUser(Users){
    try{
        let user = await Users.findOne({})
        user.name = 'zero'
        user = await user.save()
        user = await Users.findOne({gender: 'm'})
    } catch {
        console.error(err)
    }
}

const findAndSaveUser2 = async (Users) => {
    try{
        let user = await Users.findOne({})
        user.name = 'zero'
        user = await user.save()
        user = await Users.findOne({gender: 'm'})
    } catch {
        console.error(err)
    }
}

const promise1 = Promise.resolve('success1');
const promise2 = Promise.resolve('success2');
(async () => {
    for await (promise of [promise1, promise2]){
        console.log(promise)
    }
})()