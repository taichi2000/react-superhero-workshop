import React from "react";
import "./styles.css";
import Card from "./Card";
import Spinner from "./Spinner";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchName: "",
      heroes: [],
      loading: false
    };

    this.handleSearchNameChange = this.handleSearchNameChange.bind(this);
  }

  handleSearchNameChange(event) {
    this.setState(
      {
        searchName: event.target.value
      },
      () => {
        console.log("Buscando por: " + this.state.searchName);

        this.searchSuperHeroByName(this.state.searchName)}
    );
  }

  searchSuperHeroByName(name) {
    this.setState({loading:true})

    fetch("https://superheroapi.com/api.php/10158291228183418/search/" + name)
      .then((response) => response.json())
      .then((data) => {
        if (data.response === "success") {
          this.setState({ heroes: data.results});
        } else {
          this.setState({ heroes: []});
        }

        this.setState({loading:false})
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Superhero App</h1>
        <h2>Buscaste por: {this.state.searchName}</h2>
        <div className="container">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Ingresar nombre super heroe"
              value={this.state.searchName}
              onChange={this.handleSearchNameChange}
            ></input>
          </div>
        </div>
        <div className="container d-flex flex-row flex-wrap justify-content-center">
          {this.state.loading && <Spinner />}
          {this.state.heroes.map((heroe) => {
            return (
              <Card
                key={heroe.id}
                name={heroe.name}
                imageUrl={heroe.image.url}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
