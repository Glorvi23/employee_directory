import { Component } from "react";
import Employees from "./components/Employees/Employees";
import API from "./utils/API";

class App extends Component {
  constructor() {
    super();

    this.state = {
      results: [],
      tempResults: [],
      search: "",
    };
    this.handleSortImage = this.handleSortImage.bind(this);
    this.handleSortName = this.handleSortName.bind(this);
    this.handleSortPhone = this.handleSortPhone.bind(this);
    this.handleSortEmail = this.handleSortEmail.bind(this);
    this.handleSortDob = this.handleSortDob.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(this);
        console.log("in promise: ", res.data.results);
        this.setState({
          results: res.data.results,
          tempResults: res.data.results,
        });
        // this.handleFilter();
      })
      .catch((err) => console.log(err));
    // console.log("tempResults!: ", this.state.tempResults);
    // console.log("results!: ", this.state.tempResults);

    // this.searchEmployee();
  }

  handleFilter(name) {
    // console.log("tempResults!: ", this.state.tempResults);
    // console.log("results!: ", this.state.tempResults);
    // this.setState({ results: this.state.tempResults });
    const result = this.state.results.filter((employee) =>
      employee.name.first.includes(name)
    );

    this.setState({ results: result });
  }

  handleSortImage() {
    console.log(`Image!: `, this);
    const result = this.state.results;

    result.sort((a, b) => {
      // return b.dob.age > a.dob.age ? 1 : -1;
      var imgOne = a.picture.thumbnail;
      var imgTwo = b.picture.thumbnail;
      if (imgOne < imgTwo) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState({ results: result });
  }
  handleSortName() {
    console.log(`Name!: `, this);
    const result = this.state.results;

    result.sort((a, b) => {
      var numOne = a.name.last;
      var numTwo = b.name.last;
      if (numOne < numTwo) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState({ results: result });
  }
  handleSortPhone() {
    console.log(`Phone!: `, this);
    const result = this.state.results;

    result.sort((a, b) => {
      var numOne = a.name.last;
      var numTwo = b.name.last;
      if (numOne < numTwo) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState({ results: result });
  }

  handleSortEmail() {
    console.log(`Email!: `, this);
    const result = this.state.results;

    result.sort((a, b) => {
      var emailOne = a.email;
      var emailTwo = b.email;
      if (emailOne < emailTwo) {
        return 1;
      } else {
        return -1;
      }
    });

    this.setState({ results: result });
  }

  handleSortDob() {
    console.log(`Dob!: `, this);
    const result = this.state.results;

    result.sort((a, b) => {
      return b.dob.age - a.dob.age;
    });

    this.setState({ results: result });
  }

  // searchEmployee() {
  //   API.search()
  //     .then((res) => {
  //       console.log(this);
  //       console.log("in promise: ", res.data.results);
  //       this.setState({ results: res.data.results });
  //       // this.handleFilter();
  //     })
  //     .catch((err) => console.log(err));
  //   // console.log(this.state.results);
  // }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.handleFilter(this.state.search);
  };

  render() {
    return (
      <div className="App">
        <div className="row p-5 text-center bg-dark">
          <div className="col text-white">
            <h1>Employee Directory</h1>
            <p className="mt-3">Click on carrots to filter by heading or use the search box to narrow your results.</p>
          </div>
        </div>

        <div className="row">
          <div className="col p-2 text-center">
            <input
              onChange={this.handleInputChange}
              name="search"
              value={this.state.search}
            />
            <button
              className="btn btn-primary"
              onClick={this.handleFormSubmit}
            >
              Filter
            </button>
            <Employees
              handleSortImage={this.handleSortImage}
              handleSortName={this.handleSortName}
              handleSortPhone={this.handleSortPhone}
              handleSortEmail={this.handleSortEmail}
              handleSortDob={this.handleSortDob}
              employees={this.state.results}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
