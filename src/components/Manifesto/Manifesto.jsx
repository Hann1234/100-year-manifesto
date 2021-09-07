import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Manifesto.css';
import ManifestoSvgElement from "./ManifestoSvgElement";

function Manifesto(){
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch({ type: 'FETCH_MISSION'})
        dispatch({ type: 'FETCH_MANTRAS'});
        dispatch({ type: 'FETCH_FOR_GOODS'});
        dispatch({ type: 'FETCH_GUIDING_PRINCIPLES'});
        dispatch({ type: 'FETCH_CORE_VALUES'});
        dispatch({ type: 'FETCH_LIFE_GOALS'});
      },[]);
    const mission = useSelector((store) => store.missionReducer.mission);
    const mantras = useSelector((store) => store.mantrasReducer.mantras);
    const coreValues = useSelector((store) => store.coreValuesReducer.coreValues);
    const forGood = useSelector((store) => store.forGoodReducer.forGood);
    const lifeGoals = useSelector((store) => store.lifeGoalsReducer.lifeGoals);
    const guidingPrinciples = useSelector((store) => store.guidingPrinciplesReducer.guidingPrinciples);

    return(
        <div className="manifestoContainer" >
            <Grid className="manifesto" container direction="column">
                <Grid item>
                    <div className="blueBar"></div>
                </Grid>
                <Grid item className="titleSection">
                    <div className="hundredYear">100 YEAR MANIFESTO</div>
                    <div className="userName">JOSE RUBIO</div>
                </Grid>
                <Grid className="content" item container direction="row" justifyContent="center">
                    <Grid className="smallColumn">
                        <div className="mission">MISSION: {mission.length !==0 ? mission[0].manifesto_text : "null"}</div>
                        <div className="mantras smallColumnAutoFill">
                            <div><Typography>MANTRAS:</Typography></div>
                            {mantras.length !==0 && mantras.map(mantra => (
                                <ManifestoSvgElement manifestoText={mantra.manifesto_text} key={mantra.id}/>
                            ))}
                        </div>
                        <div className="dotSeparation"> ********** </div>
                        <div className="coreValues smallColumnAutoFill">
                            <div>CORE VALUES:</div>
                            {coreValues.length !== 0 ? coreValues.map(value => (
                                <ManifestoSvgElement manifestoText={value.manifesto_text} key={value.id}/>
                            )):<div className="emptySection"></div>}
                        </div>
                        <div className="dotSeparation"> ********** </div>
                        <div className="forGood smallColumnAutoFill">
                            <div>FOR GOOD:</div>
                            {forGood.length !== 0 ? forGood.map(text => (
                                <ManifestoSvgElement manifestoText={text.manifesto_text} key={text.id}/>
                            )):<div className="emptySection"></div>}
                        </div>
                    </Grid>
                    <Grid className="bigColumn" item>
                        <div className="lifeGoalsTitle blueBar">LIFE GOALS</div>
                        <div className="lifeGoals bigColumnAutoFill">
                            {lifeGoals.length !== 0 && lifeGoals.map(textItem => (
                                <div className="lifeGoalItem" key={textItem.id}>{textItem.manifesto_text} </div>
                            ))}
                        </div>
                        <div className="principlesTitle"><Typography>////////////////////////////Guiding Principles////////////////////////////</Typography></div>
                        <div className="principles bigColumnAutoFill">
                            <Grid container>
                                {guidingPrinciples.length !== 0 && guidingPrinciples.map(textItem => (
                                    <Grid item className="principleItem" key={textItem.id}>{textItem.manifesto_text}<br/> {textItem.source}</Grid>
                                ))}
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
                <Grid item>
                    <div className="blueBar"></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Manifesto;