// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from "uuid"; // Import UUID for unique ID generation

// const ExerciseList = () => {
//   // State for managing selected exercises
//   const [selectedExercises, setSelectedExercises] = useState([]);

//   // Preloaded exercises (could be fetched from an API)
//   const preloadedExercises = [
//     { name: "Push Ups", sets: 3, reps: 10, holdTime: 0, side: "Both" },
//     { name: "Pull Ups", sets: 2, reps: 8, holdTime: 0, side: "Both" },
//   ];

//   // Add unique IDs to preloaded exercises when the component mounts
//   useEffect(() => {
//     const exercisesWithIds = preloadedExercises.map((exercise) => ({
//       ...exercise,
//       id: uuidv4(), // Generate a unique ID for each exercise
//     }));
//     setSelectedExercises(exercisesWithIds);
//   }, []);

//   // Handles the reordering of exercises after drag-and-drop
//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) return; // Exit if dropped outside the list
//     if (source.index === destination.index) return; // Exit if dropped in the same position

//     // Reorder the list
//     const updatedExercises = Array.from(selectedExercises);
//     const [movedExercise] = updatedExercises.splice(source.index, 1); // Remove dragged item
//     updatedExercises.splice(destination.index, 0, movedExercise); // Insert at the new position

//     setSelectedExercises(updatedExercises); // Update the state
//   };

//   // Adds a new exercise to the list with a unique ID
//   const addExercise = (exercise) => {
//     const newExercise = {
//       ...exercise,
//       id: uuidv4(), // Generate a unique ID
//     };
//     setSelectedExercises((prev) => [...prev, newExercise]);
//   };

//   // Removes an exercise by its index
//   const removeExercise = (index) => {
//     const updatedList = [...selectedExercises];
//     updatedList.splice(index, 1); // Remove the exercise
//     setSelectedExercises(updatedList); // Update the state
//   };

//   return (
//     <div className="mt-4">
//       <h3>Selected Exercises</h3>

//       {/* Button to add a sample exercise */}
//       <button
//         className="btn btn-primary mb-3"
//         onClick={() =>
//           addExercise({
//             name: "Plank",
//             sets: 3,
//             reps: 0,
//             holdTime: 30,
//             side: "Both",
//           })
//         }
//       >
//         Add Plank Exercise
//       </button>

//       {/* Drag-and-Drop Context */}
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="exercises">
//           {(provided) => (
//             <ul
//               className="list-group"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {selectedExercises.map((exercise, index) => (
//                 <Draggable
//                   key={exercise.id} // Ensure key is unique
//                   draggableId={`exercise-${exercise.id}`} // Ensure draggableId is unique
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       className="list-group-item d-flex justify-content-between align-items-center"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       {/* Exercise Details */}
//                       {exercise.name} - {exercise.sets} sets, {exercise.reps} reps, {exercise.holdTime} sec ({exercise.side})
//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => removeExercise(index)}
//                       >
//                         Remove
//                       </button>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder} {/* Placeholder for proper spacing */}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default ExerciseList;



// import React, { useState, useEffect } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { v4 as uuidv4 } from "uuid";

// const ExerciseList = () => {
//   const [selectedExercises, setSelectedExercises] = useState([]);
//   const [exerciseInput, setExerciseInput] = useState({
//     name: "",
//     sets: "",
//     reps: "",
//     holdTime: "",
//     side: "Both",
//   });
//   const [notification, setNotification] = useState("");

//   const preloadedExercises = [
//     { name: "Push Ups", sets: 3, reps: 10, holdTime: 0, side: "Both" },
//     { name: "Lunges", sets: 3, reps: 12, holdTime: 0, side: "Left" },
//   ];

//   // Assign unique IDs to preloaded exercises
//   useEffect(() => {
//     const exercisesWithIds = preloadedExercises.map((exercise) => ({
//       ...exercise,
//       id: uuidv4(),
//     }));
//     setSelectedExercises(exercisesWithIds);
//   }, []);

//   // Handle drag-and-drop functionality
//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) return;
//     if (source.index === destination.index) return;

//     const updatedExercises = Array.from(selectedExercises);
//     const [movedExercise] = updatedExercises.splice(source.index, 1);
//     updatedExercises.splice(destination.index, 0, movedExercise);

//     setSelectedExercises(updatedExercises);
//   };

//   // Remove an exercise by index
//   const removeExercise = (index) => {
//     const updatedList = [...selectedExercises];
//     updatedList.splice(index, 1);
//     setSelectedExercises(updatedList);
//   };

//   // Duplicate an exercise for a specific side
//   const duplicateExercise = (exercise, side) => {
//     const existingSides = selectedExercises
//       .filter((e) => e.name === exercise.name)
//       .map((e) => e.side);

//     if (existingSides.includes(side)) return;

//     const duplicatedExercise = {
//       ...exercise,
//       id: uuidv4(),
//       side: side,
//     };

//     setSelectedExercises((prev) => [...prev, duplicatedExercise]);
//   };

//   // Handle input changes for adding a new exercise
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setExerciseInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Add a new exercise
//   const addExercise = () => {
//     if (!exerciseInput.name || !exerciseInput.sets || !exerciseInput.reps) {
//       alert("Please fill in all the required fields!");
//       return;
//     }

//     const newExercise = {
//       ...exerciseInput,
//       id: uuidv4(),
//     };

//     setSelectedExercises((prev) => [...prev, newExercise]);
//     setNotification(`${exerciseInput.name} has been added!`);
//     setExerciseInput({
//       name: "",
//       sets: "",
//       reps: "",
//       holdTime: "",
//       side: "Both",
//     });

//     setTimeout(() => {
//       setNotification("");
//     }, 3000); // Clear notification after 3 seconds
//   };

//   return (
//     <div className="mt-4 container">
//       <h3>Selected Exercises</h3>

//       {/* Notification */}
//       {notification && <div className="alert alert-success">{notification}</div>}

//       {/* Add Exercise Form */}
//       <div className="mb-3">
//         <h5>Add a New Exercise</h5>
//         <div className="row">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               placeholder="Exercise Name"
//               value={exerciseInput.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="sets"
//               placeholder="Sets"
//               value={exerciseInput.sets}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="reps"
//               placeholder="Reps"
//               value={exerciseInput.reps}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="holdTime"
//               placeholder="Hold Time (seconds)"
//               value={exerciseInput.holdTime}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               name="side"
//               value={exerciseInput.side}
//               onChange={handleInputChange}
//             >
//               <option value="Both">Both</option>
//               <option value="Left">Left</option>
//               <option value="Right">Right</option>
//             </select>
//           </div>
//           <div className="col">
//             <button className="btn btn-primary" onClick={addExercise}>
//               Add Exercise
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Drag-and-Drop Context */}
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="exercises">
//           {(provided) => (
//             <ul
//               className="list-group"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {selectedExercises.map((exercise, index) => (
//                 <Draggable
//                   key={exercise.id}
//                   draggableId={`exercise-${exercise.id}`}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       className="list-group-item d-flex justify-content-between align-items-center"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       {/* Exercise Details */}
//                       <span>
//                         {exercise.name} - {exercise.sets} sets, {exercise.reps} reps,{" "}
//                         {exercise.holdTime} sec ({exercise.side})
//                       </span>

