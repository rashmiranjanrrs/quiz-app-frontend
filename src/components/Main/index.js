import React, { Component } from 'react';
import {
  Container,
  Segment,
  Item,
  Dropdown,
  Divider,
  Button,
  Grid
} from 'semantic-ui-react';

import { GET_QUIZZES } from '../../api';
import Swal from 'sweetalert2';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quizzes: [],
    };

    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {

    fetch(GET_QUIZZES)
      .then(respone => respone.json())
      .then(result => setTimeout(() => this.setData(result), 1000))
      .catch(error => setTimeout(() => this.resolveError(error), 1000));
  }

  resolveError(error) {
    if (!navigator.onLine) {
      this.setState({ isOffline: true });
      console.log('Connection problem');
    } else {
      this.setState({ isOffline: true });
      console.log('API problem ==> ', error);
    }
  }

  setValue(name, value) {
    this.setState({ [name]: value });
  }

  setData(results) {
    if (results.length === 0) {
      const message =
        "The API doesn't have enough questions for your query<br />" +
        '(ex. Asking for 50 questions in a category that only has 20).' +
        '<br /><br />Please change number of questions, difficulty level ' +
        'or type of questions.';

      return Swal.fire({
        title: 'Oops...',
        html: message,
        type: 'error',
        timer: 10000,
        onClose: () => {
          this.props.backToHome();
        }
      });
    }
    const quizzes = results;
    this.setState({ quizzes });
  }

  

  render() {
    const {
      quizzes,
    } = this.state;
    return (
      <Container>
        <Segment>
          <Item.Group divided>
            <Item>
             
              <Item.Content>
                <Item.Header>
                  <h1>Quizzes</h1>
                </Item.Header>
                <br />
                <Divider />
                <Grid stackable columns={2}>
                  {quizzes.map((quiz, i) => {
                   
                    return (
                  <Grid.Column key={i}>
                    <Segment>
                      <h2>{quiz.title}</h2>
                      <p>{quiz.number_of_questions} Questions</p>
                      <Button
                      primary
                      content="Start Quiz"
                      onClick={() => this.props.startQuiz(quiz.id,quiz.fetch_question_online)}
                      size="small"
                      icon="play"
                      labelPosition="left"
                    />
                    </Segment>
                  </Grid.Column>
                    );
                  })}
                </Grid>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <br />
      </Container>
    );
  }
}

export default Main;
