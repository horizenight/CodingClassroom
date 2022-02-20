import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import AppStateProvider, { useAppState } from "./state";
import * as serviceWorker from "./serviceWorker";
import { VideoProvider } from "./components/VideoProvider";
import UnsupportedBrowserWarning from "./components/UnsupportedBrowserWarning/UnsupportedBrowserWarning";
import generateConnectionOptions from "./utils/generateConnectionOptions/generateConnectionOptions";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import config from "./config";
import { Home, Class, Coding } from "./Pages/index";
import { ContextProvider, useLocalContext } from "./context/context";
import { Drawer, JoinedClasses, Login } from "./components/classroom";
import { IsUserRedirect, ProtectedRoute } from "./routes/Routes";
import { useState } from "react";
import { useEffect } from "react";
import db from "./lib/firebase";
const basePath = config.appBasePath || "/";

const LoginClass =()=>{
    
    const { loggedInMail } = useLocalContext();

    const [createdClasses , setCreatedClasses]= useState([])
    const [joinedClasses, setJoinedClasses] = useState([]);


    // we use to get data
    useEffect(() => {
      if (loggedInMail) {
        let unsubscribe = db
          .collection("CreatedClasses")
          .doc(loggedInMail)
          .collection("classes")
          .onSnapshot((snapshot) => {
            setCreatedClasses(snapshot.docs.map((doc) => doc.data()));
          });
        return () => unsubscribe();
      }
    }, [loggedInMail]);

    console.log(createdClasses)
  
    useEffect(() => {
      if (loggedInMail) {
        let unsubscribe = db
          .collection("JoinedClasses")
          .doc(loggedInMail)
          .collection("classes")
          .onSnapshot((snapshot) => {
            setJoinedClasses(snapshot.docs.map((doc) => doc.data().joinedData));
          });
  
        return () => unsubscribe();
      }
    }, [loggedInMail]);
    
     
    return(
       <>
        <IsUserRedirect
        user={loggedInMail}
        loggedInPath="/classroom"
        path="/signin"
        exact
      >
        <Login />
      </IsUserRedirect>

      <ProtectedRoute user={loggedInMail} path="/classroom" exact>
      <Drawer/>
      </ProtectedRoute>
        <ol className="joined">
      {createdClasses.map((item)=>(
          <JoinedClasses key={item.id} classData={item} />
      ))}
      {joinedClasses.map((item)=>(
          <JoinedClasses key={item.id} classData={item} />
      ))}
      </ol>
      </>
    )
}

const VideoApp = () => {
  

  const { setError, settings } = useAppState();
  const connectionOptions = generateConnectionOptions(settings);

  return (
    <UnsupportedBrowserWarning>
      <VideoProvider options={connectionOptions} onError={setError}>
        {/*<ErrorDialog dismissError={() => setError(null)} error={error} />*/}
        <App />
      </VideoProvider>
    </UnsupportedBrowserWarning>
  );
};

ReactDOM.render(
    
  <MuiThemeProvider theme={theme}>
    <ContextProvider>
      <CssBaseline />
      <Router>
        <AppStateProvider>
          <Switch>
            <PrivateRoute exact path={basePath}>
              <VideoApp />
            </PrivateRoute>
            <PrivateRoute exact path={`${basePath}room/:URLRoomName`}>
              <VideoApp />
            </PrivateRoute>
            <PrivateRoute exact path={`${basePath}room/:URLRoomName/:UserName`}>
              <VideoApp />
            </PrivateRoute>
            <PrivateRoute exact path={`/welcome`}>
              <Home />
            </PrivateRoute>
            <PrivateRoute exact path={`/coding`}>
              <Coding />
            </PrivateRoute>

            {/* <PrivateRoute exact path={`/classroom`}>
              <Class />
            </PrivateRoute> */}
            {/* <PrivateRoute exact path={`/login`}>
              <Login />
            </PrivateRoute> */}

            <LoginClass/>

        

            {/* <Redirect to={basePath} /> */}
          </Switch>
        </AppStateProvider>
      </Router>
    </ContextProvider>
    ,
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
