import { Text, Platform, View } from "react-native";
import { Estudiantes, Comidas } from "./screens";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 50,
    background: "#1b1b1b"
  }
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Estudiantes"
          component={Estudiantes}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Octicons name="person-fill" size={24} color={focused ? "#16247d" : "#111"} />
                </View>
              )
            }
          }}
        />

        <Tab.Screen
          name="Comidas"
          component={Comidas}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <Ionicons name="fast-food-sharp" size={24} color={focused ? "#16247d" : "#111"} />
                </View>
              )
            }
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  )
}