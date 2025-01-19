import { legacy_createStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/contact/contactReducer";

export default function configureTheStore() {
  return legacy_createStore(counterReducer);
}