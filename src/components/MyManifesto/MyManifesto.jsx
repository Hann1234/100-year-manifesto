import React, { useRef } from 'react';
import Manifesto from '../Manifesto/Manifesto';
import { useReactToPrint } from 'react-to-print';
import * as htmlToImage from 'html-to-image';
import { useSelector } from 'react-redux';

function MyManifesto() {
    const user = useSelector(store => store.user);    
    const manifestoRef = useRef();

    const exportAsPicture = () => {
        htmlToImage.toPng(document.getElementById('manifesto'))
        .then(function (dataUrl) {
            let link = document.createElement('a');
            link.download = `${user.name} Manifesto.png`;
            link.href = dataUrl;
            link.click();
        });
    }
    
    const handlePrint = useReactToPrint({
        content: () => manifestoRef.current,
    });

    return(
        <center>
            <div ref={manifestoRef}>
                <button onClick={handlePrint}>PDF</button>
                <button onClick={exportAsPicture}>JPG</button>
                <Manifesto />
            </div>
        </center>
    )
}

export default MyManifesto;
