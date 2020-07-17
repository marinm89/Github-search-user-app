import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import UserDetails from "./components/UserDetails";
import UserRepos from "./components/UserRepos";
import axios from "axios";
import userRepos from "./components/UserRepos";

class App extends React.Component {
  state = {
    searchResults: null,
    searchResultRepos: null,
    searchTerm: "",
    isError: false,
    isLoading: false,
  };

  fetchUsersBySearchTerm = async () => {
    try {
      this.setState({ isLoading: true });
      const url = "https://api.github.com/users/" + this.state.searchUsers;
      const results = await axios.get(url);
      this.setState({
        isError: false,
        isLoading: false,
        searchResults: results.data,
      });
      console.log(results.data);
    } catch (err) {
      console.error("An error occurred!", err);
      this.setState({ isError: true, isLoading: false });
    }
  };

  setSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm });
  };

  fetchUserRepos = async () => {
    try {
      this.setState({ isLoading: true });
      const url =
        "https://api.github.com/users/" + this.state.searchTerm + "/repos";
      const results = await axios.get(url);
      this.setState({
        isError: false,
        isLoading: false,
        searchResultRepos: results.data,
      });
      console.log("************111111111111", results.data);
    } catch (err) {
      console.error("An error occurred!", err);
      this.setState({ isError: true, isLoading: false });
    }
  };

  setSearchTerm = (newSearchTerm) => {
    this.setState({ searchTerm: newSearchTerm });
  };

  render() {
    return (
      <div>
        <SearchForm
          searchTerm={this.state.searchTerm}
          setSearchTerm={this.setSearchTerm}
          searchUsers={this.fetchUsersBySearchTerm}
          searchRepos={this.fetchUserRepos}
        />
        <UserDetails userDetails={this.state.searchResults} />
        <UserRepos userRepos={this.state.searchResultRepos} />
      </div>
    );
  }
}

export default App;
