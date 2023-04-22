import React from 'react';

const Calendar = () => {
  return (
    <iframe
      src="https://calendar.google.com/calendar/embed?&wkst=2&bgcolor=%23B39DDB&ctz=Europe%2FMoscow&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=ZTNhOTg3ZGE3OWU3YWNiNGVhZjJlZWEwOTFiOGNiNmU4MmE4NzNiYmY2NjhiNGM0NTQ4MjM3YmQ1ZWI0NjMxY0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=cnUucnVzc2lhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D50000&color=%23009688"
      className="calendar"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
};

export default Calendar;
