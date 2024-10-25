import * as React from 'react';
import { View, useWindowDimensions, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';
import SanPham from '../SanPham/SanPhamLienQuan';
import axios from 'axios'; // Thư viện axios để gọi API

// Dữ liệu thông báo
const notifications = [
  { id: '1', title: 'Thông báo đơn hàng', description: 'Đơn hàng của bạn đã được xác nhận', count: 1 },
  { id: '2', title: 'Khuyến mãi', description: 'Bạn có một voucher mới!', count: 3 },
];

// Icon Paths
const icons = {
  waitingConfirmation: require("../../../assets/icons/waiting-confirmation.png"),
  waitingPickup: require("../../../assets/icons/waiting-pickup.png"),
  delivering: require("../../../assets/icons/delivering.png"),
  rating: require("../../../assets/icons/rating.png"),
  wallet: require("../../../assets/icons/wallet.png"),
  vouchers: require("../../../assets/icons/vouchers.png"),
  helpCenter: require("../../../assets/icons/help-center.png"),
  settings: require("../../../assets/icons/settings.png"),
  loyalty: require("../../../assets/icons/loyalty.png"),
  repeat: require("../../../assets/icons/repeat.png"),
  creator: require("../../../assets/icons/creator.png"),
  balance: require("../../../assets/icons/balance.png"),
  voucherHunter: require("../../../assets/icons/voucher-hunter.png"),
  marketing: require("../../../assets/icons/marketing.png"),
  insurance: require("../../../assets/icons/insurance.png"),
  saleTime: require("../../../assets/icons/sale-time.png"),
};

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
  const [formData, setFormData] = React.useState({});
  const [showDetails, setShowDetails] = React.useState(false);
  const [loading, setLoading] = React.useState(true); // Biến trạng thái để theo dõi trạng thái tải dữ liệu
  const navigation = useNavigation();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/users/1'); // Gọi API để lấy dữ liệu người dùng
        const userData = response.data;
        setFormData({
          avatar: { uri: userData.avatar },
          ten: {
            firstname: userData.name.firstname,
            lastname: userData.name.lastname,
          },
          email: userData.email,
          diachi: userData.address.street + ', ' + userData.address.city,
          thanhpho: userData.address.city,
          sdt: userData.phone,
          gioitinh: 'Nam',
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Đặt trạng thái tải dữ liệu thành false khi hoàn tất
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleSwitchAccount = () => {
    navigation.navigate('SignIn');
  };

  const handleLogout = () => {
    navigation.navigate('SignIn');
  };

  // Dữ liệu tiện ích
  const utilities = [
    { name: 'Chờ xác nhận', icon: icons.waitingConfirmation },
    { name: 'Chờ lấy hàng', icon: icons.waitingPickup },
    { name: 'Đang giao hàng', icon: icons.delivering },
    { name: 'Đánh giá', icon: icons.rating },
  ];

  // Dữ liệu tiện ích bổ sung
  const extraUtilities = [
    { name: 'Ví Shopee', icon: icons.wallet },
    { name: 'Kho Voucher', icon: icons.vouchers },
    { name: 'Trung tâm trợ giúp', icon: icons.helpCenter },
    { name: 'Cài đặt', icon: icons.settings },
    { name: 'Khách hàng thân thiết', icon: icons.loyalty },
    { name: 'Mua lại', icon: icons.repeat },
    { name: 'Kênh người sáng tạo', icon: icons.creator },
    { name: 'Số dư xu mua hàng', icon: icons.balance },
    { name: 'Săn voucher', icon: icons.voucherHunter },
    { name: 'Tiếp thị', icon: icons.marketing },
    { name: 'Bảo hiểm', icon: icons.insurance },
    { name: 'Khung giờ sale', icon: icons.saleTime },
  ];

  // Kết hợp hai mảng
  const allUtilities = [...utilities, ...extraUtilities];

  const renderUtilityButton = (item, index) => (
    <TouchableOpacity key={index} style={styles.utilityButton}>
      <Image source={item.icon} style={styles.utilityIcon} />
      <Text style={styles.utilityText}>{item.name}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />; // Hiển thị spinner trong lúc tải dữ liệu
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleDetails} style={styles.avatarButton}>
        <Image
          source={formData.avatar ? { uri: formData.avatar.uri } : require('../../../assets/images/avt.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.avatarName}>
          {formData.ten?.firstname} {formData.ten?.lastname}
        </Text>
      </TouchableOpacity>
      {showDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.label}>Tên khách hàng</Text>
          <TextInput
            style={styles.input}
            value={formData.ten ? `${formData.ten.firstname} ${formData.ten.lastname}` : ''}  // Kết hợp firstname và lastname
            editable={isEditing}
            onChangeText={(value) => {
              const [firstname, lastname] = value.split(' ');
              handleInputChange('ten', { firstname, lastname });  // Cập nhật lại formData.ten thành đối tượng
            }}
          />
          <Text style={styles.label}>Giới tính</Text>
          <TextInput
            style={styles.input}
            value={formData.gioitinh}
            editable={isEditing}
            onChangeText={(value) => handleInputChange('gioitinh', value)}
          />
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
      )}

      {/* Tiện ích */}
      <View style={styles.utilitiesContainer}>
        <Text style={styles.utilitiesTitle}>Tiện ích</Text>
        <View style={styles.utilitiesRow}>
          {allUtilities.map(renderUtilityButton)}
        </View>
      </View>
    </View>
  );
};

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#fff' }}>
    <View style={{ marginTop: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Lịch sử mua hàng</Text>
      <SanPham />
    </View>
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', paddingBottom: 10 }}>Thông báo</Text>
      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <NotificationItem
            title={item.title}
            description={item.description}
            count={item.count}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const MyPage = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Thông tin cá nhân' },
    { key: 'second', title: 'Thông báo' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  avatarButton: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  avatar: {
    width: 100, // Kích thước cần thiết cho hình ảnh
    height: 100, // Kích thước cần thiết cho hình ảnh
    borderRadius: 50, // Làm tròn hình ảnh nếu cần
  },
  avatarName: {
    fontSize: 20,
    marginTop: 8,
  },
  detailsContainer: {
    marginTop: 16,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saveButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 4,
    width: '30%',
  },
  editButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 4,
    width: '30%',
  },
  accountButton: {
    backgroundColor: '#FF9800',
    padding: 10,
    borderRadius: 4,
    width: '30%',
  },
  logoutButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 4,
    width: '30%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  utilitiesContainer: {
    marginTop: 16,
  },
  utilitiesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  utilitiesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  utilityButton: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  utilityIcon: {
    width: 40,
    height: 40,
    marginBottom: 4,
  },
  utilityText: {
    textAlign: 'center',
  },
  notificationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontWeight: 'bold',
  },
  notificationDescription: {
    color: '#555',
  },
  notificationCount: {
    backgroundColor: '#2196F3',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationCountText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default MyPage;
