import * as React from 'react';
import { View, useWindowDimensions, Text, StyleSheet, TextInput, Button, Image, FlatList, TouchableOpacity } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import SanPham from '../SanPham/SanPhamLienQuan';

const accountData = {
  avatar: require('../../../assets/images/avt.jpg'),
  ten: 'Chung Tran',
  email: 'chungtran@gmail.com',
  diachi: '57/13/7 đường số 7, phường Hiệp Bình Phước, thủ đức',
  thanhpho: 'Hcm',
  sdt: '0353393564',
  gioitinh: 'Nam',
};

const notifications = [
  { id: '1', title: 'Khuyến mãi', description: 'Đại hạ giá, sale toàn cầu!', count: 18 },
  { id: '2', title: 'Live & Video', description: 'Săn mã 50k đơn 0đ', count: 13 },
  { id: '3', title: 'Thông tin Tài chính', description: 'DEAL ĐỘC QUYỀN TRẢ GÓP 0%!', count: 12 },
  { id: '4', title: 'Cập nhật Đơn hàng', description: 'Wellcome to VietNam', count: 12 },
  { id: '5', title: 'Giải Thưởng Khách hàng', description: 'Duy nhất hôm nay tại Quà tặng  Xu', count: 13 },
];

const NotificationItem = ({ title, description, count }) => (
  <View style={styles.notificationItem}>
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
    <View style={styles.notificationCount}>
      <Text style={styles.notificationCountText}>{count}</Text>
    </View>
  </View>
);

const FirstRoute = () => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [formData, setFormData] = React.useState(accountData);
  const navigation = useNavigation();

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSwitchAccount = () => {
    navigation.navigate('SignIn');  
  };

  const handleLogout = () => {
    navigation.navigate('SignIn');  
  };

  return (
    <View style={styles.container}>
      <Image source={formData.avatar} style={styles.avatar} />
      <View style={styles.row}>
        <View style={styles.flex1}>
          <Text style={styles.label}>Tên khách hàng</Text>
          <TextInput
            style={styles.input}
            value={formData.ten}
            editable={isEditing}
            onChangeText={(value) => handleInputChange('ten', value)}
          />
        </View>
        <View style={styles.flex1}>
          <Text style={styles.label}>Giới tính</Text>
          <TextInput
            style={styles.input}
            value={formData.gioitinh}
            editable={isEditing}
            onChangeText={(value) => handleInputChange('gioitinh', value)}
          />
        </View>
      </View>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={formData.email}
        editable={isEditing}
        onChangeText={(value) => handleInputChange('email', value)}
      />

      <Text style={styles.label}>Địa chỉ</Text>
      <TextInput
        style={styles.input}
        value={formData.diachi}
        editable={isEditing}
        onChangeText={(value) => handleInputChange('diachi', value)}
      />

      <Text style={styles.label}>Thành phố</Text>
      <TextInput
        style={styles.input}
        value={formData.thanhpho}
        editable={isEditing}
        onChangeText={(value) => handleInputChange('thanhpho', value)}
      />

      <Text style={styles.label}>Số điện thoại</Text>
      <TextInput
        style={styles.input}
        value={formData.sdt}
        editable={isEditing}
        onChangeText={(value) => handleInputChange('sdt', value)}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={isEditing ? styles.saveButton : styles.editButton} onPress={() => setIsEditing(!isEditing)}>
          <Text style={styles.buttonText}>{isEditing ? "Lưu" : "Chỉnh sửa"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.accountButton} onPress={handleSwitchAccount}>
          <Text style={styles.buttonText}>Đổi tài khoản</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Đã xem gần đây</Text>
      <SanPham />
    </View>
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', padding: 5 }}>Thông báo</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            description={item.description}
            count={item.count}
          />
        )}
      />
    </View>
  </View>
);  

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function TabViewExample() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Tài khoản' },
    { key: 'second', title: 'History' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center', // Căn giữa nội dung
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3c444c', // Cùng màu chữ với trang đăng nhập
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10, // Bo tròn góc
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#f2f2f2', // Nền giống trang đăng nhập
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  flex1: {
    flex: 1,
    marginRight: 10,
  },
  buttonRow: {
    flexDirection: 'column', // Sắp xếp nút theo chiều dọc
    alignItems: 'center', // Căn giữa
    marginTop: 20,
    width: '100%',
  },
  editButton: {
    width: '100%', // Đặt chiều rộng của nút là 100%
    height: 50, // Tăng chiều cao của nút
    backgroundColor: '#ADD8E6', // Màu cho nút Chỉnh sửa
    borderRadius: 10, // Bo tròn góc cho nút bấm
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, // Khoảng cách giữa các nút
  },
  saveButton: {
    width: '100%', // Đặt chiều rộng của nút là 100%
    height: 50, // Tăng chiều cao của nút
    backgroundColor: '#ADD8E6', // Màu cho nút Lưu
    borderRadius: 10, // Bo tròn góc cho nút bấm
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, // Khoảng cách giữa các nút
  },
  accountButton: {
    width: '100%', // Đặt chiều rộng của nút là 100%
    height: 50, // Tăng chiều cao của nút
    backgroundColor: '#3c99dc', // Màu cho nút Đổi tài khoản
    borderRadius: 10, // Bo tròn góc cho nút bấm
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15, // Khoảng cách giữa các nút
  },
  logoutButton: {
    width: '100%', // Đặt chiều rộng của nút là 100%
    height: 50, // Tăng chiều cao của nút
    backgroundColor: '#f44336', // Màu cho nút Đăng xuất
    borderRadius: 10, // Bo tròn góc cho nút bấm
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white', // Màu chữ nút
    fontWeight: 'bold',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontWeight: 'bold',
  },
  notificationDescription: {
    color: '#666',
  },
  notificationCount: {
    backgroundColor: '#3c99dc',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'center',
  },
  notificationCountText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
