import React from "react";

const PdftoImage = (props) => (
  <div>
    <PDFtoIMG file={file}>
      {({ pages }) => {
        if (!pages.length) return "Loading...";
        return pages.map((page, index) => {
          return <Image key={index} src={page} />;
        });
      }}
    </PDFtoIMG>
  </div>
);

export default PdftoImage;
