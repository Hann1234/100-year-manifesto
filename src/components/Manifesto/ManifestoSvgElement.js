function ManifestoSvgElement({manifestoText}){
    let variableFontSize = 280/(manifestoText.length*1.2);
    let viewBoxVariable= `0 0 190 ${variableFontSize}`
    return(
        <div className="mantraElement" >
            <svg width="190" height={variableFontSize*.85} 
            xmlns="http://www.w3.org/2000/svg">
                <text y="90%" textLength="190"
                fontSize={variableFontSize}
                fill="#4d5470"
                lengthAdjust="spacingAndGlyphs">
                    {manifestoText}
                </text>
            </svg>
        </div>
    )
}

export default ManifestoSvgElement;