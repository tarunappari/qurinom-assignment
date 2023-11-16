import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { auth } from "../../FirebaseConfig";
import { styled } from "styled-components";
import EmailIcon from "@mui/icons-material/Email";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = ({ handleClose }) => { //we are getting handleclose func from account.js we are closing modal whnever user created acc
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmPassword, setConfirmPassword] = useState();

  function handleSubmit() {
    if (!email || !password || !confirmPassword) {
      toast.warn("All fields are mandatory");
      return;
    }

    if (password.length < 8) {
      toast.warn("Password should atleast contain 8 characters");
      return;
    }

    if (password !== confirmPassword) {
      toast.warn("Passwords didnt match");
      return;
    }

    //we are creating user in firestore with this func
      createUserWithEmailAndPassword(auth,email, password)
      .then((res) => {
        toast.success("Account created");

        handleClose();
      })
      .catch((err) => {
        toast.error("Not able to create account");
      });
  }

  return (
    <SignUpDiv>
      <Box
        p={3}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: "1.2rem",
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
            className="textField"
            InputLabelProps={{
              style: { color: 'var(--white)' },
            }}
            inputProps={{
              style: { color: 'var(--white)' },
            }}
          />
          <div
            style={{
              position: "absolute",
              right: "5rem",
              bottom: "20rem",
            }}
          >
            <EmailIcon />
          </div>
        </div>

        <CssTextField
          id="custom-css-outlined-input"
          variant="standard"
          type="password"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="textField"
          InputLabelProps={{
            style: { color: 'var(--white)' },
          }}
          inputProps={{
            style: { color: 'var(--white)' },
          }}
        />

        <CssTextField
          id="custom-css-outlined-input"
          variant="standard"
          type="text"
          label="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="textField"
          InputLabelProps={{
            style: { color: 'var(--white)' },
          }}
          inputProps={{
            style: { color: 'var(--white)' },
          }}
        />

        <Button
          variant="contained"
          size="small"
          onClick={handleSubmit}
          style={{
            backgroundColor: 'var(--blue)',
            color: 'var(--white)',
            alignSelf: "flex-start",
            padding: "0.3rem 0.8rem",
            marginLeft: "0.5rem",
          }}
        >
          SignUp
        </Button>
      </Box>
    </SignUpDiv>
  );
};

export default SignUp;

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

let SignUpDiv = styled.div`
  width: 100%;

  .textField {
    width: 100%;
  }
`;
