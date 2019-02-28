import React from "react";
import MovieFull from "./MovieFull";
import { Alert } from "reactstrap";

class Result extends React.Component {
    render() {
        if (this.props.movie === "") {
            return <div />;
        } else if (this.props.movie.Error) {
            return (
                <div>
                    <Alert color="warning">{this.props.movie.Error}</Alert>
                </div>
            );
        } else {
            return (
                <div>
                    <MovieFull details={this.props.movie} />
                </div>
            );
        }
    }
}

export default Result;
