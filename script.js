var wrap=document.body.querySelector(".wrapper")

let dragon = 10;
let user = 5;


while(dragon > 0 && user > 0){
  var damage = prompt("How much damage would you like to deal");
    randomDamage = Math.floor(Math.random() * damage) + 1;
      if(randomDamage > 5){
        dragon = dragon - 1;
          }else{
            dragon = dragon - randomDamage;
              }if(dragon > 0){
                dragRandomDamage = Math.floor(Math.random() * 2) + 1;
                  user = user - dragRandomDamage;
  }else{
    wrap.innerHTML = "User Wins!"
  }if(user <= 0){
     wrap.innerHTML = "Dragon Wins!"
  }
  
  
}