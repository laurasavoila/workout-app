// Context
import React, { createContext, useState } from 'react';

export const WorkoutsContext = createContext();

export const WorkoutsProvider = ({ children }) => {
  const [workouts, setWorkouts] = useState([]);
  const [unit, setUnit] = useState('km'); // Oletusyksikkö

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <WorkoutsContext.Provider value={{ workouts, addWorkout, unit, setUnit }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
