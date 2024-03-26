import { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import "./styles.css";
import { InputTodo } from "./components/organisms/InputTodo";
import { IncompleteTodos } from "./components/organisms/IncompleteTodos";
import { CompleteTodos } from "./components/organisms/CompleteTodos";

const Todo = () => {
    // 入力されるTODO
    const [todoText, setTodoText] = useState<string>("");

    // 未完了のTODO
    const [incompleteTodos, setIncompleteTodos] = useState<Array<string>>([]);

    // 完了したTODO
    const [completeTodos, setCompleteTodos] = useState<Array<string>>([]);

    // 入力欄が更新されたときに発火する関数
    const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoText(event.target.value);
    };

    // 追加が押下されたときに発火する関数
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos: Array<string> = [...incompleteTodos, todoText];
        setIncompleteTodos(newTodos);
        setTodoText("");
    };

    // 削除が押下されたときに発火する関数
    const onClickDelete = (index: number) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1); // newTodosのindex番目から1つ削除する
        setIncompleteTodos(newTodos);
    };

    // 完了が押下されたときに発火する関数
    const onClickComplete = (index: number) => {
        // 新・未完了TODOからindex番目を削除する
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);

        // 新・完了TODOに追加
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        setIncompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    // 戻すが押下されたときに発火する関数
    const onClickBack = (index: number) => {
        // クリックされたTODOを完了から削除する
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);

        // クリックされたTODOを未完了に追加する
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

        // Stateを更新する
        setCompleteTodos(newCompleteTodos);
        setIncompleteTodos(newIncompleteTodos);
    };

    const isMaxLimitIncompleteTodos: boolean = incompleteTodos.length >= 5;

    return (
        <>
            {/* 入力エリア */}
            <InputTodo
                todoText={todoText}
                onChange={onChangeTodoText}
                onClick={onClickAdd}
                disabled={isMaxLimitIncompleteTodos}
            />

            {/* TODOの上限に応じてメッセージを表示する */}
            {isMaxLimitIncompleteTodos && (
                <p style={{ color: "red", margin: "15px" }}>
                    登録できるTODOは5個までです。
                    <br />
                    タスクを消化してください。
                </p>
            )}

            {/* 未完了エリア */}
            {/* onClickに直接関数を指定するとレンダリングのたびに実行される */}
            {/* ->なのでonClickには()=>onClickDeleteで渡している */}
            <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />

            {/* 完了エリア */}
            <CompleteTodos todos={completeTodos} onClick={onClickBack} />

            <Stack spacing={2} direction="row">
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
        </>
    );
};

export default Todo;