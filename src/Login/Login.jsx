import {
  Anchor,
  Button,
  Checkbox,
  Group,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Paper,
  Select,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";

export default function Login({ setIsLogin, setUserType }) {
  const [type, toggle] = useToggle(["login", "register"]);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      name: "",
      terms: false,
      role: "Supplier",
    },

    validate: {
      //   email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
    },
  });

  const handleFormSubmit = (values) => {
    console.log("Simulating login with values:", values);
    setUserType(values.role);

    setIsLogin(false);
  };

  return (
    <Flex h="100vh" w="100vw" align="center" justify="center">
      <Paper radius="md" p="xl" withBorder shadow="sm" w={400}>
        <Text size="xl" fw={500} mb="lg">
          Welcome to KhichdiTech
        </Text>

        <form onSubmit={form.onSubmit(handleFormSubmit)}>
          <Stack>
            {type === "register" && (
              <TextInput
                label="Name"
                placeholder="Your name"
                {...form.getInputProps("name")}
                radius="md"
              />
            )}

            <TextInput
              required
              label="Email"
              placeholder="hello@mantine.dev"
              {...form.getInputProps("email")}
              radius="md"
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              {...form.getInputProps("password")}
              radius="md"
            />

            {/* Dropdown to select the mock role */}
            <Select
              label="Select Role"
              placeholder="Pick a role"
              data={["Supplier", "Producer", "Processor", "Distributor"]}
              {...form.getInputProps("role")}
              radius="md"
            />

            {type === "register" && (
              <Checkbox
                label="I accept terms and conditions"
                {...form.getInputProps("terms", { type: "checkbox" })}
              />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>

            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </Flex>
  );
}
