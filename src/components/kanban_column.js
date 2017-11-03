import React, { Component } from 'react';
import { Collection, CollectionItem, Icon } from 'react-materialize';

class KanbanColumn extends Component {

  constructor(props) {
    super(props)

    this.state = {
      tasks: ['task 1', 'task 2', 'task 3']
    }
  }


  addCard(evt) {
    let ask = prompt('Enter a new card')
    let newTaskList = this.state.tasks.slice()
    console.log(`new task`, newTaskList)
    newTaskList.push(ask)
    this.setState({
      tasks: newTaskList
    })

  }

  moveTask(evt) {

  }

  render() {
    const tasks = this.state.tasks
    const taskList = tasks.map(task => {
      return (
        <div key={tasks.indexOf(task)}>
          <Icon className='left-task-icon'>keyboard_arrow_left</Icon>
          <span className='task-text'>{task}</span>
          <Icon className='right-task-icon' onClick={this.moveTask('right')}>keyboard_arrow_right</Icon>
          <hr />
        </div>
      )
    })

    return (
      <div className='individual-column'>
        <Collection>
          <CollectionItem className='column-name'>{this.props.name}</CollectionItem>
          <CollectionItem
            className='task-line center'>
            {taskList}
            <button onClick={evt => this.addCard(evt)}>Add a new card</button>
          </CollectionItem>

        </Collection>
      </div>
    );
  }
}

export default KanbanColumn;
