import React from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function CoffeeTable() {
  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}
