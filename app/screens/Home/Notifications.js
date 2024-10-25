import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

// Icon Paths
const icons = {
  waitingConfirmation: require("../../../assets/icons/waiting-confirmation.png"),
  waitingPickup: require("../../../assets/icons/waiting-pickup.png"),
  delivering: require("../../../assets/icons/delivering.png"),
  rating: require("../../../assets/icons/rating.png"),
  // wallet: require("../../../assets/icons/wallet.png"),
  // vouchers: require("../../../assets/icons/vouchers.png"),
  // helpCenter: require("../../../assets/icons/help-center.png"),
  // settings: require("../../../assets/icons/settings.png"), 
};

const Notifications = () => {
  const utilities = [
    { name: 'Chờ xác nhận', icon: icons.waitingConfirmation },
    { name: 'Chờ lấy hàng', icon: icons.waitingPickup },
    { name: 'Đang giao hàng', icon: icons.delivering },
    { name: 'Đánh giá', icon: icons.rating },
  ];

  // Bạn có thể giữ lại phần này nhưng không render nếu không muốn hiển thị
  const extraUtilities = [
    { name: 'Ví Shopee', icon: icons.wallet },
    { name: 'Kho Voucher', icon: icons.vouchers },
    { name: 'Trung tâm trợ giúp', icon: icons.helpCenter },
    { name: 'Cài đặt', icon: icons.settings },
  ];

  const renderUtilityButton = (item, index) => (
    <TouchableOpacity key={index} style={styles.utilityButton}>
      <Image source={item.icon} style={styles.utilityIcon} />
      <Text style={styles.utilityText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Đơn hàng của bạn</Text>
      
      {/* Section for main utilities */}
      <View style={styles.utilitiesRow}>
        {utilities.map(renderUtilityButton)}
      </View>

      {/* Uncomment the section below if you want to include extra utilities */}
      {/* <View style={styles.extraUtilities}>
        {extraUtilities.map(renderUtilityButton)}
      </View> */}
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  utilitiesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  extraUtilities: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  utilityButton: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 15,
  },
  utilityIcon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  utilityText: {
    fontSize: 14,
    textAlign: 'center',
  },
});
