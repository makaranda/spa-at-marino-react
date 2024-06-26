import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}
