import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DateTime } from "luxon";

//getDatesNow
export const getDatesNow = createAsyncThunk(
  "dates/getDatesNow",
  async (city, thunkAOI) => {
    const { rejectWithValue, dispatch } = thunkAOI;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric`
      );
      dispatch(getDatesDaily(res.data.coord));
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
//getDatesDaily
export const getDatesDaily = createAsyncThunk(
  "dates/getDatesHourly",
  async (city, thunkAOI) => {
    const { rejectWithValue } = thunkAOI;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=current,minutely,hourly,alerts&appid=1fa9ff4126d95b8db54f3897a208e91c&units=metric`
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//format date
export const formatDate = (secs, format = "cccc, dd LLL yyyy hh:mm a") =>
  DateTime.fromSeconds(secs).toFormat(format);

const initialState = { now: {}, daily: [], error: null, isLoading: false };

const dates = createSlice({
  name: "dates",
  initialState,
  extraReducers: {
    //getDatesNow
    [getDatesNow.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getDatesNow.fulfilled]: (state, action) => {
      state.isLoading = false;
      const {
        coord: { lon, lat },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        weather: [{ main, icon }],
        name,
        dt,
        sys: { country, sunrise, sunset },
        wind: { speed },
        timezone,
      } = action.payload;
      state.now = {
        ...state.now,
        lon,
        lat,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        main,
        icon,
        name,
        dt,
        country,
        sunrise,
        sunset,
        speed,
        timezone,
      };
    },
    [getDatesNow.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //getDatesDaily
    [getDatesDaily.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getDatesDaily.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.daily = [...state.daily, ...action.payload.daily];
    },
    [getDatesDaily.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default dates.reducer;
