import css from "./User.module.css";
// import PropTypes from "prop-types";
// npm install date-fns
// import { format } from 'date-fns';
// Syntax // format(date, format, [options])
// Ex // const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
// npm install react-icons
import { FaBeer, FaAllergies } from 'react-icons/fa';
import {formatDateTime, formatDateDuration} from '../../utils/formatDate';
import { iconSize } from "const/iconSize";


export function User({users}) {
  return (
    <ul className={css.userWrap}>USER
      {users.map( user => (
        <li key={user.id}>
          <h3>{user.name}</h3>
          <p><FaBeer className={css.icon} size={iconSize.large}/><a href={"https://react-icons.github.io/react-icons"}>https://react-icons</a></p>
          <p> {user.type}</p>
          <p><FaAllergies className={css.icon} size={iconSize.large}/> {user.location}</p>
          <p>Start time: {formatDateTime(user.time.start)}</p>
          <p>End time: {formatDateTime(user.time.end)}</p>
          <p>Duration time: {formatDateDuration(user.time.start, user.time.end)}</p>
        </li>
      ))}
    </ul>
  )
}

