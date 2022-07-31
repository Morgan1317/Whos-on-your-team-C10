const writePage = (data) =>{
    console.log(data);
    // writeFile(data)
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <main>
        
    </main>

        
    </body>
    </html>
        `
}

// const generateCard = (data) => {
 
//     for(let i = 0; i<data.length; i++){
//          `
//         <div class="card" style="width: 18rem;">
//         <div class="card-header">
//         ${getName(data[i])}
//         ${getRole(data[i])}
//         </div>
//         <ul class="list-group list-group-flush">
//         <li class="list-group-item">${getId(data[i])}</li>

//         <li class="list-group-item">${getEmail(data[i])}</li>
//         <li class="list-group-item">Vestibulum at eros</li>
//         </ul>
//         </div>
//         `}
// };

const fs = require('fs');
// const generatePage = require('./src/page-template');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// copying file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'Stylesheet created!'
      });
    });
  });
};

module.exports = writePage; 