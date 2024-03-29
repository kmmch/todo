import { Flex } from "@chakra-ui/react";

import { TodoButton } from "../atoms/TodoButton";
import { TodoTextField } from "../atoms/TodoTextField";

type Props = {
    todoText: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    disabled: boolean;
};
  
export const InputTodo = (props: Props) => {
    const { todoText, onChange, onClick, disabled } = props;
  
    return (
        <Flex align='center'>
            <TodoTextField 
                disabled={disabled}
                placeholder="TODOを入力"
                value={todoText}
                width={'80%'}
                onChange={onChange}
            />
            <TodoButton
                disabled={disabled} 
                width={'20%'}
                onClick={onClick}
            >追加</TodoButton>
        </Flex>
    );
};