//                       {/* Hamburger Menu */}
//                       <div className="dropdown">
//                         <button
//                           className="btn btn-sm btn-secondary dropdown-toggle"
//                           type="button"
//                           id={`dropdown-${exercise.id}`}
//                           data-bs-toggle="dropdown"
//                           aria-expanded="false"
//                         >
//                           ☰
//                         </button>
//                         <ul
//                           className="dropdown-menu"
//                           aria-labelledby={`dropdown-${exercise.id}`}
//                         >
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() =>
//                                 duplicateExercise(exercise, "Left")
//                               }
//                               disabled={
//                                 exercise.side === "Left" ||
//                                 exercise.side === "Both" ||
//                                 selectedExercises.some(
//                                   (e) =>
//                                     e.name === exercise.name &&
//                                     e.side === "Left"
//                                 )
//                               }
//                             >
//                               Duplicate for Left Side
//                             </button>
//                           </li>
//                           <li>
//                             <button
//                               className="dropdown-item"
//                               onClick={() =>
//                                 duplicateExercise(exercise, "Right")
//                               }
//                               disabled={
//                                 exercise.side === "Right" ||
//                                 exercise.side === "Both" ||
//                                 selectedExercises.some(
//                                   (e) =>
//                                     e.name === exercise.name &&
//                                     e.side === "Right"
//                                 )
//                               }
//                             >
//                               Duplicate for Right Side
//                             </button>
//                           </li>
//                         </ul>
//                       </div>

//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => removeExercise(index)}
//                       >
//                         Remove
//                       </button>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default ExerciseList;



// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { Dropdown } from 'react-bootstrap';  // Import Dropdown from React-Bootstrap

// const ExerciseList = () => {
//   const [selectedExercises, setSelectedExercises] = useState([]);
//   const [exerciseInput, setExerciseInput] = useState({
//     name: "",
//     sets: "",
//     reps: "",
//     holdTime: "",
//     side: "Both",
//   });
//   const [notification, setNotification] = useState("");

//   // Load exercises from localStorage if available
//   useEffect(() => {
//     const savedExercises = JSON.parse(localStorage.getItem("selectedExercises"));
//     if (savedExercises) {
//       setSelectedExercises(savedExercises);
//     } else {
//       // Set initial exercises if nothing is in localStorage
//       const preloadedExercises = [
//         { name: "Push Ups", sets: 3, reps: 10, holdTime: 0, side: "Both" },
//         { name: "Lunges", sets: 3, reps: 12, holdTime: 0, side: "Left" },
//       ];
//       setSelectedExercises(
//         preloadedExercises.map((exercise) => ({
//           ...exercise,
//           id: uuidv4(),
//         }))
//       );
//     }
//   }, []);

//   // Save exercises to localStorage whenever the selected exercises change
//   useEffect(() => {
//     localStorage.setItem("selectedExercises", JSON.stringify(selectedExercises));
//   }, [selectedExercises]);

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination) return;
//     if (source.index === destination.index) return;

//     const updatedExercises = Array.from(selectedExercises);
//     const [movedExercise] = updatedExercises.splice(source.index, 1);
//     updatedExercises.splice(destination.index, 0, movedExercise);

//     setSelectedExercises(updatedExercises);
//   };

//   const removeExercise = (index) => {
//     const updatedList = [...selectedExercises];
//     updatedList.splice(index, 1);
//     setSelectedExercises(updatedList);
//   };

//   const duplicateExercise = (exercise, side) => {
//     const existingSides = selectedExercises
//       .filter((e) => e.name === exercise.name)
//       .map((e) => e.side);

//     // Check if the side already exists
//     if (existingSides.includes(side)) return;

//     const duplicatedExercise = {
//       ...exercise,
//       id: uuidv4(),
//       side: side,
//     };

//     setSelectedExercises((prev) => [...prev, duplicatedExercise]);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setExerciseInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const addExercise = () => {
//     if (!exerciseInput.name || !exerciseInput.sets || !exerciseInput.reps) {
//       alert("Please fill in all the required fields!");
//       return;
//     }

//     const newExercise = {
//       ...exerciseInput,
//       id: uuidv4(),
//     };

//     setSelectedExercises((prev) => [...prev, newExercise]);
//     setNotification(`${exerciseInput.name} has been added!`);
//     setExerciseInput({
//       name: "",
//       sets: "",
//       reps: "",
//       holdTime: "",
//       side: "Both",
//     });

//     setTimeout(() => {
//       setNotification("");
//     }, 3000);
//   };

//   return (
//     <div className="mt-4 container">
//       <h3>Selected Exercises</h3>

//       {notification && <div className="alert alert-success">{notification}</div>}

//       <div className="mb-3">
//         <h5>Add a New Exercise</h5>
//         <div className="row">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               placeholder="Exercise Name"
//               value={exerciseInput.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="sets"
//               placeholder="Sets"
//               value={exerciseInput.sets}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="reps"
//               placeholder="Reps"
//               value={exerciseInput.reps}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="holdTime"
//               placeholder="Hold Time (seconds)"
//               value={exerciseInput.holdTime}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               name="side"
//               value={exerciseInput.side}
//               onChange={handleInputChange}
//             >
//               <option value="Both">Both</option>
//               <option value="Left">Left</option>
//               <option value="Right">Right</option>
//             </select>
//           </div>
//           <div className="col">
//             <button className="btn btn-primary" onClick={addExercise}>
//               Add Exercise
//             </button>
//           </div>
//         </div>
//       </div>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="exercises">
//           {(provided) => (
//             <ul
//               className="list-group"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {selectedExercises.map((exercise, index) => (
//                 <Draggable
//                   key={exercise.id}
//                   draggableId={`exercise-${exercise.id}`}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       className="list-group-item d-flex justify-content-between align-items-center"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <span>
//                         {exercise.name} - {exercise.sets} sets, {exercise.reps} reps,{" "}
//                         {exercise.holdTime} sec ({exercise.side})
//                       </span>

//                       {/* Hamburger Menu with Duplicate Options */}
//                       <Dropdown>
//                         <Dropdown.Toggle variant="secondary" size="sm" id="dropdown-custom-components">
//                           ☰
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu>
//                           {/* Duplicate for Left Side */}
//                           <Dropdown.Item
//                             onClick={() => duplicateExercise(exercise, "Left")}
//                             disabled={
//                               exercise.side === "Left" ||
//                               exercise.side === "Both" ||
//                               selectedExercises.some(
//                                 (e) =>
//                                   e.name === exercise.name && e.side === "Left"
//                               )
//                             }
//                           >
//                             Duplicate for Left Side
//                           </Dropdown.Item>
//                           {/* Duplicate for Right Side */}
//                           <Dropdown.Item
//                             onClick={() => duplicateExercise(exercise, "Right")}
//                             disabled={
//                               exercise.side === "Right" ||
//                               exercise.side === "Both" ||
//                               selectedExercises.some(
//                                 (e) =>
//                                   e.name === exercise.name && e.side === "Right"
//                               )
//                             }
//                           >
//                             Duplicate for Right Side
//                           </Dropdown.Item>
//                         </Dropdown.Menu>
//                       </Dropdown>

//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => removeExercise(index)}
//                       >
//                         Remove
//                       </button>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default ExerciseList;

// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { FaBars } from 'react-icons/fa'; // Importing hamburger icon

// const ExerciseList = () => {
//   const [selectedExercises, setSelectedExercises] = useState([]);
//   const [exerciseInput, setExerciseInput] = useState({
//     name: "",
//     sets: "",
//     reps: "",
//     holdTime: "",
//     side: "Both",
//     days: [],
//     frequency: 1,
//   });
//   const [notification, setNotification] = useState("");
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu toggle

//   const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

//   useEffect(() => {
//     const savedExercises = JSON.parse(localStorage.getItem("selectedExercises"));
//     if (savedExercises && Array.isArray(savedExercises)) {
//       setSelectedExercises(savedExercises);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("selectedExercises", JSON.stringify(selectedExercises));
//   }, [selectedExercises]);

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination || source.index === destination.index) return;

//     const updatedExercises = Array.from(selectedExercises);
//     const [movedExercise] = updatedExercises.splice(source.index, 1);
//     updatedExercises.splice(destination.index, 0, movedExercise);

