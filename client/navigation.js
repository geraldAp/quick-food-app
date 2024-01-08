import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealInfoScreen from "./screens/MealInfoScreen";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        activeTintColor: "orange", // Change this to the color you want for active tabs
      }}
      tabBarStyle={{
        backgroundColor: "#3498db", // Set your desired background color
        borderTopLeftRadius: 20, // Adjust the border radius to create rounded corners
        borderTopRightRadius: 20,
        height: 60,
      }}
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
          tabBarBadge: 3,
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
        {/* <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="OrderPreparing"
          options={{
            presentation: "fullScreenModal",
          }}
          component={OrderPreparingScreen}
        />
        <Stack.Screen
          name="Delivery"
          options={{
            presentation: "fullScreenModal",
          }}
          component={DeliveryScreen}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
