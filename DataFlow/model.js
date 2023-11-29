const posts = [ 
    {
        name : "Fadi Khoury",
        text : "Have a great day!",
    
        
        name : "Ameer Jamal",
        text : "you are the best student ever!"  
    }
]


        const addPost = function () {
        const newName = $('#ni').val();
        const newText = $('#ti').val();
  
        if (newName && newText) {
          posts.push({ name: newName, text: newText });
          render(); 
        }
  
        
        $('#ni').val('');
        $('#ti').val('');
      }
  
      
  
      
  