
export default class NoteTodos extends React.Component {

    handleClick = () => {
        this.props.openModal(this.props.note);
    }

    onToggleTodo = (todo) => {
        this.props.toggleTodo(this.props.note,todo);
    }

    onSetDateFormat = (todoTime) => {
        if (Date.now() - todoTime <= 60000) return 'minute ago';
        if (Date.now() - todoTime <= 3600000) return 'hour ago';
        if (Date.now() - todoTime <= 86400000) return new Date(todoTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        else return new Date(todoTime).toLocaleDateString('en-US');
    }

    render() {
        const { props } = this;
        return <div onClick={this.handleClick}>
            <div className="preview-title" data-text="Title">{props.note.info.title}</div>
            <ul className="todos-container">
                {props.note.info.todos.map((todo, i) =>
                    <li key={i}>
                        <input className="todo-checkbox" type="checkbox" checked={todo.isDone} onChange={() => this.onToggleTodo(todo)}></input>
                        <span className={todo.isDone ? 'todo-done' : ''}>{todo.txt ? todo.txt : "Todo"}</span>
                        <span> - {this.onSetDateFormat(todo.doneAt)}</span>
                    </li>)}
            </ul>
        </div>
    }
}