//     setSelectedExercises(updatedExercises);
//   };

//   const removeExercise = (index) => {
//     const updatedList = [...selectedExercises];
//     updatedList.splice(index, 1);
//     setSelectedExercises(updatedList);
//   };

//   const duplicateExercise = (exercise, side) => {
//     const existingSides = selectedExercises
//       .filter((e) => e.name === exercise.name)
//       .map((e) => e.side);

//     if (existingSides.includes(side)) return;

//     const duplicatedExercise = {
//       ...exercise,
//       id: uuidv4(),
//       side: side,
//     };

//     setSelectedExercises((prev) => [...prev, duplicatedExercise]);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setExerciseInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleDaySelection = (day) => {
//     setExerciseInput((prev) => {
//       const newDays = prev.days.includes(day)
//         ? prev.days.filter((d) => d !== day)
//         : [...prev.days, day];
//       return { ...prev, days: newDays };
//     });
//   };

//   const addExercise = () => {
//     if (!exerciseInput.name || !exerciseInput.sets || !exerciseInput.reps) {
//       alert("Please fill in all the required fields!");
//       return;
//     }

//     const newExercise = {
//       ...exerciseInput,
//       id: uuidv4(),
//     };

//     setSelectedExercises((prev) => [...prev, newExercise]);
//     setNotification(`${exerciseInput.name} has been added!`);
//     setExerciseInput({
//       name: "",
//       sets: "",
//       reps: "",
//       holdTime: "",
//       side: "Both",
//       days: [],
//       frequency: 1,
//     });

//     setTimeout(() => {
//       setNotification("");
//     }, 3000);
//   };

//   return (
//     <div className="mt-4 container">
//       <h3>Selected Exercises</h3>

//       {notification && <div className="alert alert-success">{notification}</div>}

//       <div className="mb-3">
//         <h5>Add a New Exercise</h5>
//         <div className="row">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               placeholder="Exercise Name"
//               value={exerciseInput.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="sets"
//               placeholder="Sets"
//               value={exerciseInput.sets}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="reps"
//               placeholder="Reps"
//               value={exerciseInput.reps}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="holdTime"
//               placeholder="Hold Time (seconds)"
//               value={exerciseInput.holdTime}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               name="side"
//               value={exerciseInput.side}
//               onChange={handleInputChange}
//             >
//               <option value="Both">Both</option>
//               <option value="Left">Left</option>
//               <option value="Right">Right</option>
//             </select>
//           </div>
//           <div className="col">
//             <label>Select Days:</label>
//             <div className="days-selection">
//               {daysOfWeek.map((day) => (
//                 <label key={day} className="checkbox-inline">
//                   <input
//                     type="checkbox"
//                     checked={exerciseInput.days.includes(day)}
//                     onChange={() => handleDaySelection(day)}
//                   />
//                   {day}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="frequency"
//               placeholder="Sessions per day"
//               value={exerciseInput.frequency}
//               onChange={handleInputChange}
//               min="1"
//             />
//           </div>
//           <div className="col">
//             <button className="btn btn-primary" onClick={addExercise}>
//               Add Exercise
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Hamburger Menu */}
//       <div className="hamburger-menu">
//         <FaBars
//           className="hamburger-icon"
//           onClick={() => setIsMenuOpen((prev) => !prev)}
//         />
//         {isMenuOpen && (
//           <div className="menu-items">
//             <button
//               className="menu-item"
//               onClick={() => duplicateExercise(exerciseInput, "Left")}
//               disabled={
//                 exerciseInput.side === "Left" ||
//                 exerciseInput.side === "Both" ||
//                 selectedExercises.some(
//                   (e) =>
//                     e.name === exerciseInput.name && e.side === "Left"
//                 )
//               }
//             >
//               Duplicate Left
//             </button>
//             <button
//               className="menu-item"
//               onClick={() => duplicateExercise(exerciseInput, "Right")}
//               disabled={
//                 exerciseInput.side === "Right" ||
//                 exerciseInput.side === "Both" ||
//                 selectedExercises.some(
//                   (e) =>
//                     e.name === exerciseInput.name && e.side === "Right"
//                 )
//               }
//             >
//               Duplicate Right
//             </button>
//           </div>
//         )}
//       </div>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="exercises">
//           {(provided) => (
//             <ul
//               className="list-group"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {selectedExercises.map((exercise, index) => (
//                 <Draggable
//                   key={exercise.id}
//                   draggableId={`exercise-${exercise.id}`}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       className="list-group-item d-flex justify-content-between align-items-center"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <span>
//                         {exercise.name} - {exercise.sets} sets, {exercise.reps} reps,{" "}
//                         {exercise.holdTime} sec ({exercise.side})<br />
//                         Days: {Array.isArray(exercise.days) && exercise.days.length > 0 ? exercise.days.join(", ") : "None"}<br />
//                         Frequency: {exercise.frequency} sessions/day
//                       </span>

//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => removeExercise(index)}
//                       >
//                         Remove
//                       </button>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default ExerciseList;

// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { FaBars } from 'react-icons/fa'; // Importing hamburger icon

// const ExerciseList = () => {
//   const [selectedExercises, setSelectedExercises] = useState([]);
//   const [exerciseInput, setExerciseInput] = useState({
//     name: "",
//     sets: "",
//     reps: "",
//     holdTime: "",
//     side: "Both",
//     days: [],
//     frequency: 1,
//   });
//   const [notification, setNotification] = useState("");
//   const [menuOpen, setMenuOpen] = useState(null); // Track which exercise menu is open

//   const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

//   useEffect(() => {
//     const savedExercises = JSON.parse(localStorage.getItem("selectedExercises"));
//     if (savedExercises && Array.isArray(savedExercises)) {
//       setSelectedExercises(savedExercises);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("selectedExercises", JSON.stringify(selectedExercises));
//   }, [selectedExercises]);

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination || source.index === destination.index) return;

//     const updatedExercises = Array.from(selectedExercises);
//     const [movedExercise] = updatedExercises.splice(source.index, 1);
//     updatedExercises.splice(destination.index, 0, movedExercise);

//     setSelectedExercises(updatedExercises);
//   };

//   const removeExercise = (index) => {
//     const updatedList = [...selectedExercises];
//     updatedList.splice(index, 1);
//     setSelectedExercises(updatedList);
//   };

//   const duplicateExercise = (exercise, side) => {
//     const existingSides = selectedExercises
//       .filter((e) => e.name === exercise.name)
//       .map((e) => e.side);

//     // Avoid duplication if the side is already selected
//     if (existingSides.includes(side)) return;

//     const duplicatedExercise = {
//       ...exercise,
//       id: uuidv4(),
//       side: side,
//     };

//     setSelectedExercises((prev) => [...prev, duplicatedExercise]);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setExerciseInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleDaySelection = (day) => {
//     setExerciseInput((prev) => {
//       const newDays = prev.days.includes(day)
//         ? prev.days.filter((d) => d !== day)
//         : [...prev.days, day];
//       return { ...prev, days: newDays };
//     });
//   };

//   const addExercise = () => {
//     if (!exerciseInput.name || !exerciseInput.sets || !exerciseInput.reps) {
//       alert("Please fill in all the required fields!");
//       return;
//     }

//     const newExercise = {
//       ...exerciseInput,
//       id: uuidv4(),
//     };

//     setSelectedExercises((prev) => [...prev, newExercise]);
//     setNotification(`${exerciseInput.name} has been added!`);
//     setExerciseInput({
//       name: "",
//       sets: "",
//       reps: "",
//       holdTime: "",
//       side: "Both",
//       days: [],
//       frequency: 1,
//     });

//     setTimeout(() => {
//       setNotification("");
//     }, 3000);
//   };

