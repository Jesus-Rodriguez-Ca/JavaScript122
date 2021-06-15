import { Component } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

class Detail extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
      name: "",
      version: "",
      price: "",
      available: "",
    };
  }

  componentDidMount() {
    fetch(`http://localhost:5000/detail?name=${this.props.match.params.game}`)
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          name: json.game.name,
          price: json.game.price,
          version: json.game.version,
          available: json.game.available.toString(),
        })
      );
  }

  handleDelete = () => {
    fetch(`http://localhost:5000/delete/${this.props.match.params.game}`)
      .then((res) => res.json())
      .then((json) => {
        alert(json.message);
        window.history.back();
      });
  };

  handleSave = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        version: this.state.version,
        available: this.state.available,
      }),
    };
    fetch(`http://localhost:5000/add-new`, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        alert(json.messege);
        window.history.back();
      });
  };

  handleUpdate = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        price: this.state.price,
        version: this.state.version,
        available: this.state.available,
      }),
    };
    fetch(`http://localhost:5000/edit/${this.props.match.params.game}`, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        alert(json.messege);
        window.history.back();
      });
  };


  handleClear = () => {
    this.setState({
      name: "",
      price: "",
      version: "",
      available: "",
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <br />
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            Name:
            <input
              name="name"
              value={this.state.name}
              onChange={this.onChange}
            ></input>
            Price: $
            <input
              name="price"
              type="number"
              value={this.state.price}
              onChange={this.onChange}
            ></input>
            Version:{" "}
            <input
              name="version"
              value={this.state.version}
              onChange={this.onChange}
            ></input>
            Available
            <input
              name="available"
              value={this.state.available}
              onChange={this.onChange}
            ></input>
          </Card.Body>
          <Button onClick={this.handleSave}>Add Game</Button>
          <Button variant="info" onClick={this.handleUpdate}>Update Game</Button>
          <Button variant="secondary" onClick={this.handleClear}>
            Clear
          </Button>
          <Button variant="danger" onClick={this.handleDelete}>
            Delete
          </Button>
        </Card>
        <Row>
          <br />
          <p onClick={this.props.history.goBack}>Back</p>
        </Row>
      </Container>
    );
  }
}
export default Detail;
