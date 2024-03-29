import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { TodoButton } from "../atoms/TodoButton";
import { TodoListHeding } from "../atoms/TodoListHeading";
import { TodoTitle } from "../atoms/TodoTitle";

type Props = {
    todos: Array<string>;
    onClickComplete: (index: number) => void;
    onClickDelete: (index: number) => void;
};
  
export const IncompleteTodos = (props: Props) => {
    const { todos, onClickComplete, onClickDelete } = props;
  
    return (
        <>
            <TodoListHeding>未完了</TodoListHeding>
            <UnorderedList ml={5}>
            {todos.map((todo, index) => (
                <ListItem key={index} mb={2}>
                    <Flex align='center'>
                        <TodoTitle width={'70%'}>{todo}</TodoTitle>
                        <TodoButton onClick={() => onClickComplete(index)}>完了</TodoButton>
                        <TodoButton onClick={() => onClickDelete(index)}>削除</TodoButton>
                    </Flex>
                </ListItem>
            ))}
            </UnorderedList>
        </>
    );
};