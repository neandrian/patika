const fs = require("fs");
const { resolve } = require("path");

const writeData = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile("employees.json", '{"name": "Employee 1 Name", "salary": 2000}', "utf8", (err) => {
      if (err) {
        reject(`Dosya oluştururken hata oluştu: ${err}`);
      } else {
        resolve("employees.json dosyası oluşturuldu.");
      }
    });
  });
};

const readData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("employees.json", "utf8", (err, data) => {
      if (err) {
        reject(`Dosya okunurken hata oluştu: ${err}`);
      } else {
        resolve(`employees.json dosyası okundu.\nVeri:\n${data}`);
      }
    });
  });
};

const updateData = () => {
  return new Promise((resolve, reject) => {
    fs.appendFile("employees.json", '\n{"name": "Employee 2 Name", "salary": 3000}', "utf8", (err, data) => {
      if (err) {
        reject(`Dosya güncellenirken hata oluştu: ${err}`);
      } else {
        resolve(`employees.json dosyası güncellendi.`);
      }
    });
  });
};

const deleteFile = () => {
  return new Promise((resolve, reject) => {
    fs.unlink("employees.json", (err) => {
      if (err) {
        reject(`Dosya silinirken hata oluştu: ${err}`);
      } else {
        resolve(`employees.json dosyası silindi.`);
      }
    });
  });
};

const processData = async () => {
  try {
    const writeFile = await writeData();
    console.log(writeFile);

    const readFile = await readData();
    console.log(readFile);

    const updateFile = await updateData();
    console.log(updateFile);

    const readUpdatedFile = await readData();
    console.log(readUpdatedFile);

    const removeFile = await deleteFile();
    console.log(removeFile);
  } catch (error) {
    console.log(error);
  }
};

processData();