//   // Toggle menu open/close for the specific exercise
//   const toggleMenu = (index) => {
//     setMenuOpen(menuOpen === index ? null : index); // Close if the same menu is clicked
//   };

//   return (
//     <div className="mt-4 container">
//       <h3>Selected Exercises</h3>

//       {notification && <div className="alert alert-success">{notification}</div>}

//       <div className="mb-3">
//         <h5>Add a New Exercise</h5>
//         <div className="row">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               placeholder="Exercise Name"
//               value={exerciseInput.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="sets"
//               placeholder="Sets"
//               value={exerciseInput.sets}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="reps"
//               placeholder="Reps"
//               value={exerciseInput.reps}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="holdTime"
//               placeholder="Hold Time (seconds)"
//               value={exerciseInput.holdTime}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               name="side"
//               value={exerciseInput.side}
//               onChange={handleInputChange}
//             >
//               <option value="Both">Both</option>
//               <option value="Left">Left</option>
//               <option value="Right">Right</option>
//             </select>
//           </div>
//           <div className="col">
//             <label>Select Days:</label>
//             <div className="days-selection">
//               {daysOfWeek.map((day) => (
//                 <label key={day} className="checkbox-inline">
//                   <input
//                     type="checkbox"
//                     checked={exerciseInput.days.includes(day)}
//                     onChange={() => handleDaySelection(day)}
//                   />
//                   {day}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="frequency"
//               placeholder="Sessions per day"
//               value={exerciseInput.frequency}
//               onChange={handleInputChange}
//               min="1"
//             />
//           </div>
//           <div className="col">
//             <button className="btn btn-primary" onClick={addExercise}>
//               Add Exercise
//             </button>
//           </div>
//         </div>
//       </div>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="exercises">
//           {(provided) => (
//             <ul
//               className="list-group"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {selectedExercises.map((exercise, index) => (
//                 <Draggable
//                   key={exercise.id}
//                   draggableId={`exercise-${exercise.id}`}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       className="list-group-item d-flex justify-content-between align-items-center"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <span>
//                         {exercise.name} - {exercise.sets} sets, {exercise.reps} reps,{" "}
//                         {exercise.holdTime} sec ({exercise.side})<br />
//                         Days: {Array.isArray(exercise.days) && exercise.days.length > 0 ? exercise.days.join(", ") : "None"}<br />
//                         Frequency: {exercise.frequency} sessions/day
//                       </span>

//                       {/* Hamburger Menu for Each Exercise */}
//                       <div className="hamburger-menu">
//                         <FaBars
//                           className="hamburger-icon"
//                           onClick={() => toggleMenu(index)} // Toggle menu for the clicked exercise
//                         />
//                         {menuOpen === index && (
//                           <div className="menu-items">
//                             <button
//                               className="menu-item"
//                               onClick={() => duplicateExercise(exercise, "Left")}
//                               disabled={
//                                 exercise.side === "Left" ||
//                                 exercise.side === "Both" ||
//                                 selectedExercises.some(
//                                   (e) => e.name === exercise.name && e.side === "Left"
//                                 )
//                               }
//                             >
//                               Duplicate Left
//                             </button>
//                             <button
//                               className="menu-item"
//                               onClick={() => duplicateExercise(exercise, "Right")}
//                               disabled={
//                                 exercise.side === "Right" ||
//                                 exercise.side === "Both" ||
//                                 selectedExercises.some(
//                                   (e) => e.name === exercise.name && e.side === "Right"
//                                 )
//                               }
//                             >
//                               Duplicate Right
//                             </button>
//                           </div>
//                         )}
//                       </div>

//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => removeExercise(index)}
//                       >
//                         Remove
//                       </button>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default ExerciseList;

// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { FaBars } from 'react-icons/fa'; // Importing hamburger icon

// const ExerciseList = () => {
//   const [selectedExercises, setSelectedExercises] = useState([]);
//   const [exerciseInput, setExerciseInput] = useState({
//     name: "",
//     sets: "",
//     reps: "",
//     holdTime: "",
//     side: "Both",
//     days: [],
//     frequency: 1,
//   });
//   const [notification, setNotification] = useState("");
//   const [menuOpen, setMenuOpen] = useState(null); // Track which exercise menu is open

//   const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

//   useEffect(() => {
//     const savedExercises = JSON.parse(localStorage.getItem("selectedExercises"));
//     if (savedExercises && Array.isArray(savedExercises)) {
//       setSelectedExercises(savedExercises);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("selectedExercises", JSON.stringify(selectedExercises));
//   }, [selectedExercises]);

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination || source.index === destination.index) return;

//     const updatedExercises = Array.from(selectedExercises);
//     const [movedExercise] = updatedExercises.splice(source.index, 1);
//     updatedExercises.splice(destination.index, 0, movedExercise);

//     setSelectedExercises(updatedExercises);
//   };

//   const removeExercise = (index) => {
//     const updatedList = [...selectedExercises];
//     updatedList.splice(index, 1);
//     setSelectedExercises(updatedList);
//   };

//   const duplicateExercise = (exercise, side) => {
//     const existingSides = selectedExercises
//       .filter((e) => e.name === exercise.name)
//       .map((e) => e.side);

//     // Avoid duplication if the side is already selected
//     if (existingSides.includes(side)) return;

//     const duplicatedExercise = {
//       ...exercise,
//       id: uuidv4(),
//       side: side,
//     };

//     setSelectedExercises((prev) => [...prev, duplicatedExercise]);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setExerciseInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleDaySelection = (day) => {
//     setExerciseInput((prev) => {
//       const newDays = prev.days.includes(day)
//         ? prev.days.filter((d) => d !== day)
//         : [...prev.days, day];
//       return { ...prev, days: newDays };
//     });
//   };

//   const addExercise = () => {
//     if (!exerciseInput.name || !exerciseInput.sets || !exerciseInput.reps) {
//       alert("Please fill in all the required fields!");
//       return;
//     }

//     const newExercise = {
//       ...exerciseInput,
//       id: uuidv4(),
//     };

//     setSelectedExercises((prev) => [...prev, newExercise]);
//     setNotification(`${exerciseInput.name} has been added!`);
//     setExerciseInput({
//       name: "",
//       sets: "",
//       reps: "",
//       holdTime: "",
//       side: "Both",
//       days: [],
//       frequency: 1,
//     });

//     setTimeout(() => {
//       setNotification("");
//     }, 3000);
//   };

//   // Toggle menu open/close for the specific exercise
//   const toggleMenu = (index) => {
//     setMenuOpen(menuOpen === index ? null : index); // Close if the same menu is clicked
//   };

//   return (
//     <div className="mt-4 container">
//       <h3>Selected Exercises</h3>

//       {notification && <div className="alert alert-success">{notification}</div>}

//       <div className="mb-3">
//         <h5>Add a New Exercise</h5>
//         <div className="row">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               placeholder="Exercise Name"
//               value={exerciseInput.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="sets"
//               placeholder="Sets"
//               value={exerciseInput.sets}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="reps"
//               placeholder="Reps"
//               value={exerciseInput.reps}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="holdTime"
//               placeholder="Hold Time (seconds)"
//               value={exerciseInput.holdTime}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               name="side"
//               value={exerciseInput.side}
//               onChange={handleInputChange}
//             >
//               <option value="Both">Both</option>
//               <option value="Left">Left</option>
//               <option value="Right">Right</option>
//             </select>
//           </div>
//           <div className="col">
//             <label>Select Days:</label>
//             <div className="days-selection">
//               {daysOfWeek.map((day) => (
//                 <label key={day} className="checkbox-inline">
//                   <input
//                     type="checkbox"
//                     checked={exerciseInput.days.includes(day)}
//                     onChange={() => handleDaySelection(day)}
//                   />
//                   {day}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="frequency"
//               placeholder="Sessions per day"
//               value={exerciseInput.frequency}
//               onChange={handleInputChange}
//               min="1"
//             />
//           </div>
//           <div className="col">
//             <button className="btn btn-primary" onClick={addExercise}>
//               Add Exercise
//             </button>
//           </div>
//         </div>
//       </div>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="exercises">
//           {(provided) => (
//             <ul
//               className="list-group"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {selectedExercises.map((exercise, index) => (
//                 <Draggable
//                   key={exercise.id}
//                   draggableId={`exercise-${exercise.id}`}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       className="list-group-item d-flex justify-content-between align-items-center"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <span>
//                         {exercise.name} - {exercise.sets} sets, {exercise.reps} reps,{" "}
//                         {exercise.holdTime} sec ({exercise.side})<br />
//                         Days: {Array.isArray(exercise.days) && exercise.days.length > 0 ? exercise.days.join(", ") : "None"}<br />
//                         Frequency: {exercise.frequency} sessions/day
//                       </span>

