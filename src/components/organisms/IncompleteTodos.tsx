const style = {
  border: "2px solid #aacfd0",
  maxWidth: "400px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
};

type Props = {
  todos: Array<string>;
  onClickComplete: (index: number) => void;
  onClickDelete: (index: number) => void;
};

export const IncompleteTodos = (props: Props) => {
  const { todos, onClickComplete, onClickDelete } = props;

  return (
    <div style={style}>
      <p className="title">未完了</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
