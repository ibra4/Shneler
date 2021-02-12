import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { style } from "../assets/style";
import Layout from "../compnents/Layout/Layout";

function Materials() {
  return (
    <Layout title="المواد">
      <TouchableOpacity
        onPress={() => Actions.push("WebView")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/ar.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>عربي</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("WebView")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/maths.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>رياضيات</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("WebView")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/en.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>انجليزي</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("WebView")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/bio.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>احياء</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("WebView")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/chem.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>كيمياء</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("WebView")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/phys.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>فيزياء</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Actions.push("WebView")}
        style={[style.classItem, style.shadowBottom]}
      >
        <Image
          source={require("../assets/images/geo.png")}
          style={style.icon30}
        />
        <Text style={style.classItemText}>علوم ارض</Text>
      </TouchableOpacity>
    </Layout>
  );
}

export default Materials;