//                       {/* Hamburger Menu for Each Exercise */}
//                       <div className="hamburger-menu">
//                         <FaBars
//                           className="hamburger-icon"
//                           onClick={() => toggleMenu(index)} // Toggle menu for the clicked exercise
//                         />
//                         {menuOpen === index && (
//                           <div className="menu-items">
//                             <button
//                               className="menu-item"
//                               onClick={() => duplicateExercise(exercise, "Left")}
//                               disabled={
//                                 exercise.side === "Left" ||
//                                 exercise.side === "Both" ||
//                                 selectedExercises.some(
//                                   (e) => e.name === exercise.name && e.side === "Left"
//                                 )
//                               }
//                             >
//                               Duplicate Left
//                             </button>
//                             <button
//                               className="menu-item"
//                               onClick={() => duplicateExercise(exercise, "Right")}
//                               disabled={
//                                 exercise.side === "Right" ||
//                                 exercise.side === "Both" ||
//                                 selectedExercises.some(
//                                   (e) => e.name === exercise.name && e.side === "Right"
//                                 )
//                               }
//                             >
//                               Duplicate Right
//                             </button>
//                           </div>
//                         )}
//                       </div>

//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => removeExercise(index)}
//                       >
//                         Remove
//                       </button>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default ExerciseList;


// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { FaBars } from 'react-icons/fa'; // Importing hamburger icon
// import '../components/ExerciseList.css'


// const saveExercisesToServer = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/save-exercises", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(selectedExercises),
//     });

//     if (response.ok) {
//       alert("Exercises saved successfully!");
//     } else {
//       const errorData = await response.json();
//       alert(`Error: ${errorData.message}`);
//     }
//   } catch (error) {
//     console.error("Error saving exercises:", error);
//     alert("Failed to save exercises.");
//   }
// };


// const ExerciseList = () => {
//   const [selectedExercises, setSelectedExercises] = useState([]);
//   const [exerciseInput, setExerciseInput] = useState({
//     name: "",
//     sets: "",
//     reps: "",
//     holdTime: "",
//     side: "Both",
//     days: [],
//     frequency: 1,
//     therapistNotes: "", // Add therapistNotes state
//   });
//   const [notification, setNotification] = useState("");
//   const [menuOpen, setMenuOpen] = useState(null); // Track which exercise menu is open

//   const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

//   useEffect(() => {
//     const savedExercises = JSON.parse(localStorage.getItem("selectedExercises"));
//     if (savedExercises && Array.isArray(savedExercises)) {
//       setSelectedExercises(savedExercises);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("selectedExercises", JSON.stringify(selectedExercises));
//   }, [selectedExercises]);

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination || source.index === destination.index) return;

//     const updatedExercises = Array.from(selectedExercises);
//     const [movedExercise] = updatedExercises.splice(source.index, 1);
//     updatedExercises.splice(destination.index, 0, movedExercise);

//     setSelectedExercises(updatedExercises);
//   };

//   const removeExercise = (index) => {
//     const updatedList = [...selectedExercises];
//     updatedList.splice(index, 1);
//     setSelectedExercises(updatedList);
//   };

//   const duplicateExercise = (exercise, side) => {
//     const existingSides = selectedExercises
//       .filter((e) => e.name === exercise.name)
//       .map((e) => e.side);

//     // Avoid duplication if the side is already selected
//     if (existingSides.includes(side)) return;

//     const duplicatedExercise = {
//       ...exercise,
//       id: uuidv4(),
//       side: side,
//     };

//     setSelectedExercises((prev) => [...prev, duplicatedExercise]);

//     setMenuOpen(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setExerciseInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleDaySelection = (day) => {
//     setExerciseInput((prev) => {
//       const newDays = prev.days.includes(day)
//         ? prev.days.filter((d) => d !== day)
//         : [...prev.days, day];
//       return { ...prev, days: newDays };
//     });
//   };

//   const addExercise = () => {
//     if (!exerciseInput.name || !exerciseInput.sets || !exerciseInput.reps) {
//       alert("Please fill in all the required fields!");
//       return;
//     }

//     const newExercise = {
//       ...exerciseInput,
//       id: uuidv4(),
//     };

//     setSelectedExercises((prev) => [...prev, newExercise]);
//     setNotification(`${exerciseInput.name} has been added!`);
//     setExerciseInput({
//       name: "",
//       sets: "",
//       reps: "",
//       holdTime: "",
//       side: "Both",
//       days: [],
//       frequency: 1,
//       therapistNotes: "", // Reset therapist notes input
//     });

//     setTimeout(() => {
//       setNotification("");
//     }, 3000);
//   };

//   // Toggle menu open/close for the specific exercise
//   const toggleMenu = (index) => {
//     setMenuOpen(menuOpen === index ? null : index); // Close if the same menu is clicked
//   };

//   return (
//     <div className="mt-4 container">
//       <h3>Selected Exercises</h3>

//       {notification && <div className="alert alert-success">{notification}</div>}

//       <div className="mb-3">
//         <h5>Add a New Exercise</h5>
//         <div className="row">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               placeholder="Exercise Name"
//               value={exerciseInput.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="sets"
//               placeholder="Sets"
//               value={exerciseInput.sets}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="reps"
//               placeholder="Reps"
//               value={exerciseInput.reps}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="holdTime"
//               placeholder="Hold Time (seconds)"
//               value={exerciseInput.holdTime}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               name="side"
//               value={exerciseInput.side}
//               onChange={handleInputChange}
//             >
//               <option value="Both">Both</option>
//               <option value="Left">Left</option>
//               <option value="Right">Right</option>
//             </select>
//           </div>
//           <div className="col">
//             <label>Select Days:</label>
//             <div className="days-selection">
//               {daysOfWeek.map((day) => (
//                 <label key={day} className="checkbox-inline">
//                   <input
//                     type="checkbox"
//                     checked={exerciseInput.days.includes(day)}
//                     onChange={() => handleDaySelection(day)}
//                   />
//                   {day}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="frequency"
//               placeholder="Sessions per day"
//               value={exerciseInput.frequency}
//               onChange={handleInputChange}
//               min="1"
//             />
//           </div>
//           <div className="col">
//             <textarea
//               className="form-control"
//               name="therapistNotes"
//               placeholder="Therapist's Notes"
//               value={exerciseInput.therapistNotes}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <button className="btn btn-primary" onClick={addExercise}>
//               Add Exercise
//             </button>
//           </div>
//         </div>
//       </div>

