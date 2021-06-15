import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "./components/Header";
import Detail from "./components/Detail";
import ListGames from "./components/ListGames";
class App extends Component {
  constructor() {
    super();
    this.state = { data: [], isLoading: true };
  }

  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col xs={4}></Col>
            <Col xs={4}>
              <Router>
                <div>
                  <Switch>
                    <Route path="/" component={ListGames} exact></Route>
                    <Route path="/detail/:game" component={Detail}></Route>
                  </Switch>
                </div>
              </Router>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
