const fs = require("fs"); //const fs = require('fs').promises; ile promise tabanlı fs modülünü kullanabiliriz.
//async await ile de yapılabilir.

const createEmployee = () => {
  const employee = { name: "Employee 1 Name", salary: 2000 };

  fs.writeFile("employees.json", JSON.stringify(employee), "utf8", (err) => {
    if (err) {
      console.log("❌ Dosya oluşturulurken hata oluştu:", err);
      return;
    }
    console.log("✅ employees.json dosyası başarıyla oluşturuldu.");
  });
};

const readEmployee = () => {
  fs.readFile("employees.json", "utf8", (err, data) => {
    if (err) {
      console.log("❌ Dosya okunurken hata oluştu:", err);
      return;
    }
    const employee = JSON.parse(data);
    console.log("📄 Çalışan Bilgileri:", employee);
  });
};

const updateEmployee = () => {
  const updatedEmployee = { name: "Updated Employee Name", salary: 3000 };

  fs.writeFile(
    "employees.json",
    JSON.stringify(updatedEmployee),
    "utf8",
    (err) => {
      if (err) {
        console.log("❌ Dosya güncellenirken hata oluştu:", err);
        return;
      }
      console.log("✅ Çalışan bilgileri başarıyla güncellendi.");
    }
  );
};

const deleteFile = () => {
  fs.unlink("employees.json", (err) => {
    if (err) {
      console.log("❌ Dosya silinirken hata oluştu:", err);
      return;
    }
    console.log("🗑️ employees.json dosyası başarıyla silindi.");
  });
};

console.log("\n=== 📁 File System CRUD İşlemleri ===\n");

createEmployee();

setTimeout(readEmployee, 1000);

setTimeout(updateEmployee, 2000);

setTimeout(readEmployee, 3000);

setTimeout(deleteFile, 4000);
