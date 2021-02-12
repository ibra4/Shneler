import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { style } from "../assets/style";
import Layout from "../compnents/Layout/Layout";

function Classes() {
  return (
    <Layout title="الصفوف">
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف الاول</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف الثاني</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف الثالث</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف الرابع</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف الخامس</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف السادس</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف السابع</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف الثامن</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف التاسع</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("Materials")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/kg2.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>الصف العاشر</Text>
      </TouchableOpacity>
    </Layout>
  );
}

export default Classes;
