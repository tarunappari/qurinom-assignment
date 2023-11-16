import Header from "../Components/Header/Header";
import styled from "styled-components";
import Button from "../Components/Button";
import { motion } from "framer-motion";
import chairtodo from "../images/chairtodo.svg";
import sittodo from "../images/sittodo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../FirebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

const LandingPage = () => {
  let navigate = useNavigate();

  let [user] = useAuthState(auth);

  let [open, setOpen] = useState(false);
  let [login,setLogin] = useState()

  function handleModal() {
    //if user is present itll navigate to user page else this will open the modal
    if (user) {
      setLogin(false)
      navigate('/dashboard')
    } else {
      setOpen(true);
      setLogin(true)
    }
  }

  return (
    <div>
      <Header open={open} setOpen={setOpen} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6rem",
        }}
      >
        <MainContainer>
          <div className="left-container">
            <motion.h1
              initial={{ opacity: 0, y: +50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="first-h1"
            >
              Todo Trackr
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: +80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="sec-h1"
              style={{ color: "var(--blue)" }}
            >
              Track Your Tasks
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: +50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Now track your daily tasks with this TodoTrackr.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: +130 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="btn-div"
            >
              <Button
                text={login ? "Login" : "Get Started"}
                onClickFunc={handleModal}
                outlined={false}
              />
            </motion.div>
          </div>
          <div className="right-container">
            <motion.img
              initial={{ y: -23 }}
              animate={{ y: 23 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
              }}
              src={sittodo}
              alt="img"
              className="sitTodo"
            />
            <motion.img
              initial={{ y: 23 }}
              animate={{ y: -23 }}
              transition={{
                type: "smooth",
                repeatType: "mirror",
                duration: 2,
                repeat: Infinity,
              }}
              src={chairtodo}
              alt="img"
              className="chairTodo"
            />
          </div>
        </MainContainer>
      </div>
    </div>
  );
};

export default LandingPage;

let MainContainer = styled.div`
  display: flex;
  min-width: 100vw;
  justify-content: space-between;
  color: white;
  padding: 3rem;
  margin-top: 1rem;
  .left-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 {
      font-size: 5rem;
      font-weight: 900;
    }
    .sec-h1 {
      font-size: 4rem;
    }
    .btn-div {
      display: flex;
      gap: 2rem;
      margin-top: 1rem;
    }
    p {
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--grey);
    }
    .first-h1:hover {
      color: var(--black);
      -webkit-text-stroke-color: var(--white);
      -webkit-text-stroke-width: 3px;
      transition: 0.3s;
    }
  }

  .right-container {
    display: flex;
    gap: 4rem;
    .chairTodo {
      width: 14rem;
      position: relative;
      top: 4rem;
    }
    .sitTodo {
      width: 17rem;
      z-index: 2;
      position: relative;
      bottom: 4rem;
    }
  }
`;
