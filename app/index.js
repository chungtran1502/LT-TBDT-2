import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { CartProvider } from './screens/Home/CartContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './screens/DangNhap/SignUp';
import SignIn from './screens/DangNhap/SignIn';
import Home from './screens/Home';
import MyTab from './screens/Home/MyTab';
import DetailSanPham from './screens/SanPham/DetailSanPham';
import Payment from './screens/Home/Payment';
import Carts from './screens/Home/Cart';
import Notifications from './screens/Home/Notifications';
// import {MyTabs} from './screens/Home/MyTab';
import PaymentMoMo from './screens/Home/PaymentMoMo';
import PaymentBank from './screens/Home/PaymentBank';
// import DonHangChoXacNhan from '../screens/DonHangChoXacNhan';


import SecondRoute from './screens/Home/Profile';
const Stack = createStackNavigator();

function App() {
  return (

    <CartProvider>  
    <Stack.Navigator initialRouteName="Getstart">
      {/* <Stack.Screen
        name="Getstart"
        component={Getstart}
        options={{
          headerShown: false,
          title: 'Getstart ', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      /> */}
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          headerShown: false,
          title: 'First Page', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      {/* {/* <Stack.Screen
          name="SecondPage"
          component={SecondPage}
          options={{
            title: 'Second Page', //Set Header Title
            headerStyle: {
              backgroundColor: '#f4511e', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        /> */}
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          title: 'SignIn', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Home"
        component={MyTab}
        options={{
          headerShown: false,
          title: 'Home', //Set Header Title
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="DetailSanPham"
        component={DetailSanPham}
        options={{
          title: 'Chi tiết sản phẩm',
          headerStyle: {
            backgroundColor: '#fff', // Màu nền thanh tiêu đề
          },
          headerTintColor: '#000', // Màu sắc cho nút quay lại và tiêu đề
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#000', // Màu chữ tiêu đề
          },
          headerBackTitle: 'Quay lại',
        }}
      />
      <Stack.Screen name="Cart" component={Carts}
        options={{
          title: 'Giỏ hàng',
          headerStyle: {
            backgroundColor: '#fff', // Màu nền thanh tiêu đề
          },
          headerTintColor: '#000', // Màu sắc cho nút quay lại và tiêu đề
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#000', // Màu chữ tiêu đề
          },
          headerBackTitle: 'Quay lại',
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          title: 'Trang thanh toán',
          
        }}
      />
      <Stack.Screen 
      name="PaymentMoMo"
      component={PaymentMoMo}
      options={{
          title: 'ví momo',
          
        }}  
        />
      <Stack.Screen 
      name="PaymentBank" 
      component={PaymentBank} 
      options={{
        title: 'Thẻ ngân hàng',
        
      }} 
      />
      <Stack.Screen 
      name="Notifications" 
      component={Notifications} 
      options={{
        title: 'Đơn hàng',
        
      }} 
      />
      
      {/* <Stack.Screen 
      name="NotificationContext" 
      component={NotificationContext} 
      options={{ title: 'NotificationContext' }} 
      /> */}
    <Stack.Screen name="MyPage" component={SecondRoute} 
     options={{
      
      title: 'Hoạt động',
      headerStyle: {
        backgroundColor: '#fff', // Màu nền thanh tiêu đề
      },
      headerTintColor: '#000', // Màu sắc cho nút quay lại và tiêu đề
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#000', // Màu chữ tiêu đề
      },
      headerBackTitle: 'Quay lại',
    }}/>
    </Stack.Navigator>
    </CartProvider>
  );
}

export default App;