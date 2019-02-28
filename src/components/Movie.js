import React from "react";
import { Col, Row } from "reactstrap";

class Movie extends React.Component {
    render() {
        return (
            <Row className="mb-3">
                <Col xs="4" md="3">
                    <img
                        src={this.props.details.Poster}
                        alt={this.props.details.Title}
                        className="img-fluid"
                    />
                </Col>
                <Col xs="8" md="9">
                    <h2>
                        {this.props.details.Title}
                        <span>({this.props.details.Year})</span>
                    </h2>
                    <strong>
                        <span role="img" aria-label="trophy">
                            🏆
                        </span>{" "}
                        {this.props.details.Awards}
                    </strong>
                    <p>{this.props.details.Plot}</p>
                </Col>
            </Row>
        );
    }
}

export default Movie;
