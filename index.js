// scissors 剪刀 rock 石头  cloth 布
// let users = process.argv[process.argv.length - 1];//用户的动作


let userNum = 0;
let computerNum = 0;
let tie = 0;
 
let game = function(user){
  let random = Math.random() *3;
  let computer = '';//电脑的动作
  if(random < 1){
    computer = 'scissors';
  } else if(random>2) {
    computer = 'rock';
  } else {
    computer = 'cloth';
  }

  if(user === computer){
    console.log('平局')
    return 0;
  } else if((user === 'scissors'&&computer === 'rock')||(user === 'rock'&&computer === 'cloth')||(user === 'cloth'&&computer === 'scissors')){
    console.log('电脑胜利✌️') 
    return -1;
  } else {
    console.log('用户胜利✌️')
    return 1;
  }
}


process.stdin.on('data',e=>{
  const user = e.toString().trim();
  console.log(user);
  let result = game(user);
  if(result === 0) {
    tie++;
  } else if(result === -1) {
    computerNum++;
  } else if(result === 1) {
    userNum++;
  } 
  console.log(`电脑${computerNum}---用户${userNum}---平局${tie}---合计${computerNum+userNum+tie}`) 
  if(userNum >10){
    console.log('你太厉害了！');
    process.exit();
  }
})
