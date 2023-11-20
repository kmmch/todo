import { Stack } from "@chakra-ui/layout";
import {
    Button,
    FormControl,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
  } from "@chakra-ui/react";
import { memo, FC } from "react";


type Props = {
    isOpen : boolean;
    onClose: () => void;
}
export const InputTodoModal: FC<Props> = (props) => {
    const {isOpen, onClose} = props;
    return (
        <>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
                autoFocus={false}
                motionPreset="slideInBottom"
            >
                <ModalOverlay />
                <ModalContent mx={3} pb={2}>
                    <ModalHeader>新規登録</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody mx={4}>
                        <Stack>
                            <FormControl>
                                <Input placeholder="タスク名を入力"/>
                            </FormControl>
                        </Stack>
                    </ModalBody>
                    <ModalFooter>
                    <Button 
                        colorScheme='teal' 
                        variant='solid' 
                        mr={2}
                        // onClick={saveTodo}
                    >
                        Save
                    </Button>
                    <Button 
                        colorScheme='teal' 
                        variant='outline'
                        ml={2}
                        onClick={onClose}
                    >
                        Close
                    </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}