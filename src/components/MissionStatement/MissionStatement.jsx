import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function MissionStatement() {

    const [mission, setMission] = useState('');
    const dispatch = useDispatch ();

    useEffect(() => {
        //Need a dispatch to load the static part of page
    }, [])

    //Need handleChange to setMission in input field
    const handleMissionChange = () => {
        setMission(event.target.value);
    }

    //Need handleSubmit
    const getMissionResults = (event) => {
        event.preventDefault();
        //Need to verify what the dispatch will be for this
        dispatch({ type: "SET_MISSION", payload: mission });
        console.log(`What's the current state of mission?`, mission);
        };

  return (
    //need to imbed video for Mission Statement
    <div>
      <h1>Mission Statement</h1>
      <p>
        Your 100 Year Manifesto starts with your mission statement. There is no
        great gift you can give yourself than a defining purpose. A mission
        statement. To live with intentionality for the cause which you were
        created.
      </p>
      <p>
        Your life is worthy of a noble motive. What is it? Dedicating your life
        to a cause greater than yourself is a game-changer. A personal mission
        statement is a powerful tool because it provides a path for success.
        Just as important, it gives you permission to stay no to the things that
        are distractions. What's your cause.
      </p>
      <p>For me, my mission: "Help others live better."</p>
      <p>
        My mission in life is to make people happy." Walt Disney's mission
        statement.
      </p>
      <p>
        "To be a teacher. And to be known for inspiring my students to be more
        than they thought they could be." Oprah Winfrey's mission statement.
      </p>
      <p>
        Your mission statement. Make it yours. Write it however you want. Keep
        it brief. Keep it meaningful. Keep it yours. What were you born to do?
        Who are you called to be?
      </p>
      <form onSubmit={getMissionResults}>
        <center>
          <input
            className="mission"
            value={mission}
            onChange={(event) => handleMissionChange(event.target.value)}
            placeholder="Enter Mission Statement"
          />required
          <button className="missionButton" type="submit">
            SAVE
          </button>
          <button className="nextButton"
            onClick={() => {
            history.push('/mantras');
            }}>
            NEXT
          </button>
        </center>
      </form>
    </div>
  );
}

export default MissionStatement;
