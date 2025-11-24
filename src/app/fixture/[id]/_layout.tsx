import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Stack, withLayoutContext } from "expo-router";
import { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SourceToColours } from "../../../Constants/DataSources";
import { DataContext } from "../../_layout";

const Tab = createMaterialTopTabNavigator();
const TopTabs = withLayoutContext(Tab.Navigator);

// 🧠 Custom 2-row Tab Bar
function TwoRowTabBar({ state, descriptors, navigation }) {
  const tabs = state.routes;
  const half = Math.ceil(tabs.length / 2);
  const colors = SourceToColours(useContext(DataContext));

  const renderTab = (route, index, isFocused) => {
    const { options } = descriptors[route.key];
    const label =
      options.title !== undefined
        ? options.title
        : route.name.charAt(0).toUpperCase() + route.name.slice(1);

    return (
      <TouchableOpacity
        key={route.key}
        onPress={() => navigation.navigate(route.name)}
        style={{
          flex: 1,
          alignItems: "center",
          paddingVertical: 10,
          borderBottomWidth: 4,
          borderBottomColor: isFocused ? "white" : "transparent",
        }}
      >
        <Text style={{ color: isFocused ? "white" : "gainsboro", fontWeight: isFocused ? "bold" : "normal" }}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        backgroundColor: colors.primary,
        paddingVertical: 4,
      }}
    >
      {/* First Row */}
      <View style={{ flexDirection: "row" }}>
        {tabs.slice(0, half).map((route, i) =>
          renderTab(route, i, state.index === i)
        )}
      </View>
      {/* Second Row */}
      <View style={{ flexDirection: "row" }}>
        {tabs.slice(half).map((route, i) =>
          renderTab(route, i + half, state.index === i + half)
        )}
      </View>
    </View>
  );
}

// 🏟️ Main Layout
export default function MatchLayout() {
  const dataSource = useContext(DataContext);

  return (
    <>
      <Stack.Screen options={{ title: "Match Details" }} />
      <TopTabs
        tabBar={(props) => <TwoRowTabBar {...props} />}
        screenOptions={{
          swipeEnabled: true,
          lazy: true,
        }}
      >
        <TopTabs.Screen name="index" options={{ title: "Details" }} />
        <TopTabs.Screen name="squad" options={{ title: "Squad" }} />
        <TopTabs.Screen name="nwcltable" options={{ title: "Table" }} />
        <TopTabs.Screen name="stats" options={{ title: "About" }} />
        <TopTabs.Screen name="form" options={{ title: "Matchday" }} />
        <TopTabs.Screen name="media" options={{ title: "History" }} />
      </TopTabs>
    </>
  );
}
