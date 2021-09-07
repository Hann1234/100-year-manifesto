import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Manifesto.css';

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
                        <div className="mission">MISSION: {mission ? mission.manifesto_text : "null"}</div>
                        <div className="mantras">
                            <div><Typography>MANTRAS:</Typography></div>
                            {mantras.length !==0 ? mantras.map(mantra => (
                                <div className="mantraElement" >
                                    {/* <TextFit mode="single" max={28}>
                                        {mantra.manifesto_text}
                                    </TextFit> */}
                                        <svg  xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 190 100%"  preserveAspectRatio="none">
                                            <text x="1" y="18" textLength="190"
                                            fontFamily="Verdana"
                                            fill="#4d5470"
                                            lengthAdjust="spacingAndGlyphs">
                                                {mantra.manifesto_text}
                                            </text>
                                        </svg>
                                </div>
                            )):<div className="emptyMantras"></div>}
                            <div className="dotSeparation"> ********** </div>
                        </div>
                        <div className="coreValues">
                            <div>CORE VALUES:</div>
                            {coreValues.map(value => (
                                <div>{value}</div>
                            ))}
                            <div className="dotSeparation"> ********** </div>
                        </div>
                        <div className="forGood">
                            <div>FOR GOOD:</div>
                            {forGood.length !== 0 ? forGood.map(text => (
                                <div>{text}</div>
                            )):<div className="emptyMantras"></div>}
                        </div>
                    </Grid>
                    <Grid className="bigColumn" item>
                        <div className="lifeGoalsTitle blueBar">LIFE GOALS</div>
                        <div className="lifeGoals">
                            {/* {lifeGoals ? lifeGoals.map(textItem => (
                                <div className="lifeGoalItem">{textItem}</div>
                            )): null} */}
                        </div>
                        <div className="principlesTitle"> ////////////////////////////          Guiding Principles          ////////////////////////////</div>
                        <div className="principles">
                            {/* {guidingPrinciples ? guidingPrinciples.map(textItem => (
                                <div className="principleItem">{textItem}</div>
                            )): null} */}
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