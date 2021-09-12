import React, { useRef } from "react";
import Manifesto from "../Manifesto/Manifesto";
import { useReactToPrint } from "react-to-print";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
}));

function MyManifesto() {
  const manifestoRef = useRef();
  const classes = useStyles();
  const handlePrint = useReactToPrint({
    content: () => manifestoRef.current,
  });

  return (
    <center>
      <div ref={manifestoRef}>
        <Manifesto />
        <button onClick={handlePrint}>Print</button>
      </div>
    </center>
  );
}

export default MyManifesto;
