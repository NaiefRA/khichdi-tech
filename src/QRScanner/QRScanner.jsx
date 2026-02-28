import React, { useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const QRScanner = ({ onScan }) => {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: 250 },
      false,
    );

    scanner.render((decodedText) => {
      console.log("Scanned:", decodedText);
      onScan(decodedText);
    });

    return () => {
      scanner.clear().catch((error) => console.error(error));
    };
  }, [onScan]);

  return <div id="reader" style={{ width: "300px" }} />;
};

export default QRScanner;
