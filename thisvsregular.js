let user = {
  username: "john_doe",
  showUsername: function() {
    console.log("Method:", this.username); 
  }
};


function displayUsername() {
  console.log("Function:", this.username); 
}

//  difference when we call them:
user.showUsername();    
displayUsername();      