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

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.setValue = this.setValue.bind(this);
  }

  setValue(name, value) {
    this.setState({ [name]: value });
  }

  render() {
    
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
                  <Grid.Column>
                    <Segment>
                      <h2>Quiz</h2>
                      <p>This is a quiz</p>
                      <Button
                      primary
                      content="Start Quiz"
                      onClick={() => this.props.startQuiz()}
                      size="small"
                      icon="play"
                      labelPosition="left"
                    />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <h2>Quiz</h2>
                      <p>This is a quiz</p>
                      <Button
                      primary
                      content="Start Quiz"
                      onClick={() => this.props.startQuiz()}
                      size="small"
                      icon="play"
                      labelPosition="left"
                    />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <h2>Quiz</h2>
                      <p>This is a quiz</p>
                      <Button
                      primary
                      content="Start Quiz"
                      onClick={() => this.props.startQuiz()}
                      size="small"
                      icon="play"
                      labelPosition="left"
                    />
                    </Segment>
                  </Grid.Column>
                  <Grid.Column>
                    <Segment>
                      <h2>Quiz</h2>
                      <p>This is a quiz</p>
                      <Button
                      primary
                      content="Start Quiz"
                      onClick={() => this.props.startQuiz()}
                      size="small"
                      icon="play"
                      labelPosition="left"
                    />
                    </Segment>
                  </Grid.Column>
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
