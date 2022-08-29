import React from "react";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import RecipeDetails from "./pages/RecipeDetails";
import Recipes from "./pages/Recipes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recipes />} />

        <Route path="/recipes">
          <Route path=":id" element={<RecipeDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

// пример
// function App() {
//   return (
//     <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Users />} />

//         <Route path="/user" element={<User />}>
//           <Route path=":id" element={<User />} />
//         </Route>
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

export default App;
