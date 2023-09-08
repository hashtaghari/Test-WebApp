const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = require('exceljs');
const fs = require('fs');

const app = express();
const port = 3001;
const excelFileName = './Form Responses.xlsx'; // Excel file name

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.post('/submit', async (req, res) => {
  // Parse form data
  const { name, email, message } = req.body;
  console.log('Form Data', name, email, message)

  // Check if the Excel file exists in the current directory
  let workbook;
  if (fs.existsSync(excelFileName)) {
    // Load the existing Excel file
    workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFileName);
  } else {
    // Create a new Excel file if one doesn't exist
    workbook = new ExcelJS.Workbook();
  }
  

  // Get or create a worksheet named 'Form Responses'
  let worksheet = workbook.getWorksheet('Form Responses');
  if (!worksheet) {
    worksheet = workbook.addWorksheet('Form Responses');
    // Define Excel columns for a new worksheet
    worksheet.columns = [
      { header: 'Name', key: 'name', width: 20 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Message', key: 'message', width: 40 },
    ];
  }

  // Add form responses to the worksheet
  worksheet.addRow({ name, email, message });

  // Save the workbook back to the file
  await workbook.xlsx.writeFile(excelFileName);

  // Set response headers for file download
  res.setHeader('Content-Disposition', `attachment; filename=${excelFileName}`);
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.send(excelFileName);
  // res.send('ok')
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
