import { Heading } from "@chakra-ui/react";

type Props = {
    children: string;
};

export const TodoListHeding = (props: Props) => {
    const { children } = props;
    return (
        <Heading 
            as='h2'
            fontSize={28}
            fontWeight={700}
            textAlign={'center'}
            mb={3}
        >
            { children }
        </Heading>
    );
}