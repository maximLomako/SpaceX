import React from "react";
import Main from "../Main/Main";
import {Link} from "react-router-dom";
import {useLaunches} from '../useLaunches/useLaunches'


const Calendar = () => {
  const {data} = useLaunches();
  return (
    <div>
      <Main name="Calendar SpaceX"/>
      <section className="calendar">
        <div className="container">
          <ul className="calendar-list">

            {data.map(item => <li key={item.id} className="calendar-item">
              <article className="launches">
                <div className="launches-image">
                  <img src={item.links.patch.small} alt=""></img>
                </div>
                <div className="launches-content">
                  <h2 className="launches-title">{item.name}</h2>
                  <Link to={`/details/${item.id}`} className="button launches-details">Details</Link>
                </div>
              </article>
            </li>)}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Calendar;
