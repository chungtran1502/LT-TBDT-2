import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper'; // Import thư viện Swiper

// Lấy chiều rộng của màn hình
const { width } = Dimensions.get('window');

export default function Banner() {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay={true} // Tự động chuyển đổi
        autoplayTimeout={3} // Chuyển sau mỗi 3 giây
        showsPagination={true} // Hiển thị pagination (chấm nhỏ)
        dotStyle={styles.dotStyle} // Style cho pagination dot
        activeDotStyle={styles.activeDotStyle} // Style cho pagination active dot
        paginationStyle={styles.paginationStyle} // Tùy chỉnh vị trí của pagination
        style={styles.wrapper}
      >
        <View style={styles.bannerWrapper}>
          <ImageBackground
            source={require('../../../assets/images/1.jpg')}
            style={styles.banner}
            imageStyle={styles.imageStyle} // Thêm style để bo tròn ảnh
            resizeMode="cover"
          />
        </View>
        <View style={styles.bannerWrapper}>
          <ImageBackground
            source={require('../../../assets/images/2.jpg')}
            style={styles.banner}
            imageStyle={styles.imageStyle} // Thêm style để bo tròn ảnh
            resizeMode="cover"
          />
        </View>
        <View style={styles.bannerWrapper}>
          <ImageBackground
            source={require('../../../assets/images/3.jpg')}
            style={styles.banner}
            imageStyle={styles.imageStyle} // Thêm style để bo tròn ảnh
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    height: 200, // Chiều cao của swiper (banner)
  },
  bannerWrapper: {
    overflow: 'hidden', // Đảm bảo bo tròn không bị ảnh hưởng
    borderRadius: 20, // Bo tròn cả 4 cạnh
    marginHorizontal: 10, // Canh lề hai bên
  },
  banner: {
    width: width - 20, // Chiều rộng banner trừ padding hai bên
    height: 200, // Chiều cao của banner
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    borderRadius: 20, // Bo tròn ảnh
  },
  dotStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotStyle: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  paginationStyle: {},
});
