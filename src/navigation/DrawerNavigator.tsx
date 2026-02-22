import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useTranslation } from 'react-i18next';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { logout } from '../redux/slices/authSlice';
import { View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from '../components/ThemedText';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../constants/theme';

const Drawer = createDrawerNavigator();

function CustomHeader({ navigation, title }: { navigation: any; title: string }) {
  return (
    <SafeAreaView className="bg-white border-b border-grayLow pt-12 pb-4">
      <View className="flex-row items-center justify-between px-4">
        <TouchableOpacity
          className="w-10 h-10 items-center justify-center rounded-full bg-gray-50"
          onPress={() => navigation.toggleDrawer()}
        >
          <Ionicons name="menu" size={26} color={Colors.primary} />
        </TouchableOpacity>
        <ThemedText className="text-xl font-bold flex-1 text-center text-black">
          {title}
        </ThemedText>
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-gray-50">
           <Ionicons name="notifications-outline" size={22} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }: any) {
  const { t } = useTranslation('common');
  const user = useAppSelector(state => state.auth.user);

  return (
    <View className="flex-1 bg-white">
      <CustomHeader navigation={navigation} title={t('home')} />
      <View className="flex-1 p-5 items-center justify-center">
        <View className="bg-gray-50 p-8 rounded-3xl items-center w-full">
           <Ionicons name="school-outline" size={60} color={Colors.primary} className="mb-4" />
           <ThemedText className="text-2xl font-bold text-colorPrimary text-center">
             {t('helloWorld')}
           </ThemedText>
           {user && (
             <ThemedText className="text-base text-gray mt-4 text-center">
               {t('welcome')}, {user.name} ({user.role})
             </ThemedText>
           )}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function ProfileScreen({ navigation }: any) {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.auth.user);

  return (
    <View className="flex-1 bg-white">
      <CustomHeader navigation={navigation} title={t('profile')} />
      <View className="flex-1 p-6">
        <View className="items-center py-10">
          <View className="w-24 h-24 bg-colorPrimary rounded-full items-center justify-center mb-4">
             <ThemedText className="text-white text-4xl font-bold">
               {user?.name?.charAt(0) || 'U'}
             </ThemedText>
          </View>
          <ThemedText className="text-2xl font-bold text-black">{user?.name}</ThemedText>
          <ThemedText className="text-gray">{user?.role}</ThemedText>
        </View>

        <View className="bg-gray-50 rounded-2xl p-4 space-y-4 mb-10">
           <View className="flex-row items-center border-b border-grayLow py-3">
              <Ionicons name="person-outline" size={20} color={Colors.gray} className="mr-3" />
              <ThemedText className="text-base ml-4">{user?.name}</ThemedText>
           </View>
           <View className="flex-row items-center py-3">
              <Ionicons name="shield-outline" size={20} color={Colors.gray} className="mr-3" />
              <ThemedText className="text-base ml-4">{user?.role}</ThemedText>
           </View>
        </View>

        <TouchableOpacity
          className="bg-red-500 p-4 rounded-xl flex-row items-center justify-center mt-auto mb-10"
          onPress={() => dispatch(logout())}
        >
          <Ionicons name="log-out-outline" size={20} color="white" className="mr-2" />
          <ThemedText className="text-white font-bold text-lg ml-2">{t('logout')}</ThemedText>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function CustomDrawerContent(props: any) {
  const { t } = useTranslation('common');
  const user = useAppSelector(state => state.auth.user);
  const dispatch = useAppDispatch();

  return (
    <View className="flex-1">
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <View className="bg-colorPrimary p-10 items-center justify-center mb-4">
           <View className="w-20 h-20 bg-white rounded-full items-center justify-center mb-4">
              <ThemedText className="text-colorPrimary text-3xl font-bold">
                {user?.name?.charAt(0) || 'U'}
              </ThemedText>
           </View>
           <ThemedText className="text-white text-lg font-bold">{user?.name}</ThemedText>
           <ThemedText className="text-platinum text-sm">{user?.role}</ThemedText>
        </View>
        
        <DrawerItemList {...props} />
        
        <View className="border-t border-grayLow mt-4 pt-4">
           <DrawerItem
              label={t('logout')}
              icon={({ color, size }) => <Ionicons name="log-out-outline" color={color} size={size} />}
              onPress={() => dispatch(logout())}
              labelStyle={{ fontFamily: 'NotoNastaliqUrdu', textAlign: 'right' }}
              inactiveTintColor="#ff0000"
           />
        </View>
      </DrawerContentScrollView>
      <View className="p-4 items-center border-t border-grayLow">
         <ThemedText className="text-gray text-xs">Taleemi Marakiz v1.0.0</ThemedText>
      </View>
    </View>
  );
}

const DrawerNavigator = () => {
  const { t } = useTranslation('common');
  const user = useAppSelector(state => state.auth.user);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: 'white',
          width: 280,
        },
        drawerActiveBackgroundColor: Colors.primary + '10', // 10% opacity
        drawerActiveTintColor: Colors.primary,
        drawerLabelStyle: {
          fontFamily: 'NotoNastaliqUrdu',
          textAlign: 'right',
          fontSize: 16,
        },
        drawerItemStyle: {
           borderRadius: 12,
           paddingHorizontal: 8,
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ 
          title: t('home'),
          drawerIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />
        }}
      />
      
      {user?.role === 'admin' && (
        <Drawer.Screen
          name="AdminDashboard"
          component={HomeScreen}
          options={{ 
            title: t('adminDashboard'),
            drawerIcon: ({ color, size }) => <Ionicons name="grid-outline" color={color} size={size} />
          }}
        />
      )}

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ 
          title: t('profile'),
          drawerIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
