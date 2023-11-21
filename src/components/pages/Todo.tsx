import { memo, FC,useState,ChangeEvent } from "react";
import { Container, useDisclosure } from "@chakra-ui/react";

import { InputTodoModal } from "./../organisms/todo/InputTodoModal";
import { IncompleteTodos } from "./../organisms/todo/IncompleteTodo";

export const Todo: FC = memo(() => {

    // モーダルに入力されたタスク名
    const [inputText, setInputText] = useState<string>("");

    // モーダルが空で登録されようとした時のエラーメッセージ
    const [isTextBlank, setIsTextBlank] = useState<boolean>(false);

    // 未完了のTODO
    const [incompleteTodos, setIncompleteTodos] = useState<[]>([]);

    // 完了のTODO
    // const [completeTodos, setCompleteTodos] = useState([]);

    // 入力欄に入力された値をstateに反映する
    const onChangeTodoText = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
        setIsTextBlank(false);
    }

    const saveTodo = () => {
        if (!inputText) {
            // エラーメッセージを登録する
            setIsTextBlank(true);
            return;
        }

        // 未完了のTODOを取得する
        const newTodos:any  = [...incompleteTodos, inputText];

        // 追加後の未完了TODOを更新
        setIncompleteTodos(newTodos);

        // 入力欄を空にする
        setInputText('');

        onClose();
    }

    // 削除ボタン押された時の処理
    const onClickDelete = (index: number) => {


        // 未完了のTODOを取得する
        const newTodos:any = [...incompleteTodos];

        // indexのtodoを削除する
        // index番目から1つ削除する
        newTodos.splice(index, 1);

        // 削除後の未完了TODOを更新
        setIncompleteTodos(newTodos);


    }

    // 完了ボタン押された時の処理
    /*
    const onClickComplete = (index: number) => {

        // 未完了のTODOを取得する
        const newIncompleteTodos:any = [...incompleteTodos];

        // 未完了のTODOからタスクを削除する
        newIncompleteTodos.splice(index,1);
        setIncompleteTodos(newIncompleteTodos);

        // 完了のTODOを取得する
        // const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        // 完了のTODOにタスクを追加する
        // setCompleteTodos(newCompleteTodos);

    }
    */

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Container maxW='md'>
                <IncompleteTodos 
                    todos={incompleteTodos}
                    onClickDelete={onClickDelete} />
                <InputTodoModal 
                    onOpen={onOpen}
                    onClose={onClose}
                    onChange={onChangeTodoText}
                    onClick={saveTodo}
                    inputText={inputText}
                    isOpen={isOpen}
                    isTextBlank={isTextBlank}
                />
            </Container>
        </>
    );
});