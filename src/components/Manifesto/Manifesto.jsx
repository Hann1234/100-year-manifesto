import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import './Manifesto.css'

let mission = "Make the world a better place.";

let mantras = [
    "FAMILY, FITNESS, FREEDOM.",
    "DISCIPLINE EQUALS FREEDOM",
    "BE OBSESSIVELY GRATEFUL",
    "THE OBSTACLE IS THE WAY",
    "LIVE.LOVE.LEARN LEGACY",
    "BETTER EVERY DAY",
    "HELL YES... OR NO.",
    "REMEMBER TO ENJOY THE DANCE",
    "MEMENTO MORI"
];

let coreValues = [
    "Exploration",
    "FAMILY",
    "FREEDOM",
    "GROWTH",
    "PEACE",
    "PURPOSE"
];

let forGood = [
    "PURSUING A CURE FOR CANCER",
    "SUPPORTING A HEALTHY PLANET",
    "ENTREPRENEURSHIP FOR GOOD",
    "ELIMINATE PREVENTABLE DEATHS"
];

let lifeGoals = [
    "Be the man, father, & friend God created me to be",
    "Inner Peace",
    "Live a life full of diversity in events, people and opportunities.",
    "Take actions with a large impact on the world.",
    "Be a great father and role model for my daughters.",
    "Be a great husband",
    "Maintain close and rewarding friendships with the people who are important to me",
    "Empower entrepreneurs to change the world.",
    "Actualize lifetime wish list into reality",
]

let guidingPrinciples = [
    `Life should not be a journey to the grave with the intention of arriving safely in a pretty and well preserved body,
     but rather to skid in broadside in a cloud of smoke, thoroughly used up, totally worn out, and loudly proclaiming "Wow! what a Ride!"
     Hunter S. THOMPSON`
]

function Manifesto(){
    const mantras = useSelector((store) => store.mantrasReducer.mantras);
    return(
        <div className="manifestoContainer" >
            <Grid className="manifesto" container direction="column">
                <Grid>
                    <div className="blueBar"></div>
                </Grid>
                <Grid className="title">
                    <div className="hundredYear">100 YEAR MANIFESTO</div>
                    <div className="userName">JOSE RUBIO</div>
                </Grid>
                <Grid className="content" container direction="row" justifyContent="center">
                    <Grid className="smallColumn" container direction="column">
                        <div className="mission">MISSION: {mission}</div>
                        <div className="mantras">
                            <div>MANTRAS:</div>
                            {mantras.map(mantra => (
                                <div>{mantra.manifesto_text}</div>
                            ))}
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
                            {forGood.map(text => (
                                <div>{text}</div>
                            ))}
                        </div>
                    </Grid>
                    <Grid className="bigColumn">
                        <div className="lifeGoalsTitle blueBar">LIFE GOALS</div>
                        <div className="lifeGoals">
                            {lifeGoals.map(textItem => (
                                <div className="lifeGoalItem">{textItem}</div>
                            ))}
                        </div>
                        <div className="principlesTitle"> ////////////////////////////          Guiding Principles          ////////////////////////////</div>
                        <div className="principles">
                            {guidingPrinciples.map(textItem => (
                                <div className="principleItem">{textItem}</div>
                            ))}
                        </div>
                    </Grid>
                </Grid>
                <Grid>
                    <div className="blueBar"></div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Manifesto;