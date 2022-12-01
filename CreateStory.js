import React,{component} from 'react';
import {Text,View} from "react-native"

export default class CreateStory extends Component {
    render(){
        return(
            <View>
                style={{
                    flex:1.5,
                    justifyContent:"center",
                    alignItems:"center"
                }}
                <Text>Create Story</Text>
            </View>
        )
    }
}