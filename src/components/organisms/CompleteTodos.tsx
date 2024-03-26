const style = {
  border: "2px solid #aacfd0",
  maxWidth: "400px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#c9dede",
};

type Props = {
  todos: Array<string>;
  onClick: (index: number) => void;
};

export const CompleteTodos = (props: Props) => {
  const { todos, onClick } = props;
  return (
    <div style={style}>
      <p className="title">完了</p>
      <ul>
        {todos.map((todo: string, index: number) => (
          <li key={index}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClick(index)}>戻す</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