//       <button className="btn btn-success" onClick={saveExercisesToServer}>Save Exercises</button>

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="exercises">
//           {(provided) => (
//             <ul
//               className="list-group"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {selectedExercises.map((exercise, index) => (
//                 <Draggable
//                   key={exercise.id}
//                   draggableId={`exercise-${exercise.id}`}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       className="list-group-item d-flex justify-content-between align-items-center"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <span>
//                         {exercise.name} - {exercise.sets} sets, {exercise.reps} reps,{" "}
//                         {exercise.holdTime} sec ({exercise.side})<br />
//                         Days: {Array.isArray(exercise.days) && exercise.days.length > 0 ? exercise.days.join(", ") : "None"}<br />
//                         Frequency: {exercise.frequency} sessions/day<br />
//                         Therapist's Notes: {exercise.therapistNotes || "None"}
//                       </span>

//                       {/* Hamburger Menu for Each Exercise */}
//                       <div className="d-flex align-items-center">
//                         <FaBars
//                           className="hamburger-icon"
//                           onClick={() => toggleMenu(index)} // Toggle menu for the clicked exercise
//                         />
//                         {menuOpen === index && (
//                           <div className="menu-items">
//                             <button
//                               className="menu-item"
//                               onClick={() => duplicateExercise(exercise, "Left")}
//                               disabled={exercise.side === "Left" || exercise.side === "Both" || selectedExercises.some((e) => e.name === exercise.name && e.side === "Left")}
//                             >
//                               Duplicate Left
//                             </button>
//                             <button
//                               className="menu-item"
//                               onClick={() => duplicateExercise(exercise, "Right")}
//                               disabled={exercise.side === "Right" || exercise.side === "Both" || selectedExercises.some((e) => e.name === exercise.name && e.side === "Right")}
//                             >
//                               Duplicate Right
//                             </button>
//                           </div>
//                         )}
//                         <button
//                           className="btn btn-danger btn-sm ms-3"
//                           onClick={() => removeExercise(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// };

// export default ExerciseList;


// import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import { FaBars } from 'react-icons/fa'; // Importing hamburger icon
// import '../components/ExerciseList.css';

// const ExerciseList = () => {
//   const [selectedExercises, setSelectedExercises] = useState([]);
//   const [exerciseInput, setExerciseInput] = useState({
//     name: "",
//     sets: "",
//     reps: "",
//     holdTime: "",
//     side: "Both",
//     days: [],
//     frequency: 1,
//     therapistNotes: "", // Add therapistNotes state
//   });
//   const [notification, setNotification] = useState("");
//   const [menuOpen, setMenuOpen] = useState(null); // Track which exercise menu is open
//   const [comboMode, setComboMode] = useState(false); // Toggle combo selection mode
//   const [comboSelection, setComboSelection] = useState([]); // Store selected exercises for combo
  
//   const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

//   useEffect(() => {
//     const savedExercises = JSON.parse(localStorage.getItem("selectedExercises"));
//     if (savedExercises && Array.isArray(savedExercises)) {
//       setSelectedExercises(savedExercises);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("selectedExercises", JSON.stringify(selectedExercises));
//   }, [selectedExercises]);

//   const onDragEnd = (result) => {
//     const { source, destination } = result;

//     if (!destination || source.index === destination.index) return;

//     const updatedExercises = Array.from(selectedExercises);
//     const [movedExercise] = updatedExercises.splice(source.index, 1);
//     updatedExercises.splice(destination.index, 0, movedExercise);

//     setSelectedExercises(updatedExercises);
//   };

//   const removeExercise = (index) => {
//     const updatedList = [...selectedExercises];
//     updatedList.splice(index, 1);
//     setSelectedExercises(updatedList);
//   };

//   const duplicateExercise = (exercise, side) => {
//     const existingSides = selectedExercises
//       .filter((e) => e.name === exercise.name)
//       .map((e) => e.side);

//     // Avoid duplication if the side is already selected
//     if (existingSides.includes(side)) return;

//     const duplicatedExercise = {
//       ...exercise,
//       id: uuidv4(),
//       side: side,
//     };

//     setSelectedExercises((prev) => [...prev, duplicatedExercise]);

//     setMenuOpen(null);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setExerciseInput((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleDaySelection = (day) => {
//     setExerciseInput((prev) => {
//       const newDays = prev.days.includes(day)
//         ? prev.days.filter((d) => d !== day)
//         : [...prev.days, day];
//       return { ...prev, days: newDays };
//     });
//   };

//   const addExercise = () => {
//     if (!exerciseInput.name || !exerciseInput.sets || !exerciseInput.reps) {
//       alert("Please fill in all the required fields!");
//       return;
//     }

//     const newExercise = {
//       ...exerciseInput,
//       id: uuidv4(),
//     };

//     setSelectedExercises((prev) => [...prev, newExercise]);
//     setNotification(`${exerciseInput.name} has been added!`);
//     setExerciseInput({
//       name: "",
//       sets: "",
//       reps: "",
//       holdTime: "",
//       side: "Both",
//       days: [],
//       frequency: 1,
//       therapistNotes: "", // Reset therapist notes input
//     });

//     setTimeout(() => {
//       setNotification("");
//     }, 3000);
//   };

//   // Toggle menu open/close for the specific exercise
//   const toggleMenu = (index) => {
//     setMenuOpen(menuOpen === index ? null : index); // Close if the same menu is clicked
//   };

//   const handleComboSelection = (exerciseId) => {
//     setComboSelection((prevSelection) => {
//       if (prevSelection.includes(exerciseId)) {
//         return prevSelection.filter(id => id !== exerciseId);
//       } else {
//         return [...prevSelection, exerciseId];
//       }
//     });
//   };

//   const createCombo = () => {
//     if (comboSelection.length === 0) {
//       alert("Please select exercises to form a combo.");
//       return;
//     }

//     const comboExercises = selectedExercises.filter(exercise =>
//       comboSelection.includes(exercise.id)
//     );

//     const combo = {
//       id: uuidv4(),
//       name: "Combo Exercise",
//       exercises: comboExercises,
//     };

//     setSelectedExercises((prev) => [...prev, combo]);
//     setComboSelection([]);
//     setComboMode(false); // Exit combo selection mode
//     setNotification("Combo has been created!");
//   }; 

//   // Save exercises to the server
//   const saveExercisesToServer = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/save-exercises", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(selectedExercises),
//       });

//       if (response.ok) {
//         alert("Exercises saved successfully!");
//       } else {
//         const errorData = await response.json();
//         alert(`Error: ${errorData.message}`);
//       }
//     } catch (error) {
//       console.error("Error saving exercises:", error);
//       alert("Failed to save exercises.");
//     }
//   };

//   return (
//     <div className="mt-4 container">
      

//       {notification && <div className="alert alert-success">{notification}</div>}
      
    
//       <div className="mb-3">
//         <h5>Add a New Exercise</h5>
//         <div className="row">
//           <div className="col">
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               placeholder="Exercise Name"
//               value={exerciseInput.name}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="sets"
//               placeholder="Sets"
//               value={exerciseInput.sets}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="reps"
//               placeholder="Reps"
//               value={exerciseInput.reps}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="holdTime"
//               placeholder="Hold Time (seconds)"
//               value={exerciseInput.holdTime}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <select
//               className="form-control"
//               name="side"
//               value={exerciseInput.side}
//               onChange={handleInputChange}
//             >
//               <option value="Both">Both</option>
//               <option value="Left">Left</option>
//               <option value="Right">Right</option>
//             </select>
//           </div>
//           <div className="col">
//             <label>Select Days:</label>
//             <div className="days-selection">
//               {daysOfWeek.map((day) => (
//                 <label key={day} className="checkbox-inline">
//                   <input
//                     type="checkbox"
//                     checked={exerciseInput.days.includes(day)}
//                     onChange={() => handleDaySelection(day)}
//                   />
//                   {day}
//                 </label>
//               ))}
//             </div>
//           </div>
//           <div className="col">
//             <input
//               type="number"
//               className="form-control"
//               name="frequency"
//               placeholder="Sessions per day"
//               value={exerciseInput.frequency}
//               onChange={handleInputChange}
//               min="1"
//             />
//           </div>
//           <div className="col">
//             <textarea
//               className="form-control"
//               name="therapistNotes"
//               placeholder="Therapist's Notes"
//               value={exerciseInput.therapistNotes}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div className="col">
//             <button className="btn btn-primary" onClick={addExercise}>
//               Add Exercise
//             </button>
//           </div>
//         </div>
//       </div>

   

