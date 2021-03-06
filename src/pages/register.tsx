import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { Wrapper } from "../components/Wrapper";
import { InputField } from "../components/InputField";

interface registerProps {}

const Register: React.FC<registerProps> = () => {
  // const router = useRouter();
  // const [register] = useRegisterMutation();
  return (
    <Wrapper variant="small">
      <Formik
        onSubmit={(e) => console.log(e)}
        initialValues={{ email: "", username: "", password: "" }}
        //   onSubmit={async (values, { setErrors }) => {
        //     const response = await register({
        //       variables: { options: values },
        //       update: (cache, { data }) => {
        //         cache.writeQuery<MeQuery>({
        //           query: MeDocument,
        //           data: {
        //             __typename: "Query",
        //             me: data?.register.user,
        //           },
        //         });
        //       },
        //     });
        //     if (response.data?.register.errors) {
        //       setErrors(toErrorMap(response.data.register.errors));
        //     } else if (response.data?.register.user) {
        //       // worked
        //       router.push("/");
        //     }
        //   }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="username"
              placeholder="username"
              label="Username"
            />
            <Box mt={4}>
              <InputField name="email" placeholder="email" label="Email" />
            </Box>
            <Box mt={4}>
              <InputField
                name="password"
                placeholder="password"
                label="Password"
                type="password"
              />
            </Box>
            <Button
              mt={4}
              type="submit"
              isLoading={isSubmitting}
              variantColor="teal"
            >
              register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default Register;
