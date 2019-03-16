import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";
import Featured from "./pages/Featured";
import { Container } from "reactstrap";
import { key } from "./config.json";
import { imdbID } from "./imdb.json";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            movie: "",
            isOpen: false
        };

        // This binding is necessary to make `this` work in the callback
        this.getResults = this.getResults.bind(this);
    }

    getResults(value, plot) {
        // Fetch data from http://www.omdbapi.com
        fetch(`http://www.omdbapi.com/?t=${value}&plot=${plot}&apikey=${key}`)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        movie: result
                    });
                },
                error => {
                    this.setState({
                        movie: error
                    });
                }
            );
    }

    componentDidMount() {
        // Fetch featured date
        const movies = [];
        imdbID.map(id =>
            fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=${key}`)
                .then(res => res.json())
                .then(
                    result => {
                        movies[id] = result;
                    },
                    error => {
                        this.setState({
                            error
                        });
                    }
                )
        );
        this.setState({ movies });
    }

    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <Container>
                        <Route
                            exact
                            path="/"
                            render={() => (
                                <Search
                                    getResults={this.getResults}
                                    searchInput={this.state.searchInput}
                                    movie={this.state.movie}
                                />
                            )}
                        />
                        <Route
                            path="/featured"
                            render={() => (
                                <Featured movies={this.state.movies} />
                            )}
                        />
                    </Container>
                </div>
            </Router>
        );
    }
}

export default App;
