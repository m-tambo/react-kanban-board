import React, { Component } from 'react';
import KanbanColumn from './kanban_column.js';


class KanbanBoard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      columnData: [
        { id: 1, name: 'Winnie', color: 'pink' },
        { id: 2, name: 'Bob', color: 'purple' },
        { id: 3, name: 'Thomas', color: 'orange' },
        { id: 4, name: 'George', color: 'green' }
      ]
    }
  }

  render() {
    const columnList = this.state.columnData.map((column) => {
      return (
        <KanbanColumn
          key={column.id}
          name={column.name}
          tabColor={column.color}
          />
      )
    })

    return (
      <div className='column-container'>
        {columnList}
      </div>
    );
  }
}

export default KanbanBoard;
