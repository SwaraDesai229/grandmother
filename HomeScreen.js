import React,{Component, component} from "react";
import{
View,
Text,
StylesSheet,
Platform,
StatusBar,
SafeAreaView,
TouchableOpacity,
ImageBackground
} from"react-native";

export default class HomeScreen extends Component {
    

    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={StylesSheet.androidSafeArea}/>
                <ImageBackground source={require('../assets/Grandmother.jpeg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                  <Text style={styles.titletext}> Grandmother</Text>
                    </View>

                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routetext}>Gardening</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard}>
                        <Text style={styles.routeText}>Grandmother</Text>
                    </TouchableOpacity>
                </ImageBackground>

                <View style={styles.titleBar}>
          <Text style={styles.titleText}>Grandmother </Text>
       </View>
        
        <TouchableOpacity style={styles.routeCard} onPress={() =>
        this.props.navigation.navigate("gardening")
    }>
        
            <Text style={styles.routeText}>gardening</Text>
            <Text style={styles.knowMore}>{"KnowMore --->"}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image source={require("../assets/Computer.webp")} style={styles.iconImage}></Image>
  </TouchableOpacity>

       <TouchableOpacity style={styles.routeCard}>
     <Text style={styles.routetext}>grandmother</Text>
     <Text style={styles.knowMore}>{"know More --->"}</Text>
     <Text style={styles.bgDigit}>2</Text>
     <Image source={require("../assets/grandmother.jpeg")} style={styles.iconImage}></Image>
       </TouchableOpacity>

        </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
    flex:1
},
androidSafeArea:{
    marginTop:Platform.OS==="android"? StatusBar.currentheight:0
},
backgroundImage:{
    flex:1,
    resizeMode:'cover',
},
routeCard:{
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    borderRadius:30,
    backgroundColor:'white'
},

titleText:{
    fontsize:40,
    fontWeight:"bold",
    color:"white"
},

routetext:{
    fontSize:35,
    fontWeight:"bold",
    color:"black",
    marginTop:75,
    paddingLeft:30
},

knowMore:{
    paddingleft:30,
    color:"red",
    fontSize:15
},
bgDigit:{
    position:"absoulte",
    color:"rgba(183,183,183,0.5)",
    fontSize:150,
    right:20,
    bottom:-15,
    zindex:-1,
},
iconImage:{
    position:"absoulte",
    height:200,
    width:200,
    resizeMode:"contain",
    right:20,
    top:-80
}
});
