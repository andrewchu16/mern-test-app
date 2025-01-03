import { WorkoutContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used within a WorkoutContextProvider"
    );
  }

  return context;
};
