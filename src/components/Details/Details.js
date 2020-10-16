import React, {useState, useEffect} from "react";
import './details.css'
import Main from "../Main/Main";
import {useHistory} from "react-router-dom";
import {useLaunches} from '../useLaunches/useLaunches';
import YouTube from "react-youtube";

const Details = (props) => {
  const [launch, setLaunch] = useState(null);

  const {getLaunch} = useLaunches();

  useEffect(() => {
    setLaunch(getLaunch(props.match.params.id))
  }, [getLaunch])


  const history = useHistory();
  console.log(props.match.params.id);
  if (!launch) return null;
  console.log(launch.details);
  return (
    <>
      <Main name={launch.name}/>
      <main className="details">
        <div className="container">
          <div className="details-row">
            <div className="details-image">
              <img src={launch.links.patch.small} alt={launch?.name}></img>
            </div>
            <div className="details-content">
              <p className="details-description">{launch.details}</p>
            </div>
          </div>
          <YouTube className="details-youtube" videoId={launch.links.youtube_id}/>
          <div>
          </div>
        </div>
        <a onClick={history.goBack} className="button button-back">go back</a>
      </main>
    </>
  )
}

export default Details;
