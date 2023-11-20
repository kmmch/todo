import { FC, ChangeEvent } from "react";
import { Stack, Box } from "@chakra-ui/layout";
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


type Props = {
    onOpen : () => void;
    onClose: () => void;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    inputText: string;
    isOpen : boolean;
    isTextBlank : boolean;
}
export const InputTodoModal: FC<Props> = (props) => {
    const {onOpen, onClose, onChange, onClick, inputText, isOpen, isTextBlank} = props;

    return (
        <>
            <Box mx={3} textAlign="end">
                <Button 
                    colorScheme='teal' 
                    variant='solid' 
                    borderRadius={50}
                    onClick={onOpen}
                >+</Button>
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
                                    <Input 
                                        placeholder="タスク名を入力"
                                        onChange={onChange}
                                        value={inputText}
                                    />
                                    { isTextBlank && 
                                    <p style={{ color: 'red', margin: '5px 15px'}}>タスク名を入力してください</p>}
                                </FormControl>
                            </Stack>
                        </ModalBody>
                        <ModalFooter>
                        <Button 
                            colorScheme='teal' 
                            variant='solid' 
                            mr={2}
                            onClick={onClick}
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
            </Box>
        </>
    );
}