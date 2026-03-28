import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";
import ChatPage from "./pages/chat/ChatPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default App;