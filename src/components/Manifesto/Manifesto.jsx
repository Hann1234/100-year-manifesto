import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import './manifesto.css';
import ManifestoSvgElement from "./ManifestoSvgElement";

function Manifesto( {admin_page = false, user_name = ""} ){
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(()=> {
        if (!admin_page) {
            dispatch({ type: 'FETCH_MISSION'})
            dispatch({ type: 'FETCH_MANTRAS'});
            dispatch({ type: 'FETCH_FOR_GOODS'});
            dispatch({ type: 'FETCH_GUIDING_PRINCIPLES'});
            dispatch({ type: 'FETCH_CORE_VALUES'});
            dispatch({ type: 'FETCH_LIFE_GOALS'});
        }
      },[]);
    const mission = useSelector((store) => store.missionReducer.mission);
    const mantras = useSelector((store) => store.mantrasReducer.mantras);
    const coreValues = useSelector((store) => store.coreValuesReducer.coreValues);
    const forGood = useSelector((store) => store.forGoodReducer.forGood);
    const lifeGoals = useSelector((store) => store.lifeGoalsReducer.lifeGoals);
    const guidingPrinciples = useSelector((store) => store.guidingPrinciplesReducer.guidingPrinciples);
    const user = useSelector(store => store.user);
    
    const handleClick = () => {
        dispatch({ type: 'CLEAR_NEXT_BUTTON'});
        history.push('myManifesto');
    }

    let half=guidingPrinciples.length/2;
    let gpOne = [];
    let gpTwo = [];
    
    if(guidingPrinciples.length > 5){
        gpOne = guidingPrinciples.slice(0,half);
        gpTwo = guidingPrinciples.slice(half);
    } 
    return(
        <div className="manifestoContainer" id="manifesto" onClick={handleClick}>
            <Grid className="manifesto" container direction="column">
                <Grid item>
                    <div className="blueBar"></div>
                </Grid>
                <Grid item className="titleSection">
                    <div className="hundredYear">100 YEAR MANIFESTO</div>
                    <div className="userName">{user_name === "" ? user.name : user_name}</div>
                </Grid>
                <Grid className="content" item container direction="row" justifyContent="space-evenly">
                    <Grid className="smallColumn">
                        <div className="mission">MISSION: {mission.length !==0 && mission[0].manifesto_text}</div>
                        <div className="smallColumnAutoFill dottedBottom">
                            <div className="smTitle">WORDS TO LIVE BY:</div>
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
                    <Grid className="bigColumn" item xs={8} container direction="column" justifyContent="flex-start">
                        <div>
                            <Grid className="lifeGoalsTitle blueBar">LIFE GOALS</Grid>
                            <Grid className="lifeGoals bigColumnAutoFill">
                                {lifeGoals.length !== 0 && lifeGoals.map(textItem => (
                                    <Grid className="lifeGoalItem" key={textItem.id}>{textItem.manifesto_text} </Grid>
                                ))}
                            </Grid>
                        </div>
                        <div>
                            <Grid item className="principlesTitle blueBar">Guiding Principles</Grid>
                            <Grid container className="principles bigColumnAutoFill" spacing={1}>
                                {guidingPrinciples.length !== 0 && guidingPrinciples.length < 6 ? 
                                    guidingPrinciples.map(textItem => {
                                        return(
                                            <Grid item xs={12} className={gpFontSize(textItem.manifesto_text)} key={textItem.id}>{textItem.manifesto_text}<br/> {textItem.source}</Grid>
                                        )
                                    })
                                :<Grid container item xs={12} direction="row" spacing={3}>
                                    <Grid container item container xs={6} spacing={2} justifyContent="space-between"  direction="column">
                                        {gpOne.map(textItem => {
                                            return(
                                                <Grid item className={gpFontSize(textItem.manifesto_text)} key={textItem.id}>{textItem.manifesto_text}<br/> {textItem.source}</Grid>
                                            )
                                        })}
                                    </Grid>
                                    <Grid container item  xs={6} spacing={2} justifyContent="space-between" direction="column">
                                        {gpTwo.map(textItem => {
                                            return(
                                                <Grid item  className={gpFontSize(textItem.manifesto_text)} key={textItem.id}>{textItem.manifesto_text}<br/> {textItem.source}</Grid>
                                            )
                                        })}
                                    </Grid>
                                </Grid>}
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

function gpFontSize(text){
    let fontSizeClass = ""
    text.length<=80 ? fontSizeClass="pi16": null;
    text.length>80 && text.length <= 150 ? fontSizeClass="pi14": null;
    text.length>150 && text.length <= 250 ? fontSizeClass="pi12": null;
    text.length>250 ? fontSizeClass="pi10": null;
    return fontSizeClass
}

export default Manifesto;