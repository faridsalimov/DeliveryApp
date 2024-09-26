import Categories from "./categories";
import Splash from "./splash";
import Products from "./products";
import Basket from "./basket";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect, useState } from "react";
import * as Font from "expo-font";
import { FontAwesome } from "@expo/vector-icons";
import Payment from "./payment";
import Checkout from "./checkout";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "SF-PRO-BOLD": require("../assets/fonts/SF_PRO_BOLD.otf"),
        "SF-PRO-MEDIUM": require("../assets/fonts/SF_PRO_MEDIUM.otf"),
        "SF-PRO-REGULAR": require("../assets/fonts/SF_PRO_REGULAR.otf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  const StackNavigator = () => (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="splash" component={Splash} />
      <Stack.Screen name="categories" component={Categories} />
      <Stack.Screen name="products" component={Products} />
      <Stack.Screen name="basket" component={Basket} />
      <Stack.Screen name="checkout" component={Checkout} />
      <Stack.Screen name="payment" component={Payment} />
    </Stack.Navigator>
  );

  return (
    <>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="CategoriesTab"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === "CategoriesTab") {
                iconName = "th-large";
              } else if (
                route.name === "BasketTab" ||
                route.name === "payment" ||
                route.name === "checkout"
              ) {
                iconName = "shopping-cart";
              }

              return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#7203FF",
            tabBarInactiveTintColor: "#9586A8",
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#FFFFFF",
              borderTopWidth: 1,
              elevation: 5,
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="CategoriesTab" component={StackNavigator} />
          <Tab.Screen name="BasketTab" component={Basket} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}
