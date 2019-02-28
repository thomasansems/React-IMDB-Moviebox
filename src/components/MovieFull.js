import React from "react";
import { Col, Row, Table } from "reactstrap";

class MovieFull extends React.Component {
    render() {
        // Create const for ratings
        const ratingsList = this.props.details.Ratings.map((item, key) => {
            return (
                <li className="list-inline-item" key={key}>
                    {item.Source}:{" "}
                    <span className="font-weight-bold">{item.Value}</span>
                </li>
            );
        });

        return (
            <Row>
                <Col md="4">
                    <img
                        src={this.props.details.Poster}
                        alt={this.props.details.Title}
                        className="img-fluid pb-3"
                    />
                </Col>
                <Col md="8">
                    <h2>
                        {this.props.details.Title}
                        <span> ({this.props.details.Year})</span>
                    </h2>
                    <div className="clearfix">
                        <h4 className="float-left">
                            <span role="img" aria-label="Star">
                                ⭐
                            </span>{" "}
                            {this.props.details.imdbRating}{" "}
                        </h4>
                        <p className="float-left pl-2">
                            from {this.props.details.imdbVotes} votes.
                        </p>
                    </div>
                    <ul className="list-inline text-muted">{ratingsList}</ul>
                    <p className="pb-1">{this.props.details.Plot}</p>
                    <Row>
                        <Col md="6">
                            <Table>
                                <tbody>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Director
                                        </td>
                                        <td>{this.props.details.Director}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Writer
                                        </td>
                                        <td>{this.props.details.Writer}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Actors
                                        </td>
                                        <td>{this.props.details.Actors}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Genre
                                        </td>
                                        <td>{this.props.details.Genre}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Type
                                        </td>
                                        <td>{this.props.details.Type}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                        <Col md="6">
                            <Table>
                                <tbody>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Released
                                        </td>
                                        <td>{this.props.details.Released}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Runtime
                                        </td>
                                        <td>{this.props.details.Runtime}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Language
                                        </td>
                                        <td>{this.props.details.Language}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Awards
                                        </td>
                                        <td>{this.props.details.Awards}</td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">
                                            Rated
                                        </td>
                                        <td>{this.props.details.Rated}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default MovieFull;
