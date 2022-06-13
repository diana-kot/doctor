import React from "react";
import { format } from "date-fns";
import ru from "date-fns/locale/ru";
import Calendar from "react-calendar";
import axios from "axios";
import dayjs from "dayjs";

import "react-calendar/dist/Calendar.css";
import "./CalendarPerson.scss";
import { isWithinInterval } from "date-fns";

const disabledDates = [
  new Date(2022, 5, 1),
  new Date(2022, 5, 2),
  new Date(2022, 5, 3),
  new Date(2022, 5, 4),
];

const tileDisabled = ({ date, view }) =>
  view === "month" && // Block day tiles only
  disabledDates.some(
    (disabledDate) =>
      date.getFullYear() === disabledDate.getFullYear() &&
      date.getMonth() === disabledDate.getMonth() &&
      date.getDate() === disabledDate.getDate()
  );

const CalendarPerson = () => {
  // const [value, onChange] = React.useState(new Date());
  const [date, setDate] = React.useState(new Date());
  const [calendarEvents, setCalendarEvents] = React.useState([]);

  const locale = "fr-CA";

  // React.useEffect(() => {
  //   axios.get("http://localhost:3001/visitsUser").then(({ data }) => {
  //     setCalendarEvents(data);
  //   });
  // }, []);

  // console.log(calendarEvents);

  function isWithinRange(date, range) {
    return isWithinInterval(date, { start: range[0], end: range[1] });
  }

  function isWithinRanges(date, ranges) {
    return ranges.some((range) => isWithinRange(date, range));
  }

  const d = dayjs(date).format("YYYY-MM-DD");
  console.log(d);

  return (
    <>
      <Calendar
        onChange={setDate}
        value={date}
        tileDisabled={tileDisabled}
        selectRange={true}
        next2Label={null}
        prev2Label={null}
        // events={calendarEvents
        //   // .filter((obj) =>
        //   // (dayjs(obj.date).format("YYYY-MM-DD") === date)
        //   .map((obj) => {
        //     <li key={obj.id}>
        //       <span>{obj.date}</span>
        //     </li>;
        //   })}
        // formatDay={(date) => dayjs(date).format("YYYY-MM-DD")}
      />

      <ul className="flex">
        {calendarEvents.filter((obj) => {
          <li>
            {dayjs(obj.date).format("YYYY-MM-DD") ==
              date}
          </li>;
        })}
      </ul>

      {/* {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">
          <span className="bold">Default selected date:</span>{" "}
          {date.toDateString()}
        </p>
      )} */}
    </>
  );
};

export default CalendarPerson;
