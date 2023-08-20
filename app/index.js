import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter, Stack } from "expo-router";
import { COLORS, icons, images, SIZES } from "../constants";
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn,
  Welcome,
} from "../components";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Text>Home hi</Text>
    </SafeAreaView>
  );
};

export default Home;
