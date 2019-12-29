
export default class NoteTextModal extends React.Component {

    handleCloseModal = () => {
        this.props.onCloseModal()
    }

    onTxtChange = (editedTxt, contentType) => {
        this.props.editTxtNote(editedTxt, contentType);
    }

    onTodoTxtChange = (editedTxt, todo) => {
        this.props.editTodoTxtNote(editedTxt, todo);
    }

    onToggleTodo = (todo) => {
        this.props.toggleTodo(todo);
    }

    onSetDateFormat = (todoTime) => {
        if (Date.now() - todoTime <= 60000) return 'minute ago';
        if (Date.now() - todoTime <= 3600000) return 'hour ago';
        if (Date.now() - todoTime <= 86400000) return new Date(todoTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        else return new Date(todoTime).toLocaleDateString('en-US');
    }

    onAddTodo = () => {
        this.props.onAddTodo()
    }

    render() {
        const { props } = this;
        return <div className="modal" onClick={this.handleCloseModal}>
            <div className={`inner-container ${props.note.style.backgroundColor}`} onClick={(ev) => ev.stopPropagation()}>
                <span className="close-Modal" onClick={this.handleCloseModal}><i className="fas fa-window-close"></i></span>
                <div className="modal-title" data-text="Title" suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTxtChange(e.target.textContent, 'title')}>{props.note.info.title}</div>
                <ul>
                    {props.note.info.todos.map((todo, i) =>
                        <li key={i}>
                            <input className="todo-checkbox" type="checkbox" checked={todo.isDone} onChange={() => this.onToggleTodo(todo)}></input>
                            <span data-text="Todo" className={todo.isDone ? 'todo-done todo-modal-txt' : 'todo-modal-txt'} suppressContentEditableWarning={true} contentEditable="true" onBlur={(e) => this.onTodoTxtChange(e.target.textContent, todo)}>
                                {todo.txt}
                            </span>
                            <span> - {this.onSetDateFormat(todo.doneAt)}</span>
                        </li>)}
                </ul>
                <div className="add-todo-btn-container">
                <button className="add-todo-btn" onClick={this.onAddTodo}>Add todo</button>
                </div>
            </div>
        </div>
    }
}
