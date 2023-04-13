import React from "react";
import Button from "react-bootstrap/Button";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
//import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function PDF(props) {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);

  return (
    <Container fluid>
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
      <Row>
        <Col>
          <Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              renderTextLayer={false}
              scale={props.scale}
            />
          </Document>
        </Col>
      </Row>
    </Container>
  );
}

export default PDF;
