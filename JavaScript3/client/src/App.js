import './App.css';
import {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { data: [], isLoading: true };
  }

  componentDidMount() {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(json => this.setState({ data: json.games, isLoanding: false }));
  }
  
  render(){
    // {console.log(this.state.data.games)}
//     const games = this.state.data.games;
    const listGames = this.state.data.map((item) =>
  <li key={item._id}>{item.name} price:$ {item.price}</li>
);
    return <div>Hola
      {listGames}
    </div>

  }
}
export default App;
