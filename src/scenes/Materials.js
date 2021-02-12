import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
import { style } from "../assets/style";
import Layout from "../compnents/Layout/Layout";
import { GradeMaterials } from '../assets/Data/GradeMaterials'

function Materials({ routeSlug }) {

  const [materialsList, setMaterialsList] = useState(null)

  useEffect(() => {
    if (parseInt(routeSlug) in GradeMaterials) {
      setMaterialsList(GradeMaterials[parseInt(routeSlug)])
    } else {
      alert('not found')
    }
  }, [])

  const renderMaterial = (material, idx) => {
    console.log('material', material)
    return <TouchableOpacity
      key={idx}
      onPress={() => Actions.push("WebView")}
      style={[style.classItem, style.shadowBottom]}
    >
      <Image
        source={material.icon}
        style={style.icon30}
      />
      <Text style={style.classItemText}>{material.label}</Text>
    </TouchableOpacity>
  }

  return (
    <Layout title="المواد">

      {materialsList ? materialsList.map((item, idx) => renderMaterial(item, idx)) : <Text>Not found !!</Text>}

    </Layout>
  );
}

export default Materials;
