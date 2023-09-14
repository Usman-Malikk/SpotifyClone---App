import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, TouchableOpacity, View } from 'react-native';
import Signup from '../Views/Session/Signup';
import Home from '../Views/Home/Home';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../Assets/Colors';
import TopDis from '../components/TopDis';
import CustomDrawer from '../components/CustomDrawer.js';


export default function MainNavigation() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator()
    const Drawer = createDrawerNavigator()


    const ProfileScreen = () => {
        return <View style={{ display: "flex", flex: 1, backgroundColor: Colors.SpotifyThemeGradient.black2 }}>
            <TopDis />
            <View ><Text style={{ color: 'white', fontSize: 40 }}>Profile Screen </Text></View>
        </View>
    }
    const StackScreen = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen name='Signup' component={Signup}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen name='Drawer' component={DrawerScreens} options={{ headerShown: false }}>
                </Stack.Screen>
            </Stack.Navigator>
        )
    }
    const BottomScreens = () => {
        return (
            <Tab.Navigator
                tabBarOptions={{ showLabel: false, }}
                screenOptions={{
                    tabBarStyle: {
                        position: 'absolute',
                        height: 80,
                        bottom: 20,
                        elevation: 0,
                        left: 20,
                        right: 20,
                        borderRadius: 20,
                        backgroundColor: "#ffffff2e",
                        boxShadow: "none",
                        borderWidth: 5,
                        borderColor: "#ffffff2e",
                        display: "flex"

                    },
                }}>
                <Tab.Screen name='Home1' component={Home}
                    options={{
                        headerShown: false, tabBarIcon: (({ focused }) => {
                            return (
                                <View style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", gap: 10, }}>
                                    <Entypo name="home" size={24} color={focused ? Colors.SpotifyThemeGradient.SpotifyGreen : 'white'} />
                                    <View ><Text style={{ color: focused ? Colors.SpotifyThemeGradient.SpotifyGreen : 'white', fontSize: 14, fontWeight: '700' }}>Home </Text></View>
                                </View>
                            )
                        })
                    }} />
                <Tab.Screen name='Profile' component={ProfileScreen} options={{
                    headerShown: false, tabBarIcon: (({ focused }) => {
                        return (
                            <View style={{ display: "flex", flexDirection: 'column', alignItems: "center", justifyContent: "center", gap: 10 }}>
                                <FontAwesome5 name="user" size={24} color={focused ? Colors.SpotifyThemeGradient.SpotifyGreen : 'white'} />
                                <View >
                                    <Text style={{ color: focused ? Colors.SpotifyThemeGradient.SpotifyGreen : 'white', fontSize: 14, fontWeight: '700' }}>
                                        Profile
                                    </Text>
                                </View>
                            </View>
                        )
                    })
                }} />
            </Tab.Navigator >
        )
    }
    const DrawerScreens = () => {
        return (
            <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} backBehavior='history'
                screenOptions={{
                    headerShown: true, drawerLabelStyle: {
                        marginLeft: -20,
                    },
                    drawerActiveTintColor: "#fff",
                    drawerActiveBackgroundColor: "#aa18ea",
                    drawerInactiveTintColor: "black"
                }}>
                <Drawer.Screen name='profile' component={Home} options={{ drawerIcon: (({ color }) => (<FontAwesome name="home" size={30} color={color} />)) }} />
                <Drawer.Screen name='HomeCheck' options={{ drawerIcon: (({ color }) => (<FontAwesome name="mobile-phone" size={30} color={color} />)) }} component={BottomScreens} />
                {/* <Drawer.Screen name='profile1' options={{ headerShown: true }} component={Home} />
                <Drawer.Screen name='HomeChec1k' options={{ headerShown: true }} component={BottomScreens} />
                <Drawer.Screen name='profile112' options={{ headerShown: true }} component={Home} />
                <Drawer.Screen name='HomeCheck12' options={{ headerShown: true }} component={BottomScreens} />
                 <Drawer.Screen name='profile12' options={{ headerShown: true }} component={Home} />
                <Drawer.Screen name='HomeChec121k' options={{ headerShown: true }} component={BottomScreens} />
                <Drawer.Screen name='profil1212e' options={{ headerShown: true }} component={Home} />
                <Drawer.Screen name='HomeCheck1212' options={{ headerShown: true }} component={BottomScreens} />
                <Drawer.Screen name='profile1212' options={{ headerShown: true }} component={Home} />
                <Drawer.Screen name='HomeChec12121k' options={{ headerShown: true }} component={BottomScreens} />
                <Drawer.Screen name='profile1313' options={{ headerShown: true }} component={Home} />
                <Drawer.Screen name='HomeCheck314' options={{ headerShown: true }} component={BottomScreens} />
                <Drawer.Screen name='profile325' options={{ headerShown: true }} component={Home} />
                <Drawer.Screen name='H325omeCheck' options={{ headerShown: true }} component={BottomScreens} /> */}
                {/* <Drawer.Screen name='profile325' options={{ headerShown: true }} component={Home} /> */}
            </Drawer.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <StackScreen />
        </NavigationContainer>
    )
}