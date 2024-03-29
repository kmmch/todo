import { Button } from "@chakra-ui/react";

type Props = {
    disabled?: boolean;
    width?: string;
    onClick: () => void;
    children: string;
};

export const TodoButton = (props: Props) => {
    const { disabled=false, width, onClick, children } = props;
    const ml = 2;

    return (
        <>
            { disabled ? (
                <Button
                    isDisabled
                    w={width}
                    onClick={onClick}
                    ml={ml}
                >{ children }</Button>
            ):(
                <Button
                    w={width}    
                    onClick={onClick}
                    ml={ml}
                >{ children }</Button>
            )}
        </>
    );
}