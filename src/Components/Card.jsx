import React, { useState } from "react";
import styled from "styled-components";
import UpdateTask from "./UpdateTask";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";
import UploadFileIcon from "@mui/icons-material/UploadFile";

const Card = ({
  className,
  task,
  index,
  deleteTask,
  title,
  desc,
  date,
  setTitle,
  setDesc,
  setDate,
  setState,
  setFile,
  updateListArray,
}) => {
  let [open, setOpen] = useState(false);

  function handleUpdateTask() {
    updateListArray(index);
  }

  function handleOpen() {
    setTitle(task.title);
    setDesc(task.desc);
    setDate(task.date);
    setState(task.state);
    setOpen(true);
  }

  return (
    <CardContainer>
      <div className={className}>
      <div className="line"></div>
        <div className="title">{task.title}</div>
        <div className="desc">{task.desc}</div>
        <div className="date">{task.date}</div>
        <div className="buttonsDiv">
          <div className="btns" style={{ color: "var(--grey)" }}>
            <div>
              <UploadFileIcon />
            </div>
            <div>{task.file} </div>
          </div>
          <div className="btns">
            <div className="editBtn" onClick={handleOpen}>
              <span>
                <EditNoteIcon className="icons " />
              </span>
            </div>
            <div className="deleteBtn" onClick={() => deleteTask(index)}>
              <span>
                <DeleteIcon className="icons" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <UpdateTask
        task={task}
        open={open}
        setOpen={setOpen}
        title={title}
        desc={desc}
        date={date}
        setTitle={setTitle}
        setDesc={setDesc}
        setDate={setDate}
        setState={setState}
        setFile={setFile}
        handleUpdateTask={handleUpdateTask}
      />
    </CardContainer>
  );
};

export default Card;

let CardContainer = styled.div`
  .line{
    width: 100%;
    height: 0.2rem;
    position: absolute;
    top: 0;
    left: 0;
  }
  .pending,
  .progress,
  .completed {
    display: flex;
    flex-direction: column;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    padding: 0.7rem;
    position: relative;
    justify-content: space-between;
    gap: 0.3rem;
    width: 98%;
    height: 47vh;
    overflow: scroll;
    background-color: var(--darkgrey);
    .deleteBtn,
    .editBtn {
      cursor: pointer;
    }
    .buttonsDiv {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
    .icons {
      font-size: 1.4rem;
    }
    .btns {
      display: flex;
      justify-content: space-between;
      gap: 0.2rem;
      align-items: center;
      font-size: 0.8rem;
    }
    .title {
      font-weight: 600;
      font-size: 1.3rem;
    }
    .desc {
      color: var(--grey);
      height: 45%;
      font-size: 0.8rem;
      padding: 0.2rem;
      overflow: scroll;
      width: 20rem;
      ::-webkit-scrollbar {
        width: 0.1rem;
        height: 0.3rem;
      }
      ::-webkit-scrollbar-thumb {
        background: var(--grey);
        height: 0.3rem;
        padding: 2rem;
        border-radius: 10px;
      }
    }
    .date {
      align-self: flex-end;
      color: var(--grey);
      font-size: 0.8rem;
      font-weight: 500;
    }
  }
  .pending{
    .line{
      background-color: var(--white);
    }
  }
  .progress{
    .line{
      background-color: #ffb630;
    }
    .icons{
      color: #ffb630;
    }
  }
  .completed{
    .line{
      background-color: var(--green);
    }
    .icons{
      color: var(--green);
    }
  }
`;
