import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Manifesto.css';
import useFitText from "use-fit-text";
import TextFit from "react-textfit";
import DynamicFont from 'react-dynamic-font';

function Manifesto(){
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch({
            type: 'FETCH_MANIFESTO_TEXT'
        })
      },[]);
    const mission = useSelector((store) => store.mantrasReducer.mission);
    const mantras = useSelector((store) => store.mantrasReducer.mantras);
    const coreValues = useSelector((store) => store.mantrasReducer.coreValues);
    const forGood = useSelector((store) => store.mantrasReducer.forGood);
    const lifeGoals = useSelector((store) => store.mantrasReducer.lifeGoals);
    const guidingPrinciples = useSelector((store) => store.mantrasReducer.guidingPrinciples);

    const { fontSize, ref } = useFitText();
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
                    <Grid className="smallColumn" item >
                        <div className="mission">MISSION: {mission}</div>
                        <div className="mantras">
                            <div><Typography>MANTRAS:</Typography></div>
                            {mantras ? mantras.map(mantra => (
                                <div className="mantraElement" >
                                    <TextFit mode="single" max={28}>
                                        {mantra.manifesto_text}
                                    </TextFit>
                                </div>
                            )):<div className="emptyMantras"></div>}
                            <div className="dotSeparation"> ********** </div>
                        </div>
                        <div className="coreValues">
                            <div>CORE VALUES:</div>
                            {coreValues && coreValues.map(value => (
                                    <div>{value}</div>
                            ))}
                            <div className="dotSeparation"> ********** </div>
                        </div>
                        <div className="forGood">
                            <div>FOR GOOD:</div>
                            {forGood && forGood.map(text => (
                                <div>{text}</div>
                            ))}
                        </div>
                    </Grid>
                    <Grid className="bigColumn" item>
                        <div className="lifeGoalsTitle blueBar">LIFE GOALS</div>
                        <div className="lifeGoals">
                            {lifeGoals && lifeGoals.map(textItem => (
                                <div className="lifeGoalItem">{textItem}</div>
                            ))}
                        </div>
                        <div className="principlesTitle"> ////////////////////////////          Guiding Principles          ////////////////////////////</div>
                        <div className="principles">
                            {guidingPrinciples &&guidingPrinciples.map(textItem => (
                                <div className="principleItem">{textItem}</div>
                            ))}
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