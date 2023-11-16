import React from "react";
import { AppBar, Box, Modal, Button, TextField } from "@mui/material";
import Select from "react-select";

const UpdateTask = ({
  task,
  open,
  setOpen,
  title,
  desc,
  date,
  setTitle,
  setDesc,
  setDate,
  setState,
  setFile,
  handleUpdateTask
}) => {

  function handleClose(){
    setTitle('')
    setDate('')
    setState('pending')
    setDesc('')
    setOpen(false);
  }

  return (
    <div>
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
            minWidth: "50vw",
            background: `linear-gradient(35deg,var(--black),var(--black))`,
            backdropFilter: "blur(30px)",
            borderRadius: "20px",
            boxShadow: `0 8px 70rem 9rem var(--black)`,
            padding: "0.8rem 2rem",
          }}
        >
          <AppBar position="static" style={{ backgroundColor: "transparent" }}>
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
                <h2>Edit Task</h2>
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
                  defaultValue={{ label: task.state, value: task.state }}
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
                onClick={()=>{
                    handleUpdateTask()
                    handleClose()
                }}
              >
                Edit
              </Button>
            </Box>
          </AppBar>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateTask;