//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="exercises">
//           {(provided) => (
//             <ul
//               className="list-group"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {selectedExercises.map((exercise, index) => (
//                 <Draggable
//                   key={exercise.id}
//                   draggableId={`exercise-${exercise.id}`}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       className="list-group-item d-flex justify-content-between align-items-center"
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                     >
//                       <span>
//                         {exercise.name} - {exercise.sets} sets, {exercise.reps} reps,{" "}
//                         {exercise.holdTime} sec ({exercise.side})<br />
//                         Days: {Array.isArray(exercise.days) && exercise.days.length > 0 ? exercise.days.join(", ") : "None"}<br />
//                         Frequency: {exercise.frequency} sessions/day<br />
//                         Therapist's Notes: {exercise.therapistNotes || "None"}
//                       </span>

//                       {/* Hamburger Menu for Each Exercise */}
//                       <div className="d-flex align-items-center">
//                         <FaBars
//                           className="hamburger-icon"
//                           onClick={() => toggleMenu(index)} // Toggle menu for the clicked exercise
//                         />
//                         {menuOpen === index && (
//                           <div className="menu-items">
//                             <button
//                               className="menu-item"
//                               onClick={() => duplicateExercise(exercise, "Left")}
//                               disabled={exercise.side === "Left" || exercise.side === "Both" || selectedExercises.some((e) => e.name === exercise.name && e.side === "Left")}
//                             >
//                               Duplicate Left
//                             </button>
//                             <button
//                               className="menu-item"
//                               onClick={() => duplicateExercise(exercise, "Right")}
//                               disabled={exercise.side === "Right" || exercise.side === "Both" || selectedExercises.some((e) => e.name === exercise.name && e.side === "Right")}
//                             >
//                               Duplicate Right
//                             </button>
//                           </div>
//                         )}
//                         <button
//                           className="btn btn-danger btn-sm ms-3"
//                           onClick={() => removeExercise(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     <br/>

//       <button className="btn btn-success" onClick={saveExercisesToServer}>Save Exercises</button>
      
//   {/* Combo selection button */}
//   <button className="btn btn-primary" onClick={() => setComboMode(!comboMode)}>
//         {comboMode ? "Cancel Combo" : "Create Combo"}
//       </button>

//       {comboMode && (
//         <div>
//           <h4>Select Exercises to Add to Combo</h4>
//           <div className="list-group">
//             {selectedExercises.map((exercise) => (
//               <div key={exercise.id} className="list-group-item">
//                 <input
//                   type="checkbox"
//                   checked={comboSelection.includes(exercise.id)}
//                   onChange={() => handleComboSelection(exercise.id)}
//                 />
//                 {exercise.name}
//               </div>
//             ))}
//           </div>
//           <button className="btn btn-success mt-2" onClick={createCombo}>Create Combo</button>
//         </div>
//       )}

//     </div>

//   );
  
// };

// export default ExerciseList;




import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaBars } from 'react-icons/fa'; // Importing hamburger icon
import '../components/ExerciseList.css';

