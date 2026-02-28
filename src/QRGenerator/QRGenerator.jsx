import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRGenerator = () => {
  const [text, setText] = useState("");
  const printRef = useRef();

  const handlePrint = () => {
    const printContents = printRef.current.innerHTML;
    const newWindow = window.open("", "", "width=600,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Print QR</title>
          <style>
            body { text-align: center; font-family: Arial; }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>QR Code Generator</h2>

      <input
        type="text"
        placeholder="Enter Shipment ID"
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ padding: "8px", width: "250px" }}
      />

      <br />
      <br />

      {text && (
        <div ref={printRef}>
          <h3>Shipment Label</h3>
          <QRCodeCanvas value={text} size={200} />
          <p>{text}</p>
        </div>
      )}

      <br />

      {text && (
        <button onClick={handlePrint} style={{ padding: "10px 20px" }}>
          Print QR Code
        </button>
      )}
    </div>
  );
};

export default QRGenerator;
