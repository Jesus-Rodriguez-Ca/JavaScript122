import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";



class ListGames extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((json) => this.setState({ data: json.games, isLoanding: false }));
  }
 
  
  render = () => {
    const listGames = this.state.data.map((item) => (
      <Link key={item._id} to={`detail/${item.name}`}>
        <ListGroup.Item key={item.name}>{item.name}</ListGroup.Item>
      </Link>
    ));
    return (
      <>

        <Container>
          <Row>
            <p className="text-center">Video Game List</p>
          </Row>
          <br />
          <br />
          <Row>
            {" "}
            <ListGroup>{listGames}</ListGroup>
          </Row>

        </Container>
      </>
      
    );
    
  };

}

export default ListGames;
