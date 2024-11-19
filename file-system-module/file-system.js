const fs = require("fs").promises;

// 👥 Employee data
const employeeData = {
  name: "Kaan",
  salary: 2000,
};

// 📁 File paths
const DIR_PATH = "employees";
const FILE_PATH = `${DIR_PATH}/employees.json`;

// 📂 Create directory
async function createDirectory() {
  try {
    await fs.mkdir(DIR_PATH, { recursive: true });
    console.log("📁 Directory created successfully");
  } catch (error) {
    console.error("❌ Error creating directory:", error);
  }
}

// 📝 Create employee file
async function createEmployee() {
  try {
    await fs.writeFile(
      FILE_PATH,
      JSON.stringify(employeeData, null, 2),
      "utf8"
    );
    console.log("✅ Employee data created successfully");
  } catch (error) {
    console.error("❌ Error creating employee data:", error);
  }
}

// 📖 Read employee data
async function readEmployee() {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    console.log("👤 Employee data:", JSON.parse(data));
  } catch (error) {
    console.error("❌ Error reading employee data:", error);
  }
}

// 🔄 Update employee data
async function updateEmployee(newName) {
  try {
    const data = await fs.readFile(FILE_PATH, "utf8");
    const employee = JSON.parse(data);
    employee.name = newName;

    await fs.writeFile(FILE_PATH, JSON.stringify(employee, null, 2), "utf8");
    console.log("✨ Employee data updated successfully");
  } catch (error) {
    console.error("❌ Error updating employee data:", error);
  }
}

// 🗑️ Delete employee data
async function deleteEmployee() {
  try {
    await fs.unlink(FILE_PATH);
    console.log("🗑️ Employee data deleted successfully");
  } catch (error) {
    console.error("❌ Error deleting employee data:", error);
  }
}

// 🚀 Main execution
async function main() {
  await createDirectory();
  await createEmployee();
  console.log("\n📊 Initial employee data:");
  await readEmployee();

  await updateEmployee("Berk");
  console.log("\n🔄 Updated employee data:");
  await readEmployee();
  console.log("\n🗑️ Deleting employee data...");
  await deleteEmployee();
}

main().catch((error) => {
  console.error("💥 Application error:", error);
});
