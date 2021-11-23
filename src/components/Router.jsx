import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Results } from "./Resuts";

export const Router = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
      </Routes>
      <Routes>
        <Route path="/search" element={<Results />} />
      </Routes>
      <Routes>
        <Route path="/images" element={<Results />} />
      </Routes>
      <Routes>
        <Route path="/news" element={<Results />} />
      </Routes>
      <Routes>
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};
