import { FC } from "react";
import { Box, UnorderedList, ListItem, Checkbox, Text, Button, HStack, Center } from "@chakra-ui/react";

type Props = {
    todos: [];
    onClickDelete: (index:number) => void;
}
export const IncompleteTodos:FC<Props> = (props) => {

    const {todos, onClickDelete} = props;

    return (
        <>
            <Box 
                mx={5}
                my={10}
                p={5}
                borderRadius={10}
                bg="teal.50"
            >
                { todos.length > 0 ?
                <UnorderedList styleType="none">
                    {todos.map((todo, index) => {
                        return (
                            <ListItem key={index} my={3}>
                                <HStack spacing={5} direction='row'>
                                    <Checkbox
                                        colorScheme='green'
                                    >
                                        { todo }
                                    </Checkbox>
                                    <Button 
                                        colorScheme='teal' 
                                        variant='solid' 
                                        borderRadius={50}
                                        size='xs'
                                        onClick={(e) => onClickDelete(index)}
                                    >
                                        ×
                                    </Button>
                                </HStack>
                            </ListItem>
                        );
                    })}
                </UnorderedList>
                :<Center>
                    <Text>Todoは登録されていません。</Text>
                </Center>
                }
            </Box>            
        </>
    );
}