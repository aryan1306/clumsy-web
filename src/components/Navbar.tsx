import React from "react";
import { Box, Button, Flex, Heading, Link } from "@chakra-ui/react";
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import NextLink from "next/link";

const Navbar: React.FC = ({}): JSX.Element => {
  const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery();
  let body = null;
  //if data is loading
  if (fetching) {
    //user is not logged in
  } else if (!data?.me) {
    body = (
      <>
        <NextLink href="/login">
          <Link mr={3} color="white">
            Login
          </Link>
        </NextLink>
        <NextLink href="/register">
          <Link color="white">Register</Link>
        </NextLink>
      </>
    );
    //user is logged in
  } else {
    body = (
      <Flex>
        <Box color="white">{data.me.username}</Box>
        <Button
          ml={3}
          onClick={() => {
            logout();
          }}
          isLoading={logoutFetching}
          color="white"
          variant="link"
        >
          Logout
        </Button>
      </Flex>
    );
  }
  return (
    <Flex bg="tomato" p={4} mb={2}>
      <Heading color="white">Clumsy</Heading>
      <Box ml={"auto"}>{body}</Box>
    </Flex>
  );
};
export default Navbar;
