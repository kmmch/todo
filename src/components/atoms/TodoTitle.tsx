import { Text } from "@chakra-ui/react";

type Props = {
    width?: string;
    children: string;
};

export const TodoTitle = (props: Props) => {
    const { width, children } = props;

    return (
        <Text w={width}>
            {children}
        </Text>
    );
}