const ExerciseList = () => {
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [exerciseInput, setExerciseInput] = useState({
    bodyPart: "",   
    exerciseName: "",
    sets: "",
    reps: "",
    holdTime: "",
    side: "Both",
    days: [],
    frequency: 1,
    therapistNotes: "", // Add therapistNotes state
  });
  const [notification, setNotification] = useState("");
  const [menuOpen, setMenuOpen] = useState(null); // Track which exercise menu is open
  const [comboMode, setComboMode] = useState(false); // Toggle combo selection mode
  const [comboSelection, setComboSelection] = useState([]); // Store selected exercises for combo
  const [availableExercises, setAvailableExercises] = useState([]);
  
  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

   // Dataset mapping body parts to exercises
  const bodyPartExercises = {
    Neck: ["Neck Stretch", "Chin Tucks", "Neck Rotation"],
    Shoulder: ["Shoulder Shrugs", "Arm Circles", "Wall Push-ups"],
    Hand: ["Finger Stretch", "Grip Strengthening", "Wrist Circles"],
    Leg: ["Squats", "Lunges", "Leg Raises"],
  };

  // Handle body part selection
  const handleBodyPartChange = (e) => {
    const selectedBodyPart = e.target.value;
    setExerciseInput((prev) => ({
      ...prev,
      bodyPart: selectedBodyPart,
      exerciseName: "", // Reset the exercise name when the body part changes
    }));

    // // Update the available exercises based on the selected body part
    // if (bodyPartExercises[selectedBodyPart]) {
    //   setAvailableExercises([
    //     ...bodyPartExercises[selectedBodyPart],
    //     ...selectedExercises.map((exercise) => exercise.name), // Include already selected exercises
    //   ]);
    // } else {
    //   setAvailableExercises([]);
    // }

    if (bodyPartExercises[selectedBodyPart]) {
      setAvailableExercises(
        bodyPartExercises[selectedBodyPart].filter(
          (exercise) => !selectedExercises.some((e) => e.exerciseName === exercise)
        )
      );
    } else {
      setAvailableExercises([]);
    }

  };

  

    // Predefined body parts
    const bodyParts = ["Neck", "Shoulder", "Hand", "Leg", "Back", "Arm", "Knee"];

  useEffect(() => {
    const savedExercises = JSON.parse(localStorage.getItem("selectedExercises"));
    if (savedExercises && Array.isArray(savedExercises)) {
      setSelectedExercises(savedExercises);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("selectedExercises", JSON.stringify(selectedExercises));
  }, [selectedExercises]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination || source.index === destination.index) return;

    const updatedExercises = Array.from(selectedExercises);
    const [movedExercise] = updatedExercises.splice(source.index, 1);
    updatedExercises.splice(destination.index, 0, movedExercise);

    setSelectedExercises(updatedExercises);
  };

  const removeExercise = (index) => {
    const updatedList = [...selectedExercises];
    updatedList.splice(index, 1);
    setSelectedExercises(updatedList);
  };

  const duplicateExercise = (exercise, side) => {
    const existingSides = selectedExercises
      .filter((e) => e.name === exercise.name)
      .map((e) => e.side);

    // Avoid duplication if the side is already selected
    if (existingSides.includes(side)) return;

    const duplicatedExercise = {
      ...exercise,
      id: uuidv4(),
      side: side,
    };

    setSelectedExercises((prev) => [...prev, duplicatedExercise]);

    setMenuOpen(null);
  };

  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setExerciseInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDaySelection = (day) => {
    setExerciseInput((prev) => {
      const newDays = prev.days.includes(day)
        ? prev.days.filter((d) => d !== day)
        : [...prev.days, day];
      return { ...prev, days: newDays };
    });
  };

  const addExercise = () => {
    if (!exerciseInput.bodyPart || !exerciseInput.exerciseName || !exerciseInput.sets || !exerciseInput.reps) {
      alert("Please fill in all the required fields!");
      return;
    }

    const newExercise = {
      ...exerciseInput,
      id: uuidv4(),
    };

    setSelectedExercises((prev) => [...prev, newExercise]);

     // Update available exercises
  const updatedExercises = availableExercises.filter(
    (exercise) => exercise !== exerciseInput.exerciseName
  );
  setAvailableExercises(updatedExercises);


    setNotification(`${exerciseInput.bodyPart} Exercise has been added!`);
    setExerciseInput({
      bodyPart: "",
      exerciseName: "",
      sets: "",
      reps: "",
      holdTime: "",
      side: "Both",
      days: [],
      frequency: 1,
      therapistNotes: "", // Reset therapist notes input
    });

    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  // Toggle menu open/close for the specific exercise
  const toggleMenu = (index) => {
    setMenuOpen(menuOpen === index ? null : index); // Close if the same menu is clicked
  };

  const handleComboSelection = (exerciseId) => {
    setComboSelection((prevSelection) => {
      if (prevSelection.includes(exerciseId)) {
        return prevSelection.filter(id => id !== exerciseId);
      } else {
        return [...prevSelection, exerciseId];
      }
    });
  };

  const createCombo = () => {
    if (comboSelection.length === 0) {
      alert("Please select exercises to form a combo.");
      return;
    }

    const comboExercises = selectedExercises.filter(exercise =>
      comboSelection.includes(exercise.id)
    );

    const combo = {
      id: uuidv4(),
      name: "Combo Exercise",
      exercises: comboExercises,
    };
    
    // Add combo to selected exercises
  setSelectedExercises((prev) => [...prev, combo]);
  
  // Clear the combo selection and exit combo mode
  setComboSelection([]);
  setComboMode(false);
   
   // Provide a notification
   setNotification("Combo has been created!");
   setTimeout(() => {
     setNotification("");
   }, 3000);

    setSelectedExercises((prev) => [...prev, combo]);
    setComboSelection([]);
    setComboMode(false); // Exit combo selection mode
    setNotification("Combo has been created!");
  }; 

  // Save exercises to the server
  const saveExercisesToServer = async () => {
    try {
      const response = await fetch("http://localhost:5000/save-exercises", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedExercises),
      });

      if (response.ok) {
        alert("Exercises saved successfully!");
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error saving exercises:", error);
      alert("Failed to save exercises.");
    }
  };

   // Clear All function
   const clearAll = () => {
    setSelectedExercises([]);
    setExerciseInput({
      bodyPart: "",
      exerciseName: "",
      sets: "",
      reps: "",
      holdTime: "",
      side: "Both",
      days: [],
      frequency: 1,
      therapistNotes: "",
    });
    setNotification("All exercises have been cleared.");
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };


  return (
    <div className="mt-4 container"> 
      

      {notification && <div className="alert alert-success">{notification}</div>}
      
    
      <div className="mb-3">
        <h5>Add a New Exercise</h5>
        <div className="row">
         {/* Body Part Dropdown */}
         <div className="col">
            <select
              className="form-control"
              name="bodyPart"
              value={exerciseInput.bodyPart}
              onChange={handleBodyPartChange}
            >
              <option value="">Select Body Part</option>
              {Object.keys(bodyPartExercises).map((bodyPart) => (
                <option key={bodyPart} value={bodyPart}>
                  {bodyPart}
                </option>
              ))}
            </select>
          </div>
          {/* Exercises Dropdown */}
          <div className="col">
            <select
              className="form-control"
              name="exerciseName"
              value={exerciseInput.exerciseName}
              onChange={handleInputChange}
              disabled={!exerciseInput.bodyPart} // Disable if no body part is selected
            >
              <option value="">Select Exercise</option>
              {availableExercises.map((exercise) => (
                <option key={exercise} value={exercise}>
                  {exercise}
                </option>
              ))}
            </select>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="sets"
              placeholder="Sets"
              value={exerciseInput.sets}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="reps"
              placeholder="Reps"
              value={exerciseInput.reps}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="holdTime"
              placeholder="Hold Time (seconds)"
              value={exerciseInput.holdTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <select
              className="form-control"
              name="side"
              value={exerciseInput.side}
              onChange={handleInputChange}
            >
              <option value="Both">Both</option>
              <option value="Left">Left</option>
              <option value="Right">Right</option>
            </select>
          </div>
          <div className="col">
            <label>Select Days:</label>
            <div className="days-selection">
              {daysOfWeek.map((day) => (
                <label key={day} className="checkbox-inline">
                  <input
                    type="checkbox"
                    checked={exerciseInput.days.includes(day)}
                    onChange={() => handleDaySelection(day)}
                  />
                  {day}
                </label>
              ))}
            </div>
          </div>
          <div className="col">
            <input
              type="number"
              className="form-control"
              name="frequency"
              placeholder="Sessions per day"
              value={exerciseInput.frequency}
              onChange={handleInputChange}
              min="1"
            />
          </div>
          <div className="col">
            <textarea
              className="form-control"
              name="therapistNotes"
              placeholder="Therapist's Notes"
              value={exerciseInput.therapistNotes}
              onChange={handleInputChange}
            />
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={addExercise}>
              Add Exercise
            </button>
          </div>
        </div>
      </div>

    {/* Clear All Button */}
    <button
        className="btn btn-danger"
        onClick={clearAll}
      >
        Clear All
      </button>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="exercises">
          {(provided) => (
            <ul
              className="list-group"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {selectedExercises.map((exercise, index) => (
                <Draggable
                  key={exercise.id}
                  draggableId={`exercise-${exercise.id}`}
                  index={index}
                >
                  {(provided) => (
                    <li
                      className="list-group-item d-flex justify-content-between align-items-center"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <span>
                        {exercise.name} - {exercise.sets} sets, {exercise.reps} reps,{" "}
                        {exercise.holdTime} sec ({exercise.side})<br />
                        Days: {Array.isArray(exercise.days) && exercise.days.length > 0 ? exercise.days.join(", ") : "None"}<br />
                        Frequency: {exercise.frequency} sessions/day<br />
                        Therapist's Notes: {exercise.therapistNotes || "None"}
                      </span>

                      {/* Hamburger Menu for Each Exercise */}
                      <div className="d-flex align-items-center">
                        <FaBars
                          className="hamburger-icon"
                          onClick={() => toggleMenu(index)} // Toggle menu for the clicked exercise
                        />
                        {menuOpen === index && (
                          <div className="menu-items">
                            <button
                              className="menu-item"
                              onClick={() => duplicateExercise(exercise, "Left")}
                              disabled={exercise.side === "Left" || exercise.side === "Both" || selectedExercises.some((e) => e.name === exercise.name && e.side === "Left")}
                            >
                              Duplicate Left
                            </button>
                            <button
                              className="menu-item"
                              onClick={() => duplicateExercise(exercise, "Right")}
                              disabled={exercise.side === "Right" || exercise.side === "Both" || selectedExercises.some((e) => e.name === exercise.name && e.side === "Right")}
                            >
                              Duplicate Right
                            </button>
                          </div>
                        )}
                        <button
                          className="btn btn-danger btn-sm ms-3"
                          onClick={() => removeExercise(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    <br/>

      <button className="btn btn-success" onClick={saveExercisesToServer}>Save Exercises</button>
      
  {/* Combo selection button */}
  <button className="btn btn-primary" onClick={() => setComboMode(!comboMode)}>
        {comboMode ? "Cancel Combo" : "Create Combo"}
      </button>

      {comboMode && (
       <div>
       <h4>Select Exercises to Add to Combo</h4>
       <div className="list-group">
         {selectedExercises.length > 0 ? (
           selectedExercises.map((exercise) => (
             <div key={exercise.id} className="list-group-item">
               <input
                 type="checkbox"
                 checked={comboSelection.includes(exercise.id)}
                 onChange={() => handleComboSelection(exercise.id)}
               />
               {exercise.exerciseName || "Unnamed Exercise"}
             </div>
           ))
         ) : (
           <div>No exercises available for combo.</div>
         )}
       </div>
       <button
         className="btn btn-success mt-2"
         onClick={createCombo}
         disabled={comboSelection.length === 0} // Disable button if no exercises are selected
       >
         Create Combo
       </button>
     </div>
      )}

    </div>

  );
  
};

export default ExerciseList;




    