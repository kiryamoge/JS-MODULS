  class Button {
    constructor(id, label, user){
      this.id = id;
      this.label = label;
      this.user = user;
      this.onClick = this.onClick.bind(this);
    }
  
    onClick(){
      console.log(this.user.name);
    }
  
    render(){
      const button = document.createElement('button');
      button.id = this.id;
      button.textContent = this.label;
      button.addEventListener('click', this.onClick);
      return button;
    }
  }
  
  const data = [
    {id: 1, label: "Button1", user: {name: "Pit"}},
    {id: 2, label: "Button2", user: {name: "Jane"}},
    {id: 3, label: "Button3", user: {name: "Kyle"}}
  ];
  
  const container = document.getElementById("app");
  
  data.forEach(item =>{
    const button = new Button(item.id, item.label, item.user);
    container.appendChild(button.render());
  });