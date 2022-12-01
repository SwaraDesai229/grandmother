const Tab=createBottomTabNaviagtor();

export default function App(){
    return(
       <NavigationContainer>
           <Tab.Navigator
         screenOptions={({route})=>({
        tabBarIcon:({focused,color,size})=>{
            let iconName;
            if(route.name==='Feed'){
                iconName=focused
                ?'book'
                :"book-outline";
        } else if(route.Name==='CreatStory'){
            icponName=focused ?'create':'create-outline';
        }
        return <IonIcons name={iconName}size={size}color={color}/>;
    },
      })}
      tabBarOptions={{
          TintColor:'tomato',
          inactiveTintColor:'gray',
      }}
    >
     <Tab.Screen name="Feed" component={Feed}/>
     <Tab.Screen name="CreateStory"component={CreateStory}/>
       </Tab.Navigator>
       </NavigationContainer>
    );
}