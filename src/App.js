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

 
}

export default App;
