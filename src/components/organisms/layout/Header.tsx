/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Heading } from "@chakra-ui/react";
import { memo, FC } from "react";

export const Header: FC = memo(() => {

    return (
        <>
            <Flex
                as="nav"
                bg="teal.500"
                color="gray.50"
                align="center"
                justify="center"
                padding={{ base: 3, md: 5 }}
            >
                <Heading as="h1" textAlign="center" fontSize={{ base: "md", md: "lg" }}>
                    Todo List
                </Heading>
            </Flex>
        </>
    );
});