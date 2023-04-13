import React, { useState, useRef, useEffect } from "react";
import throttle from "lodash/throttle";
import Button from "react-bootstrap/Button";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDF2(props) {
  const [initialWidth, setInitialWidth] = useState(null);

  const pdfWrapper = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  const setPdfSize = () => {
    if (pdfWrapper && pdfWrapper.current) {
      setInitialWidth(pdfWrapper.current.getBoundingClientRect().width);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", throttle(setPdfSize, 3000));
    setPdfSize();
    return () => {
      window.removeEventListener("resize", throttle(setPdfSize, 3000));
    };
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          {" "}
          {pageNumber > 1 ? (
            <Row>
              <Col>
                <Button className="m-2" onClick={goToPrevPage}>
                  Prev
                </Button>
                <Button className="m-2" onClick={goToNextPage}>
                  Next
                </Button>

                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </Col>
            </Row>
          ) : null}
        </Col>
      </Row>
      <Row>
        <Col>
          <div
            style={{
              display: "flex",
            }}
          >
            <div style={{ width: "90vw" }} ref={pdfWrapper}>
              <Document
                file={props.file}
                onLoadSuccess={onDocumentLoadSuccess}
                noData=""
                loading=""
              >
                <Page
                  pageNumber={pageNumber}
                  loading=""
                  width={initialWidth}
                  renderTextLayer={false}
                />
              </Document>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
