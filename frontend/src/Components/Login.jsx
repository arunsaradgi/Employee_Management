import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login, signup } from "../Redux/Authentication/action";
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform signup or login logic here
    if (isSignup) {
      let creds = {
        email,
        first: firstName,
        last: lastName,
        password,
        salary,
      };
      // Handle signup
      console.log(creds);
      dispatch(signup(creds));
    } else {
      // Handle login
      let creds = {
        email,
        password,
      };
      dispatch(login(creds)).then(() => navigate("/dashboard"));

      console.log("Logging in with email:", email, "and password:", password);
    }

    // Reset form fields
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setSalary("");
  };

  const handleLoginClick = () => {
    setIsSignup(false);
  };
  const handleSignUpClick = () => {
    setIsSignup(true);
  };

  return (
    <Box maxWidth="md" mx="auto" mt={8} p={4}>
      <Card>
        <Box>
          <Stack spacing={4}>
            <Heading size="md" mb={4}>
              {isSignup ? "Signup" : "Login"}
            </Heading>

            <Stack align="center" w={"100%"} direction="row">
              <Button
                w={"50%"}
                colorScheme="teal"
                size="lg"
                onClick={handleLoginClick}
              >
                Login
              </Button>
              <Button
                w={"50%"}
                colorScheme="teal"
                size="lg"
                onClick={handleSignUpClick}
              >
                Signup
              </Button>
            </Stack>

            <form onSubmit={handleSubmit}>
              {isSignup && (
                <>
                  <FormControl isRequired>
                    <FormLabel>Email:</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>First Name:</FormLabel>
                    <Input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Last Name:</FormLabel>
                    <Input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Password:</FormLabel>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Salary:</FormLabel>
                    <Input
                      type="number"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
                    />
                  </FormControl>
                </>
              )}

              {!isSignup && (
                <>
                  <FormControl isRequired>
                    <FormLabel>Email:</FormLabel>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Password:</FormLabel>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormControl>
                </>
              )}

              <Button
                type="submit"
                mt={"30px"}
                colorScheme="blue"
                size="lg"
                onClick={handleSubmit}
              >
                {isSignup ? "Signup" : "Login"}
              </Button>
            </form>
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};
