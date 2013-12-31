import { Layout, Form, Button, DynamicField as LoginField, LoginContainer } from "components";
import { UI_TEXT, UI_VALIDATION } from "constants";
import { auth, logInWithEmailAndPassword } from "firebaseConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "utils";
import { useAuthState } from "react-firebase-hooks/auth";

const loginData = [
  {
    id: 1,
    name: "email",
    label: "Email",
    placeholder: "healthcare@gmail.com",
    componentType: "Input",
    type: "Text",
    rules: [{ required: true, type: "email" }],
  },
  {
    id: 2,
    name: "password",
    label: "Password",
    placeholder: "*******",
    componentType: "Input",
    type: "Password",
    rules: [{ required: true }],
  },
];

const Login = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard/patient-request");
  }, [user, loading, navigate]);

  const onLogin = ({ email, password }) => {
    logInWithEmailAndPassword(email, password);
  };
  return (
    <Layout className="h-screen w-screen items-center justify-center">
      <LoginContainer>
        <Form
          hideRequiredMark
          name="loginForm"
          initialValues={{
            remember: false,
          }}
          layout="vertical"
          autoComplete="off"
          validateMessages={UI_VALIDATION}
          onFinish={onLogin}
          onFinishFailed={() => {
            // TODO: can check failure if needed
          }}
        >
          <LoginField inputsData={loginData} span={24} xs={24} sm={24} lg={24} />
          <Button
            // isLoading={isLoading}
            text={UI_TEXT.CTA.LOGIN}
            additionalProps={{ htmlType: "submit", className: "w-full" }}
          />
        </Form>
      </LoginContainer>
    </Layout>
  );
};

export default Login;
