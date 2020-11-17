import React, { Component, Fragment } from 'react';

import Header from '../Header';
import Main from '../Main';
import Quiz from '../Quiz';
import Loader from '../Loader';

import { PATH_BASE, AMOUNT } from '../../api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isQuizStart: false,
      API: null,
      countdownTime: null,
      isLoading: false
    };

    this.startQuiz = this.startQuiz.bind(this);
    this.backToHome = this.backToHome.bind(this);
  }

  startQuiz() {
    const API = `${PATH_BASE + AMOUNT + 10 }`;
    this.setState({ isQuizStart: true, API, countdownTime: 20 });
  }

  backToHome() {
    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({
        isQuizStart: false,
        API: null,
        countdownTime: null,
        isLoading: false
      });
    }, 1000);
  }

  render() {
    const { isQuizStart, API, countdownTime, isLoading } = this.state;

    return (
      <Fragment>
        <Header />
        {!isLoading && !isQuizStart && <Main startQuiz={this.startQuiz} />}
        {!isLoading && isQuizStart && (
          <Quiz
            API={API}
            countdownTime={countdownTime}
            backToHome={this.backToHome}
          />
        )}
        {isLoading && <Loader />}
      </Fragment>
    );
  }
}

export default App;
