let now = new Date()
console.log("현재: ", now)

let yesterday = new Date(now.setDate(now.getDate()-1))
console.log("어제: ", yesterday)

let now2 = new Date()
let tomorrow = new Date(now2.setDate(now2.getDate() + 1))
console.log("내일: ", tomorrow)

let now3 = new Date()
let oneMonthAgo = new Date(now3.setDate(now3.getMonth() - 1))
console.log("한 달 전: ", oneMonthAgo)