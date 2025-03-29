import React, { useState } from "react";
import * as XLSX from "xlsx";
import Papa from "papaparse";

const DataPreview = () => {
  const [data, setData] = useState([]);
  const [summary, setSummary] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const binaryStr = e.target.result;
      if (file.name.endsWith(".csv")) {
        parseCSV(binaryStr);
      } else if (file.name.endsWith(".xlsx")) {
        parseExcel(binaryStr);
      }
    };
    reader.readAsBinaryString(file);
  };

  const parseCSV = (csvString) => {
    const parsedData = Papa.parse(csvString, { header: true });
    setData(parsedData.data);
    generateSummary(parsedData.data);
  };

  const parseExcel = (binaryStr) => {
    const workbook = XLSX.read(binaryStr, { type: "binary" });
    const sheetName = workbook.SheetNames[0];
    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    setData(sheetData);
    generateSummary(sheetData);
  };

  const generateSummary = (data) => {
    if (data.length === 0) return;
    const columns = Object.keys(data[0]);
    const dataTypes = columns.reduce((acc, col) => {
      acc[col] = typeof data[0][col];
      return acc;
    }, {});

    setSummary({
      rows: data.length,
      columns: columns.length,
      dataTypes,
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
      {/* File Upload */}
      <input
        type="file"
        accept=".csv, .xlsx"
        className="block w-full p-2 border rounded-md"
        onChange={handleFileUpload}
      />

      {/* Data Summary */}
      {summary && (
        <div className="bg-gray-100 p-4 rounded-md">
          <h3 className="font-bold">Data Summary:</h3>
          <p>Rows: {summary.rows}</p>
          <p>Columns: {summary.columns}</p>
          <p>Data Types:</p>
          <ul className="list-disc list-inside">
            {Object.entries(summary.dataTypes).map(([col, type]) => (
              <li key={col}>{col}: {type}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Data Table */}
      {data.length > 0 && (
        <div className="overflow-auto border rounded-md">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                {Object.keys(data[0]).map((col) => (
                  <th key={col} className="border p-2">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.slice(0, 10).map((row, rowIndex) => (
                <tr key={rowIndex} className="odd:bg-gray-50">
                  {Object.values(row).map((cell, cellIndex) => (
                    <td key={cellIndex} className="border p-2">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DataPreview;
