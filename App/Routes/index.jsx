import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import { useIsFocused } from '@react-navigation/native';
import Home from '../View/pages/home';
import Add from '../View/pages/add';

const Tab = createBottomTabNavigator();

export default function Routes() {
    const isFocused = useIsFocused();

    return (
        <Tab.Navigator screenOptions={{
            tabBarStyle: {
                height: 80, // Aumente a altura para o valor desejado
                backgroundColor: '#20202b',
                borderTopColor:'transparent'
            }
        }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={30} color='#820AD1' name='home' />;
                        }
                        return <Ionicons size={30} color='#820AD1' name='home-outline' />;
                    },
                }}
                initialParams={{ isFocused }} // Passa o estado do foco para a tela da câmera
            />
                        <Tab.Screen
                name="Historico"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={30} color='#820AD1' name='archive' />;
                        }
                        return <Ionicons size={30} color='#820AD1' name='archive-outline' />;
                    },
                }}
            />
            <Tab.Screen
                name="Adicionar"
                component={Add}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={60} color='#820AD1' name='add-circle' />;
                        }
                        return <Ionicons size={60} color='#820AD1' name='add-circle-outline' />;
                    },
                }}
            />
            <Tab.Screen
                name="Metas"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={30} color='#820AD1' name='flag' />;
                        }
                        return <Ionicons size={30} color='#820AD1' name='flag-outline' />;
                    },
                }}
            />
            <Tab.Screen
                name="Config"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, size, color }) => {
                        if (focused) {
                            return <Ionicons size={30} color='#820AD1' name='settings' />;
                        }
                        return <Ionicons size={30} color='#820AD1' name='settings-outline' />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}