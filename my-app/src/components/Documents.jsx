import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import dAndC from "../images/Divide-and-Conquer.pdf";
import SD1Report from "../images/Senior-Design-1-Document.pdf";

class Documents extends Component {
    render() {
        return (
            <div className='Home-div'>
                <h2>Documentation</h2>
                <div className="Spacing-div" />
                <Container>
                    <Row className="row-spacing">
                        <Col>
                            <a href={dAndC} target="_blank" rel="noreferrer" class="document-link">Divide and Conquer</a>
                        </Col>
                        <Col>
                            <a href={SD1Report} target="_blank" rel="noreferrer" class="document-link">Senior Design 1 Report</a>
                        </Col>
                    </Row>
                    <Row className="row-spacing">
                        <Col>
                            <a href={dAndC} target="_blank" rel="noreferrer" class="document-link">Senior Design 2 Report</a>
                        </Col>
                        <Col>
                            <a href={dAndC} target="_blank" rel="noreferrer" class="document-link">Conference Paper</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a href={dAndC} target="_blank" rel="noreferrer" class="document-link">Showcase Presentation</a>
                        </Col>
                        <Col>
                            <a href={dAndC} target="_blank" rel="noreferrer" class="document-link">Midterm Presentation</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Documents;