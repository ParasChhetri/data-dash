// import React, { useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { UploadCloud } from "lucide-react";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);

//   const onDrop = (acceptedFiles) => {
//     setFiles(acceptedFiles);
//   };

//   const { getRootProps, getInputProps } = useDropzone({
//     onDrop,
//     accept: {
//       "text/csv": [".csv"],
//       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"]
//     },
//     multiple: false
//   });

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
//       {/* Drag and Drop Area */}
//       <div
//         {...getRootProps()}
//         className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
//       >
//         <input {...getInputProps()} />
//         <UploadCloud className="w-12 h-12 text-gray-500" />
//         <p className="text-gray-600 mt-2">Drag & Drop your CSV or Excel file here</p>
//         <p className="text-sm text-gray-500">or click to select a file</p>
//       </div>

//       {/* File Upload Button */}
//       <label className="block">
//         <span className="sr-only">Choose file</span>
//         <input
//           type="file"
//           className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
//           accept=".csv, .xlsx"
//           onChange={(e) => setFiles(e.target.files)}
//         />
//       </label>

//       {/* Display Selected File */}
//       {files.length > 0 && (
//         <div className="mt-4 p-3 bg-gray-100 rounded-md">
//           <p className="text-sm font-medium text-gray-800">Selected File:</p>
//           <p className="text-gray-600">{files[0].name}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default FileUpload;
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import Papa from "papaparse"; // For CSV parsing
import * as XLSX from "xlsx"; // For Excel file parsing

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [chartData, setChartData] = useState([]); // Chart data

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
    processFile(acceptedFiles[0]); // Process the first uploaded file
  };

  const processFile = (file) => {
    const reader = new FileReader();

    // Handle CSV file parsing
    if (file.type === "text/csv") {
      reader.onload = (event) => {
        const csvData = Papa.parse(event.target.result, { header: true });
        setChartData(processChartData(csvData.data));
      };
      reader.readAsText(file);
    } 
    
    // Handle Excel file parsing
    else if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
      reader.onload = (event) => {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
        setChartData(processChartData(sheetData));
      };
      reader.readAsBinaryString(file);
    }
  };

  // Function to process raw data into chart-friendly format
  const processChartData = (data) => {
    // Assuming the data has fields "Category" and "Value" (adjust based on your CSV/Excel file)
    return data.map((row) => ({
      name: row.Category || row.category, // Check for case variations
      value: Number(row.Value || row.value),
    }));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
    },
    multiple: false,
  });

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      {/* Drag and Drop Area */}
      <div
        {...getRootProps()}
        className="border-2 border-dashed border-gray-400 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50"
      >
        <input {...getInputProps()} />
        <UploadCloud className="w-12 h-12 text-gray-500" />
        <p className="text-gray-600 mt-2">Drag & Drop your CSV or Excel file here</p>
        <p className="text-sm text-gray-500">or click to select a file</p>
      </div>

      {/* File Upload Button */}
      <label className="block">
        <span className="sr-only">Choose file</span>
        <input
          type="file"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
          accept=".csv, .xlsx"
          onChange={(e) => {
            setFiles(e.target.files);
            processFile(e.target.files[0]);
          }}
        />
      </label>

      {/* Display Selected File */}
      {files.length > 0 && (
        <div className="mt-4 p-3 bg-gray-100 rounded-md">
          <p className="text-sm font-medium text-gray-800">Selected File:</p>
          <p className="text-gray-600">{files[0].name}</p>
        </div>
      )}

      {/* Display Pie Chart */}
      {chartData.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-bold mb-4">Generated Pie Chart</h2>
          <PieChart width={400} height={400}>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      )}

      {chartData.length === 0 && files.length > 0 && (
        <p className="text-sm text-gray-500 mt-4">No valid data found in the uploaded file.</p>
      )}
    </div>
  );
};

export default FileUpload;
