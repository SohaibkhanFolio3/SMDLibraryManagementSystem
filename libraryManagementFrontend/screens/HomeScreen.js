import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useDispatch } from "react-redux";
import { logout } from "../store/actions/UserActions";
import styles from "./styles";
import componentstyles from "../components/componentstyles";
import AppLogo from "../components/AppLogo";
import AppRoutes from "../constants/AppRoutes";

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const handleShowBookings = () => {
    navigation.navigate(AppRoutes.BOOKING);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ImageBackground
      source={{ uri: "https://i.ibb.co/31YJYKp/background.jpg" }}
      style={styles.container}
    >
      <AppLogo />
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate(AppRoutes.PICK);
        }}
      >
        <Text style={styles.loginbuttonText}>Issue a Book</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate(AppRoutes.PICK);
        }}
      >
        <Text style={styles.loginbuttonText}>Show Issued Books</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate(AppRoutes.ADDWALLET);
        }}
      >
        <Text style={styles.loginbuttonText}>Manage Books</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogout}>
        <Text style={styles.loginbuttonText}>Logout</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
