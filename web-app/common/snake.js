class Snake{
  constructor (select){
    this.map=document.querySelector(select)
    this.direction="right"
    this.snakelist=[]
    this.createSnake()    
  }
  
  createHead(){
     const head=this.snakelist[0]
     const pos={x:0,y:0}

     if (head) {
      switch (this.direction) {
        case "left":
          pos.x= head.offsetLeft-20
          pos.y= head.offsetTop
          break;
        case "right":
          pos.x= head.offsetLeft+20
          pos.y= head.offsetTop
          break;
        case "top":
          pos.x= head.offsetLeft
          pos.y= head.offsetTop-20
          break;
        case "bottom":
          pos.x= head.offsetLeft
          pos.y= head.offsetTop+20
          break;
      
        default:
          break;
      }

      head.className="body"
     }

     const div=document.createElement("div")
     div.className="head"
     this.snakelist.unshift(div)
     div.style.left=pos.x+"px"
     div.style.top=pos.y+"px"

     this.map.appendChild(div)

  }

  createSnake(){
      for(let i=0;i<4;i++){
        this.createHead()
      }
  }

  move(){
     const body= this.snakelist.pop()
     body.remove()
     this.createHead()

  }
  isEat(foodX,foodY){
     const head =this.snakelist[0]
     const headX=head.offsetLeft
     const headY=head.offsetTop

     if (foodX===headX && foodY===headY) {
       return true
     }
     return false
  }
  isDie(){
    const head =this.snakelist[0]
    const headX=head.offsetLeft
    const headY=head.offsetTop
    if(headX<0||headY<0||headX>=this.map.clientWidth||headY>=this.map.clientHeight){
      return true
    }
    return false
  }
}