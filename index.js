// code your solution here
function saturdayFun(activity= "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun(activity="bathe my dog")

function mondayWork(plans = "go to the office"){
    return `This Monday, I will ${plans}.`
}
mondayWork(plans = "")
function wrapAdjective(){

}
function wrapAdjective(string='*') {
    const innerFunction = function(adjective='special') {
        return `You are ${string}${adjective}${string}!`
    }
    return innerFunction}