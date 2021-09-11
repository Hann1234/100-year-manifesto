import React from 'react';
import Manifesto from '../Manifesto/Manifesto';
import * as htmlToImage from 'html-to-image';
import { jsPDF } from "jspdf";
import { useSelector } from 'react-redux';

function MyManifesto() {
    const user = useSelector(store => store.user);

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
        <center>
            <div>
                <button onClick={exportAsPdf}>PDF</button>
                <button onClick={exportAsPng}>PNG</button>
                <Manifesto/>
            </div>
        </center>
    )
}

export default MyManifesto;
