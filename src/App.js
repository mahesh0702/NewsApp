import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export class App extends Component {
  pageSize = 12;
  apiKey = "aeefb64c135b41c6b49cb8aa4dc0059c";
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="genera"
                pageSize={this.pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="business"
                pageSize={this.pageSize}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="health"
                pageSize={this.pageSize}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="general"
                pageSize={this.pageSize}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="sports"
                pageSize={this.pageSize}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="science"
                pageSize={this.pageSize}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="technology"
                pageSize={this.pageSize}
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                key="entertainment"
                pageSize={this.pageSize}
                category="entertainment"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
