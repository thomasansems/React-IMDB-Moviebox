import React from "react";
import Movie from "./../components/Movie";
import { Row, Col } from "reactstrap";

class Featured extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col>
                        <h1 className="pb-5 pt-5 text-center">
                            My featured movies
                        </h1>
                    </Col>
                </Row>
                {/* Loop through keys */}
                {Object.keys(this.props.movies).map(key => (
                    <Movie key={key} details={this.props.movies[key]} />
                ))}
            </div>
        );
    }
}

export default Featured;
