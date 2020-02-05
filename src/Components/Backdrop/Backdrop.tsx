import React, { Fragment } from "react";
import classes from "./Backdrop.module.css";
import { useStore } from "../../Stores/storeContext";
import { action } from "mobx";
import { observer } from "mobx-react-lite";


const Backdrop: React.FC = observer(() => {

  const STORE = useStore();

  function burgerToggleClickHandler() {
    STORE.Set_SideBar_Status()
  }

  const backdrop = <div className={classes.Backdrop} onClick={action(burgerToggleClickHandler)}></div>

  return (
    <Fragment>
      {STORE.SideBarStatus ? backdrop : null}
    </Fragment>
  )
});

export default Backdrop;
