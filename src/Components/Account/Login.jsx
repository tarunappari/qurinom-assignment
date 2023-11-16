import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../FirebaseConfig";
import { toast } from "react-toastify";
import { styled } from "styled-components";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

const Login = ({ handleClose }) => { //we are getting handleclose func from account.js we are closing modal whnever user is logged
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let [email, setEmail] = useState();
  let [password, setPassword] = useState();

  function handleSubmit() {
    if (!email || !password) {
      toast.warn("All fields are mandatory");
      return;
    }

    //we are loggin in user through signwithEmailandPassword func
    // if promise fulfills then we are caling handleclose func to close modal
      signInWithEmailAndPassword(auth,email, password)
      .then((res) => {
        toast.success("Logged in succesfully");

        handleClose();
      })
      .catch((err) => {
        toast.error("Invalid Credentials");
      });
  }

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
        }}
      >
        <CssTextField
          id="custom-css-outlined-input"
          variant="standard"
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
          }}
          InputLabelProps={{
            style: { color: 'var(--white)'},
          }}
          inputProps={{
            style: { color: 'var(--white)' },
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "5rem",
            bottom: "17rem",
          }}
        >
          <EmailIcon />
        </div>
      </div>

      <div
        style={{
          width: "100%",
        }}
      >
        <CssTextField
          id="custom-css-outlined-input"
          variant="standard"
          type={showPassword ? "text" : "password"}
          label="Password"
          style={{
            width: "100%",
          }}
          onChange={(e) => setPassword(e.target.value)}
          InputLabelProps={{
            style: { color: 'var(--white)' },
          }}
          inputProps={{
            style: { color: 'var(--white)' },
          }}
        />
        <div
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          style={{
            position: "absolute",
            right: "5rem",
            bottom: "12rem",
          }}
        >
          {showPassword ? <VisibilityOff /> : <Visibility />}
        </div>
      </div>

      <Button
        variant="contained"
        size="medium"
        onClick={handleSubmit}
        style={{
          backgroundColor: 'var(--blue)',
          color: 'var(--white)',
          alignSelf: "flex-start",
          padding: "0.3rem 0.8rem",
          marginLeft: "0.5rem",
        }}
      >
        Login
      </Button>
    </Box>
  );
};

export default Login;

const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: `var(--white)`,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: `white`,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: `var(--white)`,
      },
      "&:hover fieldset": {
        borderColor: `var(--white)`,
      },
      "&.Mui-focused fieldset": {
        borderColor: `var(--white)`,
      },
    },
  });
  
