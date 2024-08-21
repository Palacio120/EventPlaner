import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs/index.js";
import "../App.css";
import { useState } from "react";
import dayjs from "dayjs";

const Calendario = (props) => {
  const [value, setValue] = useState(dayjs("2022-04-17"));
  const [selectedtime, setSelectedtime] = useState(8);
  const slots = [];

  for (let slot = 0; slot < 24; slot++) {
    slots.push(
      <div>
        <button
          className={selectedtime === slot ? "activeTime" : "timeSlot"}
          index={slot}
          key={slot}
          onClick={() => {
            setSelectedtime(slot);
          }}
        >
          {slot}
        </button>
      </div>
    );
  }

  return (
    <div style={{ float: "right" }}>
      <div style={{ backgroundColor: "white" }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </div>
      <div className="slots">{slots}</div>
    </div>
  );
};

export default Calendario;
