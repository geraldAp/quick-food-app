import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
// import RestaurantScreen from "./screens/RestaurantScreen";
// import CartScreen from "./screens/CartScreen";
// import OrderPreparingScreen from "./screens/OrderPreparingScreen";
// import DeliveryScreen from "./screens/DeliveryScreen";
const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        {/* <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen
          name="Cart"
          options={{
            presentation: "modal",
          }}
          component={CartScreen}
        />
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