import { AppBar, Box, Modal, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleIcon from "@mui/icons-material/Google";
import { toast } from "react-toastify";
import { auth } from "../../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { styled } from "styled-components";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

const Account = ({open,setOpen}) => {
  //this gives user details from firebase if user is present i mean logged in
  let [user] = useAuthState(auth);

  let navigate = useNavigate();

  let [value, setValue] = useState(0);

  function handleModal() {
    //if user is present itll navigate to user page else this will open the modal
    if (user) {
    } else {
      setOpen(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function handleValue(e, v) {
    //onclicking this will give us a value 0 for logi and 1 for signup
    //based on that we will be settingup the value and navigating t signup and login
    setValue(v);
  }

  function handleLogout() {
    auth
      .signOut()
      .then((res) => {
        toast.success("Logged out");
      })
      .catch((err) => {
        toast.error("not able to logout");
      });

    navigate('/')
  }

  return (
    <AccountContainer>
      <div className="profile">
        {!user && <AccountCircleIcon onClick={handleModal} className="icon" />}
        {user && (
          <div className="userDiv">
            <Button
              text={"Dashboard"}
              onClickFunc={() => navigate("/dashboard")}
              outlined={false}
            />
            <div className="userName">
              <div className="mail">
                <AccountCircleIcon onClick={handleModal} className="icon" />
                <span className="user" onClick={handleModal}>
                  {user.email}
                </span>
              </div>
              <LogoutIcon onClick={handleLogout} className="icon" />
            </div>
          </div>
        )}
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: `1px solid var(--grey),`,
            minWidth: "30vw",
            background: `linear-gradient(35deg,var(--black),var(--black)`,
            backdropFilter: "blur(10px)",
            borderRadius: "20px",
            boxShadow: `0 8px 32px 0 var(--darkgrey)`,
            padding: "0.8rem 2rem",
          }}
        >
          <AppBar position="static" style={{ backgroundColor: "transparent" }}>
            <Tabs value={value} onChange={handleValue} variant="fullWidth">
              <Tab label="Login" style={{ color: "var(--blue)" }}></Tab>
              <Tab
                label="SignUp"
                style={{
                  color: "var(--blue)",
                }}
              ></Tab>
            </Tabs>
          </AppBar>
          {value === 0 && <Login handleClose={handleClose} />}
          {value === 1 && <SignUp handleClose={handleClose} />}

          <Box
            style={{
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                marginLeft: "9.5rem",
                alignSelf: "center",
                color: "var(--grey)",
              }}
            >
              or
            </span>
            <div
              style={{
                width: "85%",
                marginTop: "1rem",
                marginLeft: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
                minHeight: "3rem",
                cursor: "pointer",
              }}
            >
              <GoogleIcon />
              <span>Sign up with google</span>
            </div>
          </Box>
        </div>
      </Modal>
    </AccountContainer>
  );
};

export default Account;

let AccountContainer = styled.div`
  .profile {
    display: flex;
    padding-top: 0.5rem;
    .icon {
      font-size: 2.4rem;
      transition: 0.1s ease;
    }
    .icon:hover {
      color: var(--white);
      cursor: pointer;
      font-size: 2.35rem;
    }
    .userDiv {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      .userName {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        .mail{
          display: flex;
          align-items: center;
        }
        div:hover {
          color: var(--white);
          cursor: pointer;
        }
      }
    }
    .user {
      transition: 0.3s ease;
      margin-right: 1rem;
    }
  }
`;
