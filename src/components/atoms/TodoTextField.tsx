import { Input } from "@chakra-ui/react";

type Props = {
    disabled: boolean;
    placeholder: string;
    value: string;
    width?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TodoTextField = (props: Props) => {
    const { disabled, placeholder, value, width, onChange } = props;
    return (
        <>
            { disabled ? (
                <Input
                    disabled
                    placeholder={placeholder}
                    value={value}
                    w={width}
                    onChange={onChange}
                    backgroundColor={'gray.50'}
                />
            ) : (
                <Input
                    placeholder={placeholder}
                    value={value}
                    w={width}
                    onChange={onChange}
                    backgroundColor={'gray.50'}
                />
            )}
        </>
    );
}

