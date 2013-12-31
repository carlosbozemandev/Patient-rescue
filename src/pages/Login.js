import { Layout, Form, Button, DynamicField as LoginField, LoginContainer } from "components";
import { UI_TEXT, ROUTES, UI_VALIDATION } from "constants";
import { useSessionStorage } from "hooks";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogin } from "redux/actions";
import { clearUserNotification } from "redux/reducers";
import { toast } from "utils";

const loginData = [
  {
    id: 1,
    name: "username",
    label: "Email",
    placeholder: "abc@baitussalam.com",
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  const dispatch = useDispatch();
  const {
    isLoading,
    userData: { access_token: accessToken },
    errorMessage,
  } = useSelector((state) => state.user);
  const { setItem } = useSessionStorage();

  const onCloseToast = () => {
    dispatch(clearUserNotification());
  };
  useEffect(() => {
    if (accessToken) {
      setItem("access_token", accessToken);
      navigate(ROUTES.DASHBOARD);
    }
  }, [accessToken]);

  useEffect(() => {
    if (errorMessage) {
      toast({ type: "error", description: errorMessage, title: "Login", onClose: onCloseToast() });
    }
  }, [errorMessage]);

  const onLogin = (loginCredentials) => {
    dispatch(userLogin(loginCredentials));
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
            isLoading={isLoading}
            text={UI_TEXT.CTA.LOGIN}
            additionalProps={{ htmlType: "submit", className: "w-full" }}
          />
        </Form>
      </LoginContainer>
    </Layout>
  );
};

export default Login;
