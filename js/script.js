// const test = {
//     prop:42,
//     func:function (){
//         return this.prop
//     }
// }
//
//
// console.log(test.func())
//
//
// function Constructor(age,name,city){
//     this.age = age;
//     this.name = name;
//     this.city = city;
// }
//
// let newConst = new Constructor(19,'hayk','erevan')
//
// console.log(newConst)


// function solution(sequence) {
//     let count  = 0;
//     for(let i = 0; i < sequence.length;i++){
//         if(sequence[i] <= sequence[i - 1]){
//             count++
//             if(count >= 1) {
//                 return false
//             }
//
//             if(sequence[i] <= sequence[i - 2] && sequence[i + 1] < sequence[i - 1]){
//                 return false
//             }
//         }
//     }
//     return true
// }
//
//
// console.log(solution( [1, 2, 1, 2]))


//
// let ladder = {
//     step: 0,
//     down:function () {
//         this.step--
//         return this
//     },
//     up:function (){
//         this.step++
//         return this
//     },
//     showStep:function (){
//         console.log(this.step);
//         return this
//     }
// };
//
// ladder.up().up().down().showStep().down().showStep()


function  myFunction(){
    let x = document.getElementById('topnav');
    if (x.className  === 'topnav'){
        x.className += 'Responsive';
    } else{
        x.className = 'topnav'
    }
}