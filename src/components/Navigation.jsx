import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="teal.500" p={4}>
      <Flex justify="space-between">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/about" color="white" fontWeight="bold">
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
