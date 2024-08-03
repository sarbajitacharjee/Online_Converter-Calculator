import React, { useState } from "react";
import jsPDF from "jspdf";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const TextConverter = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [fontStyle, setFontStyle] = useState("sans-serif");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFontChange = (e) => {
    setFontStyle(e.target.value);
  };

  const toUpperCase = () => {
    setOutputText(inputText.toUpperCase());
  };

  const toLowerCase = () => {
    setOutputText(inputText.toLowerCase());
  };

  const capitalizeWords = () => {
    setOutputText(
      inputText.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())
    );
  };

  const reverseText = () => {
    setOutputText(inputText.split("").reverse().join(""));
  };

  const removeExtraSpaces = () => {
    setOutputText(inputText.replace(/\s+/g, " ").trim());
  };

  const countCharacters = () => {
    setOutputText(`Character Count: ${inputText.length}`);
  };

  const countWords = () => {
    setOutputText(`Word Count: ${inputText.trim().split(/\s+/).length}`);
  };

  const countSentences = () => {
    setOutputText(
      `Sentence Count: ${inputText.split(/[.!?]+/).filter(Boolean).length}`
    );
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont(fontStyle);
    doc.text(outputText || inputText, 10, 10);
    doc.save("output.pdf");
  };

  const downloadDOCX = async () => {
    const doc = new Document();
    doc.addSection({
      children: [
        new Paragraph({
          children: [
            new TextRun({
              text: outputText || inputText,
              font: fontStyle,
              size: 24, // Default size in half-points (24 = 12pt)
            }),
          ],
        }),
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "output.docx");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#45dfdf] to-[#236c84] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-black">
          Text Converter
        </h1>
        <textarea
          className="w-full p-3 text-base sm:text-lg border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows="4"
          placeholder="Enter your text here..."
          value={inputText}
          onChange={handleInputChange}
        ></textarea>
        <div className="flex flex-col sm:flex-row justify-between mb-4 space-y-4 sm:space-y-0 sm:space-x-4">
          <select
            className="p-3 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
            value={fontStyle}
            onChange={handleFontChange}
          >
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
            <option value="Verdana">Verdana</option>
            <option value="Georgia">Georgia</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Monaco">Monaco</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Garamond">Garamond</option>
          </select>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <button
              className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
              onClick={downloadPDF}
            >
              Download PDF
            </button>
            <button
              className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 w-full sm:w-auto"
              onClick={downloadDOCX}
            >
              Download DOCX
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={toUpperCase}
          >
            Uppercase
          </button>
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={toLowerCase}
          >
            Lowercase
          </button>
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={capitalizeWords}
          >
            Capitalize Words
          </button>
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={reverseText}
          >
            Reverse Text
          </button>
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={countCharacters}
          >
            Count Characters
          </button>
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={countWords}
          >
            Count Words
          </button>
          <button
            className="bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            onClick={countSentences}
          >
            Count Sentences
          </button>
        </div>
        <textarea
          className={`w-full p-3 text-base sm:text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 ${fontStyle}`}
          style={{ fontFamily: fontStyle }}
          rows="4"
          placeholder="Your output will appear here..."
          value={outputText}
          readOnly
        ></textarea>
      </div>
    </div>
  );
};

export default TextConverter;
