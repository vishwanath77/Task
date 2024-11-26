
// import React, { useState } from "react";
// import ExerciseList from "./components/ExerciseList";
// import Dropdown from "./components/Dropdown"; // Import the Dropdown component
// import "bootstrap/dist/css/bootstrap.min.css";

// const App = () => {
//   const [selectedExercises, setSelectedExercises] = useState([]);

//   // List of body parts and exercises
//   const categories = [
//     {
//       name: "Lower Body",
//       exercises: ["Squats", "Lunges", "Leg Press"],
//     },
//     {
//       name: "Upper Body",
//       exercises: ["Push-Ups", "Pull-Ups", "Bench Press"],
//     },
//     {
//       name: "Core",
//       exercises: ["Plank", "Sit-Ups", "Russian Twists"],
//     },
//   ];

//   // Handle exercise selection
//   const handleExerciseSelect = (exercise) => {
//     setSelectedExercises((prev) => [
//       ...prev,
//       { id: Date.now(), name: exercise }, // Add exercise with a unique ID
//     ]);
//   };

//   return (
//     <div className="container mt-5">
//       <h1>Physiotherapist Exercise Assignment</h1>

//       {/* Dropdown Component */}
//       <h3>Select Exercises</h3>
//       <Dropdown categories={categories} onExerciseSelect={handleExerciseSelect} />

//       {/* Exercise List Component */}
//       <ExerciseList
//         selectedExercises={selectedExercises}
//         setSelectedExercises={setSelectedExercises}
//       />
//     </div>
//   );
// };

// export default App;


import React, { useState } from "react";
import ExerciseList from "./components/ExerciseList";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);

  return (
    <div className="container mt-5">
      <h1>Physiotherapist Exercise Assignment</h1>
   
      <ExerciseList
        selectedExercises={selectedExercises}
        setSelectedExercises={setSelectedExercises}
      />
    </div>
  );
};

export default App;
