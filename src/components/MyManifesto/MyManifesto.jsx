import React from 'react';
import Manifesto from '../Manifesto/Manifesto';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from "jspdf";
import { useSelector } from 'react-redux';
import { makeStyles } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";


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
    const user = useSelector(store => store.user);
    const classes = useStyles();

    const exportAsPng = () => {
        htmlToImage.toPng(document.getElementById('manifesto'))
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = `${user.name} Manifesto.png`;
            link.href = dataUrl;
            link.click();
        });
    }
    
    const exportAsPdf = () => {
        htmlToImage.toPng(document.getElementById('manifesto'))
        .then(function (dataUrl) {
            const pdf = new jsPDF('p', 'in', 'a4');
            const width = pdf.internal.pageSize.getWidth();
            const height = pdf.internal.pageSize.getHeight();
            pdf.addImage(dataUrl, 'PNG', 0, 0, width, height);
            pdf.save(`${user.name} Manifesto.pdf`);
        });
    }

    return(
        <Fade in={true} timeout={800}>
            <center>
                <div>
                    <button onClick={exportAsPdf}>PDF</button>
                    <button onClick={exportAsPng}>PNG</button>
                    <Manifesto/>
                </div>
            </center>
        </Fade>
    )
}

export default MyManifesto;
