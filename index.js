let fs = require('fs');

function show__fIles() {
    //let files;
      fs.readdir('/home/faraaz/', {}, (error, files) => {  console.log(files);}
      
  );

    
}

function is_file(
      entry) {
      
        try {
          fs.access(entry)
          
        }
           catch(  error) {
          console.log(error)
        }
  }

show__fIles();