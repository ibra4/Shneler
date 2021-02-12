import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { style } from "../assets/style";
import Layout from "../compnents/Layout/Layout";
import { Grades } from '../assets/Data/Grades'

function Classes() {

  const renderGradeItem = (item, idx) => {
    return <TouchableOpacity
      key={idx}
      onPress={() => Actions.push("Materials", { routeSlug: item.routeSlug })}
      style={[style.classItem, style.shadowBottom]}
    >
      <Image
        source={item.icon}
        style={style.icon30}
      />
      <Text style={style.classItemText}>{item.label}</Text>
    </TouchableOpacity>
  }

  return (
    <Layout title="الصفوف">
      {Grades.map((item, idx) => renderGradeItem(item, idx))}
    </Layout>
  );
}

export default Classes;
