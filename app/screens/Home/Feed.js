import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import TimKiem from '../../../components/TimKiem';
import FeedHeader from '../../../components/feedHeader'; // Lưu ý chữ cái đầu viết hoa
import DanhMuc from '../DanhMuc/DanhMuc';
import Banner from '../Slider/Banner';
import SanPham from '../SanPham/SanPham'; // import your SanPham list
import SanPhammoi from '../SanPhammoi/SanPhammoi'; // import your SanPham list

import { FlatList } from 'react-native';

const Feed = ({ navigation }) => {
  const data = [
    { key: 'banner' },
    { key: 'danhmuc' },
    { key: 'sanpham' },
    { key: 'sanphammoi' }
  ];

  return (
    <SafeAreaView style={{flex:1, marginHorizontal:16}}>
       <FeedHeader feedText={"E-commer"} feedIcon={"bell-o"} notificationCount={3} />
       <TimKiem icon="search" placeholder={"nhập sản phẩm muốn tìm"} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          switch (item.key) {
            case 'banner':
              return (
                <>                 
                  <Banner />
                </>
              );
            case 'danhmuc':
              return (
                <View style={{marginTop:10}}>
                  <Text style={{fontSize:22, fontWeight:"bold"}}>Xem thêm</Text>
                  <DanhMuc />
                </View>
              );
            case 'sanpham':
              return (
                <View style={{marginTop:10, flex:1}}>
                  <Text style={{fontSize:22, fontWeight:"bold"}}>Sản phẩm nổi bật</Text>
                  <SanPham />
                </View>
              );
              case 'sanphammoi': // Thêm case cho sản phẩm mới
              return (
                <View style={{ marginTop: 10, flex: 1 }}>
                  <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Sản phẩm mới</Text>
                  <SanPhammoi /> {/* Hiển thị danh sách sản phẩm mới */}
                </View>
              );
            default:
              return null;
          }
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default Feed;
