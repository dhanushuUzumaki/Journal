import React from 'react';
import Input from '../Input';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.onBlur = task => this._onBlur(task);
  }

  _onBlur(task) {
    this.setState(prevState => {
      const tasks = prevState.tasks.slice();
      tasks.push(task);
      console.log(task);
      return {
        tasks
      };
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="todoHolder">
        <Input label="Task" name="todo" onBlur={this.onBlur} />
        <ul>
          {(() => {
            this.state.tasks.map(task => <li>{task}</li>);
          })()}
        </ul>
      </div>
    );
  }
}

export default Todo;
