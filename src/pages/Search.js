import React from "react";
import {
    Button,
    ButtonGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    Row,
    Col
} from "reactstrap";
import Result from "./../components/Result";

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

        this.state = {
            inputSearch: "",
            inputPlot: "short"
        };
    }

    handleRadio({ selected }) {
        this.setState({ inputPlot: selected });
    }

    handleChange({ target }) {
        this.setState({ inputSearch: target.value });
    }

    handleKeyPress = event => {
        if (event.key === "Enter") {
            this.props.getResults(this.state.inputSearch, this.state.inputPlot);
        }
    };

    render() {
        return (
            <div>
                <Row className="pb-5">
                    <Col>
                        <h1 className="pb-5 pt-5 text-center">
                            Search a movie
                        </h1>
                        <InputGroup size="lg">
                            <Input
                                placeholder="Search here..."
                                name="inputSearch"
                                onChange={this.handleChange}
                                value={this.state.inputSearch}
                                onKeyPress={this.handleKeyPress}
                            />
                            <InputGroupAddon addonType="append">
                                <Button
                                    color="secondary"
                                    onClick={() =>
                                        this.props.getResults(
                                            this.state.inputSearch,
                                            this.state.inputPlot
                                        )
                                    }>
                                    Zoeken
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <ButtonGroup size="sm" className="pt-1">
                            <Button
                                color="secondary"
                                onClick={() => this.handleRadio("short")}
                                active={this.state.inputPlot === "short"}>
                                Short
                            </Button>
                            <Button
                                color="secondary"
                                onClick={() => this.handleRadio("full")}
                                active={this.state.inputPlot === "full"}>
                                Full
                            </Button>
                        </ButtonGroup>
                    </Col>
                </Row>
                <Result movie={this.props.movie} />
            </div>
        );
    }
}

export default Search;
