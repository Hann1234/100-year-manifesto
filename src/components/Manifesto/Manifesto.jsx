import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userReducer from "../../redux/reducers/user.reducer";
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
    const user = useSelector(store => store.user);
    
    let half=guidingPrinciples.length/2;
    let gpOne = []
    let gpTwo = [];
    
    
    if(guidingPrinciples.length > 5){
        gpOne = guidingPrinciples.slice(0,half);
        gpTwo = guidingPrinciples.slice(half);
    } 
    return(
        <div className="manifestoContainer">
            <Grid className="manifesto" container direction="column">
                <Grid item>
                    <div className="blueBar"></div>
                </Grid>
                <Grid item className="titleSection">
                    <div className="hundredYear">100 YEAR MANIFESTO</div>
                    <div className="userName">{user.name}</div>
                </Grid>
                <Grid className="content" item container direction="row" justifyContent="space-around">
                    <Grid className="smallColumn">
                        <div className="mission">MISSION: {mission.length !==0 ? mission[0].manifesto_text : "null"}</div>
                        <div className="smallColumnAutoFill dottedBottom">
                            <div className="smTitle">MANTRAS:</div>
                            {mantras.length !==0 && mantras.map(mantra => {
                                let stringArray = mantra.manifesto_text.split(" ");
                                let firstText ="";
                                let textArray = [];
                            
                                if(mantra.manifesto_text.length >=30 || stringArray.length>4){
                                    for (let index = 0; index <= stringArray.length-3; index++) {
                                        firstText += stringArray[index] + " ";
                                    }
                                    textArray.push(firstText)
                                    textArray.push(stringArray[stringArray.length-2] + " " + stringArray[stringArray.length-1]);
                                }else{
                                    textArray.push(mantra.manifesto_text);
                                }
                                return(
                                    textArray.map(element => <ManifestoSvgElement manifestoText={element} />)
                                )
                            })}
                        </div>
                        <div className="coreValues smallColumnAutoFill dottedBottom">
                            <div className="smTitle"> CORE VALUES:</div>
                            {coreValues.length !== 0 ? coreValues.map(value => (
                                <ManifestoSvgElement manifestoText={value.manifesto_text} key={value.id}/>
                            )):<div className="emptySection"></div>}
                        </div>
                        <div className="smallColumnAutoFill">
                            <div className="smTitle">FOR GOOD:</div>
                            {forGood.length !== 0 ? forGood.map(text => {
                                let stringArray = text.manifesto_text.split(" ");
                                let firstText ="";
                                let textArray = [];
                            
                                if(text.manifesto_text.length >=20 || stringArray.length>4){
                                    for (let index = 0; index <= stringArray.length-3; index++) {
                                        firstText += stringArray[index] + " ";
                                    }
                                    textArray.push(firstText)
                                    textArray.push(stringArray[stringArray.length-2] + " " + stringArray[stringArray.length-1]);
                                }else{
                                    textArray.push(text.manifesto_text);
                                }
                                return(
                                    textArray.map(element => <ManifestoSvgElement manifestoText={element} />)
                                )
                            }):<div className="emptySection"></div>}
                        </div>
                    </Grid>
                    <Grid className="bigColumn" item>
                        <div className="lifeGoalsTitle blueBar">LIFE GOALS</div>
                        <div className="lifeGoals bigColumnAutoFill">
                            {lifeGoals.length !== 0 && lifeGoals.map(textItem => (
                                <div className="lifeGoalItem" key={textItem.id}>{textItem.manifesto_text} </div>
                            ))}
                        </div>
                        <div className="principlesTitle blueBar">Guiding Principles</div>
                        <div className="principles bigColumnAutoFill">
                            {guidingPrinciples.length !== 0 && guidingPrinciples.length < 6 ? 
                            <Grid container spacing={1}>
                                {guidingPrinciples.map(textItem => {
                                    return(
                                        <Grid item xs={12} className={gpFontSize(textItem.manifesto_text)} key={textItem.id}>{textItem.manifesto_text}<br/> {textItem.source}</Grid>
                                    )
                                })}
                            </Grid>
                            :<Grid container direction="row" spacing={1}>
                                <Grid container item container xs={6} spacing={2} justifyContent="space-around" direction="column">
                                    {gpOne.map(textItem => {
                                        return(
                                            <Grid item  className={gpFontSize(textItem.manifesto_text)} key={textItem.id}>{textItem.manifesto_text}<br/> {textItem.source}</Grid>
                                        )
                                    })}
                                </Grid>
                                <Grid container item  xs={6} spacing={2} justifyContent="space-around" direction="column">
                                {gpTwo.map(textItem => {
                                    return(
                                        <Grid item  className={gpFontSize(textItem.manifesto_text)} key={textItem.id}>{textItem.manifesto_text}<br/> {textItem.source}</Grid>
                                    )
                                })}
                                 </Grid>
                            </Grid>}
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

function gpFontSize(text){
    let fontSizeClass = ""
    text.length<=50 ? fontSizeClass="pi16": null;
    text.length>50 && text.length <= 100 ? fontSizeClass="pi14": null;
    text.length>100 && text.length <= 200 ? fontSizeClass="pi12": null;
    text.length>200 ? fontSizeClass="pi10": null;
    return fontSizeClass
}

export default Manifesto;