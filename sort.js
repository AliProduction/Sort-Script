let fs = require("fs");
let path = require("path");
let currentPath = "C:/Users/fatos/Downloads/"; 

fs.readdir(currentPath, (err, files) => {
   files.forEach(process);
});

function process(file) {
   let endung = path.extname(file);
   console.log(file + " Endung: " + endung);

   if (file == "sort" && endung == ".js") {
      console.log("( sort.js ) File wurde ignoriert !");
   } else {
      fs.mkdir(currentPath + endung, () => {
         console.log("Ein Ordner für die Endung " + endung + " wurde erstellt !");
   
         fs.rename(currentPath + file, currentPath + endung + `/${file}`, () => {
            console.log(`Die Datei ${file} wurde zu ihrer Endung ${endung} verschoben !`);
         });
      });
   }
}


