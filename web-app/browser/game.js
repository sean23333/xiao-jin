class Game{
  constructor(select,scoreEle,gameoverbg){
    this.startbtn=document.querySelector("#start")
    this.gameoverimg=document.querySelector(gameoverbg)
    this.map=document.querySelector(select)
    this.scoreEle=document.querySelector(scoreEle)
    this.food=new Food(select)
    this.snake=new Snake(select)
    this.timer=0
    this.cunt=0
  
  }

  start(){
    this.gameoverimg.style.display="none"
    this.timer= setInterval(() => {
      this.snake.move()
      if (this.snake.isEat(this.food.x,this.food.y)) {
         this.snake.createHead()
         this.food.foodPos()
         this.scorechange()
      
      }
      if (this.snake.isDie()) {
        clearInterval(this.timer)
        this.gameover()
      }
    }, 500);
  }
  pause(){
    clearInterval(this.timer)
  }
  restart(){
    this.startbtn.disabled=false
    window.location.reload()
  }
  change(type){
    this.snake.direction=type
  }
  scorechange(){
       this.cunt++
       this.scoreEle.innerText=this.cunt
  }
  gameover(){
     this.gameoverimg.style.display="block"
     this.startbtn.disabled=true
  }
}