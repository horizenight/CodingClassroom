import { Avatar, Button, Dialog, Slide, TextField } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React from "react";
import { useLocalContext } from "../../../context/context";

import "./styles.css";
const JoinClass = () => {
  const { joinClassDialog, setJoinClassDialog } = useLocalContext();

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <div>
      <Dialog
        fullScreen
        open={joinClassDialog}
        onClose={() => setJoinClassDialog(false)}
        TransitionComponent={Transition}
      >
        <div className="joinClass">
          <div className="joinClass__wrapper">
            <div
              className="joinClass__wraper2 "
              onClick={() => setJoinClassDialog(true)}
            >
              <Close className="joinClass_svg" />
              <div className="joinClass__topHead">Join Class
              </div>
              </div>
              <Button
                className="joinClass__btn"
                varient="container"
                color="primary"
              >
                Join
              </Button>
              
            </div>
            <div className="joinClass__form">
              <p className="joinClass__formText">
                You're Currently signer in as Loggged in mail
              </p>
              <div className="joinClass__loginInfo">
                <div className="joinClass__classLeft">
                  <Avatar />
                  <div className="joinClass__loginText">
                  <div className="joinClass__loginName">Kshitij</div>
                  <div className="joinClass_loginEmail">Mail
                  </div>
                </div>
                </div>
                <Button varient="outlined" color="primary">
                  Logout
                </Button>
              </div>
            </div>
        
          <div className="joinClass__form">
            <div
              style={{ fontSize: "1.25rem", color: "#3c4043" }}
              className="joinClass__formText"
            >
              Class Code
            </div>
            <div style={{color: '#3c4043' , marginTop: "-5px"}}
            className = 'joinClass__formText'>
              Ask Your teacher for the class code , then enter it here.
            </div>
            <div className="joinClass__loginInfo">
              <TextField
                id="outlined-basic"
                label="Class Code"
                variant="outlined"
                
              />
              <TextField
                id="outlined-basic"
                label="Owner's email"
                variant="outlined"
              
              />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default JoinClass;
