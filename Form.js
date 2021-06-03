class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
   
    
    input.position(130, 160);
    button.position(250, 200);

    this.button.mousePressed(()=>{
      input.hide();
      button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      //player.update(name)
      player.updateCount(playerCount);
      greeting.html("Hello " + player.name )
      greeting.position(130, 160)
    });

  }
}
