import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import { useDisclosure } from "@chakra-ui/react";
import { memo, FC } from "react";
import { InputTodoModal } from "../Todo/InputTodoModal";

export const Footer: FC = memo(() => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
        <Box m={3} textAlign="end">
            <Button 
                colorScheme='teal' 
                variant='solid' 
                borderRadius={50}
                onClick={onOpen}
            >+</Button>
            <InputTodoModal 
                isOpen={isOpen}
                onClose={onClose}
            />
        </Box>
        </>
    );
});