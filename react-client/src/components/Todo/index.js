import React from 'react';
import Input from '../Input';
import TodoItem from './TodoItem';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };

    this.addTask = task => this._addTask(task);
  }

  _addTask(task) {
    if (task.length > 0) {
      this.setState(prevState => {
        const tasks = prevState.tasks.slice();
        tasks.push(task);
        return {
          tasks
        };
      });
    }
  }

  render() {
    const { addTask } = this;
    return (
      <div className="todoHolder">
        <Input
          label="Task"
          name="todo"
          onBlur={addTask}
          handleEnter={addTask}
          resetOnBlur
          resetOnEnter
        />
        <ul className="todo-items">
          {(() => {
            return this.state.tasks.map((task, i) => (
              <TodoItem item={task} key={i} />
            ));
          })()}
        </ul>
      </div>
    );
  }
}

export default Todo;
