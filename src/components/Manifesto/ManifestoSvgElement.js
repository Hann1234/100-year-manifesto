function ManifestoSvgElement({manifestoText}){
    let extra=0;
    let lengthAdjust="spacingAndGlyphs";
    
    manifestoText.length <=10 ? lengthAdjust="spacing":null;
    manifestoText.length >=15 ? extra=-3:null;

    let variableFontSize = manifestoText.length < 4 ? 50:300/(1.4*(manifestoText.length+extra));

    return(
        <div className="smallColumnElement" >
            <svg width="190" height={variableFontSize} 
            xmlns="http://www.w3.org/2000/svg">
                <text y="90%" textLength="190"
                fontSize={variableFontSize}
                fontWeight="bold"
                fill="#4d5470"
                lengthAdjust={lengthAdjust}>
                    {manifestoText}
                </text>
            </svg>
        </div>
    )
}

export default ManifestoSvgElement;