import { ListItem, UnorderedList, Flex } from "@chakra-ui/react";
import { TodoButton } from "../atoms/TodoButton";
import { TodoListHeding } from "../atoms/TodoListHeading";
import { TodoTitle } from "../atoms/TodoTitle";

type Props = {
    todos: Array<string>;
    onClick: (index: number) => void;
};
  
export const CompleteTodos = (props: Props) => {
    const { todos, onClick } = props;
    
    return (
        <>
            <TodoListHeding>完了</TodoListHeding>
            <UnorderedList ml={5}>
            {todos.map((todo: string, index: number) => (
                <ListItem key={index} mb={2}>
                    <Flex align='center'>
                        <TodoTitle width={'65%'}>{todo}</TodoTitle>
                        <TodoButton onClick={() => onClick(index)}>戻す</TodoButton>
                    </Flex>
                </ListItem>
            ))};
            </UnorderedList>
        </>
    );
}; 