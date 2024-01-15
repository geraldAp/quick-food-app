import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealInfoScreen from "./screens/MealInfoScreen";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { selectCartCount } from "./store/slices/cartSlice";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
   
  const itemCount = useSelector(selectCartCount)

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false,   tabBarActiveTintColor: 'orange',   tabBarStyle:{
        // backgroundColor: "#3498db", // Set your desired background color
        borderTopLeftRadius: 20, // Adjust the border radius to create rounded corners
        borderTopRightRadius: 20,
        // height: 60,
      }}}
    
     
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" size={size} color={color} />
          ),
          tabBarBadge: itemCount,
          tabBarBadgeStyle: { backgroundColor: 'orange', color: 'white' },
          tabBarStyle:{display: "none"}
        }}
        

      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen
          name="mealDetails"
          options={{
            presentation: "modal",
          }}
          component={MealInfoScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
