import React, { useRef } from 'react';
import Manifesto from '../Manifesto/Manifesto';
import { useReactToPrint } from 'react-to-print';

function MyManifesto() {
    const manifestoRef = useRef();
    
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
    )
}

export default MyManifesto;
