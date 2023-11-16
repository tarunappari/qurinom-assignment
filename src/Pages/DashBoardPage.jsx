import styled from "styled-components";
import Header from "../Components/Header/Header";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { AppBar, Box, Modal, Button, TextField } from "@mui/material";
import Select from "react-select";
import Card from "../Components/Card";
import { toast } from "react-toastify";

const DashBoardPAge = () => {
  let [taskList, setTaskList] = useState([]);
  let [open, setOpen] = useState(false);
  let [title, setTitle] = useState();
  let [desc, setDesc] = useState();
  let [date, setDate] = useState();
  let [file, setFile] = useState();
  let [state, setState] = useState("pending");

  useEffect(() => {
    let list = JSON.parse(localStorage.getItem("taskList"));

    if (list) {
      setTaskList(list);
    }
  }, []);

  function handleModal() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function deleteTask(index) {
    let tempList = taskList
    tempList.splice(index, 1)
    localStorage.setItem("taskList", JSON.stringify(tempList))
    setTaskList(tempList)
    window.location.reload()
  }

  function updateListArray(index) {
  const updatedTaskList = taskList.map((task, i) => {
    if (i === index) {
      return {
        title,
        desc,
        date,
        file: file ? file.name : file,
        state,
      };
    }
    return task;
  });

  localStorage.setItem("taskList", JSON.stringify(updatedTaskList));
  setTaskList(updatedTaskList);
}


  function handleCreateTask() {
    if (!title || !desc) {
       toast.warn("Title and description were mandatory");
        return;
    } 

    let obj = {};
    obj["title"] = title;
    obj["desc"] = desc;
    obj["date"] = date;
    obj["file"] = file ? file.name : file;
    obj["state"] = state;

    let tempList = taskList;
    tempList.push(obj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    setDate("");
    setDesc("");
    setFile("");
    setState("pending");
    setTitle("");
    setOpen(false);
  }

  return (
    <div className="dashBoardPage">
      <Header />
      <DashContainer>
        <div className="todoBtn">
          <h1>Tasks</h1>
          <div className="AddBtn" onClick={handleModal}>
            <span className="createBtn">
              <AddIcon />
            </span>
            <span style={{ fontWeight: "500", cursor: "pointer" }}>
              Create Task
            </span>
          </div>
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
              border: `1px solid 'var(--white)',`,
              minWidth: "50vw",
              background: `linear-gradient(35deg,var(--black),var(--black))`,
              backdropFilter: "blur(30px)",
              borderRadius: "20px",
              boxShadow: `0 8px 70rem 9rem var(--black)`,
              padding: "0.8rem 2rem",
            }}
          >
            <AppBar
              position="static"
              style={{ backgroundColor: "transparent" }}
            >
              <Box
                p={3}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: "2rem",
                  width: "100%",
                  border: "2px solid var(--darkgrey)",
                  padding: "2.5rem",
                  borderRadius: "2rem",
                }}
              >
                <div>
                  <h2>Create Task</h2>
                </div>
                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <TextField
                    id="custom-css-outlined-input"
                    variant="standard"
                    type="text"
                    label="Task Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "var(--grey)" },
                    }}
                    inputProps={{
                      style: { color: "var(--white)" },
                    }}
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <TextField
                    id="custom-css-outlined-input"
                    variant="standard"
                    type="text"
                    label="Description"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    style={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "var(--grey)" },
                    }}
                    inputProps={{
                      style: { color: "var(--white)" },
                    }}
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <TextField
                    id="custom-css-outlined-input"
                    variant="standard"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "var(--grey)" },
                    }}
                    inputProps={{
                      style: { color: "var(--white)" },
                    }}
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <Select
                    onChange={(e) => setState(e.value)}
                    styles={{
                      menu: (styles) => ({
                        ...styles,
                        color: "var(--white)",
                        backgroundColor: "var(--grey)",
                      }),
                      option: (styles, { isFocused }) => ({
                        ...styles,
                        color: isFocused ? "var(--grey)" : "var(--black)",
                        backgroundColor: isFocused
                          ? "var(--black)"
                          : "var(--grey)",
                        borderRadius: "3px",
                      }),
                      valueContainer: (styles, { isFocused }) => ({
                        ...styles,
                        cursor: "pointer",
                      }),
                      singleValue: (styles) => ({
                        ...styles,
                        margin: "0",
                        padding: "0",
                        color: "var(--white)",
                      }),
                      control: (styles, { isFocused }) => ({
                        ...styles,
                        margin: "0",
                        padding: "0",
                        backgroundColor: "var(--black)",
                        border: isFocused ? "black" : "white",
                        outline: isFocused ? "black" : "white",
                      }),
                      dropdownIndicator: (styles) => ({
                        ...styles,
                        color: "var(--grey)",
                      }),
                    }}
                    options={[
                      { label: "Pending", value: "pending" },
                      { label: "Progress", value: "progress" },
                      { label: "Completed", value: "completed" },
                    ]}
                    menuPlacement="bottom"
                    defaultValue={{ label: "Pending", value: "pending" }}
                  />
                </div>

                <div
                  style={{
                    width: "100%",
                  }}
                >
                  <TextField
                    id="custom-css-outlined-input"
                    variant="standard"
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{
                      width: "100%",
                    }}
                    InputLabelProps={{
                      style: { color: "var(--grey)" },
                    }}
                    inputProps={{
                      style: { color: "var(--white)" },
                    }}
                  />
                </div>

                <Button
                  variant="contained"
                  size="medium"
                  style={{
                    backgroundColor: "var(--blue)",
                    color: "var(--white)",
                    alignSelf: "flex-start",
                    padding: "0.3rem 0.8rem",
                    marginLeft: "0.5rem",
                  }}
                  onClick={handleCreateTask}
                >
                  Create
                </Button>
              </Box>
            </AppBar>
          </div>
        </Modal>
        <div className="listContainer">
          <div className="pending taskContainer">
            <div className="container">
              <div className="h1Container">
                <h1>Pending</h1>
              </div>
              <div className="cardsContainer">
                {taskList.map((task,index)=>(
                  task.state === 'pending' &&
                    <Card
                    className={'pending'}
                      task={task}
                      index={index}
                      deleteTask={deleteTask}
                      title={title}
                      desc={desc}
                      date={date}
                      state={state}
                      file={file}
                      setTitle={setTitle}
                      setDesc={setDesc}
                      setDate={setDate}
                      setState={setState}
                      setFile={setFile}
                      updateListArray={updateListArray}
                    />
                ))}
              </div>
            </div>
          </div>
          <div className="inProgress taskContainer">
            <div className="container">
              <div className="h1Container">
                <h1 style={{ color: "orange" }}>In Progress</h1>
              </div>
              <div className="cardsContainer">
              {taskList.map((task,index)=>(
                  task.state === 'progress' &&
                    <Card
                    className={'progress'}
                      task={task}
                      index={index}
                      deleteTask={deleteTask}
                      title={title}
                      desc={desc}
                      date={date}
                      state={state}
                      file={file}
                      setTitle={setTitle}
                      setDesc={setDesc}
                      setDate={setDate}
                      setState={setState}
                      setFile={setFile}
                      updateListArray={updateListArray}
                    />
                  
                ))}
              </div>
            </div>
          </div>
          <div className="completed taskContainer">
            <div className="container">
              <div className="h1Container">
                <h1 style={{ color: "var(--green)" }}>Completed</h1>
              </div>
              <div className="cardsContainer">
              {taskList.map((task,index)=>(
                  task.state === 'completed' &&
                    <Card
                      className={'completed'}
                      task={task}
                      index={index}
                      deleteTask={deleteTask}
                      title={title}
                      desc={desc}
                      date={date}
                      state={state}
                      file={file}
                      setTitle={setTitle}
                      setDesc={setDesc}
                      setDate={setDate}
                      setState={setState}
                      setFile={setFile}
                      updateListArray={updateListArray}
                    />
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </DashContainer>
    </div>
  );
};

export default DashBoardPAge;

let DashContainer = styled.div`
  padding: 0.3rem 2rem;
  .todoBtn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    h1 {
      font-size: 3rem;
      position: relative;
      left: 3rem;
      color: var(--blue);
    }
    .AddBtn {
      display: flex;
      justify-content: center;
      padding: 0.5rem 1.2rem;
      border-radius: 0.7rem;
      background-color: var(--white);
      color: var(--black);
      align-items: center;
      cursor: pointer;
      .createBtn {
        position: relative;
        bottom: -0.15rem;
      }
    }
  }
  .listContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    ::-webkit-scrollbar {
      width: 0.2rem;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--grey);
      height: 0.3rem;
      padding: 2rem;
      border-radius: 10px;
    }
    .taskContainer {
      border: 2px solid gray;
      border-radius: 1rem;
      min-height: 60vh;
      .container {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
        justify-content: center;
        align-items: center;
      }
      .h1Container {
        background-color: var(--black);
        width: 100%;
        display: flex;
        justify-content: center;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        padding: 0.5rem;
        box-shadow: 0px 0.01rem 5px var(--grey);
      }
      .cardsContainer {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        width: 100%;
        padding: 0.8rem;
      }
    }
  }
`;
