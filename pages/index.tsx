import Head from "next/head";
import Image from "next/image";

import MainLayout from "../core/layouts/MainLayout";

import styles from "./index.module.css";
import {plusDivs} from "../utils"
import Products from "../core/components/Products";
import ProductsToBuy from "../core/components/ProductsToBuy"
import React from "react";
import Box from "@material-ui/core/Box";
const Index = () => {
  return (
    <MainLayout>
      <div className={styles.index}>
        <div className={styles.banner}>
          <div className={styles.image}>
            <div className='mySlides' style={{backgroundImage: `url("https://64.media.tumblr.com/dd001ffeb4225505ed8cd6d4e616e1c7/tumblr_oxxlqow7qI1qhttpto3_1280.jpg")`,height:300,width:'100%'}}>
              <button className="left" onClick={() => {plusDivs(-1)}}>left</button>
              <button className="right" onClick={() => {plusDivs(1)}}>right</button>
            </div>
            <div className='mySlides' style={{backgroundImage: `url("https://64.media.tumblr.com/032a10f75b1af65334b3aa58f2a724e8/tumblr_oxxlqow7qI1qhttpto4_1280.jpg")`,height:300,width:'100%'}}>
              <button className="left" onClick={() => {plusDivs(-1)}}>left</button>
              <button className="right" onClick={() => {plusDivs(1)}}>right</button>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <button className={styles.button}>button 1</button>
            <button className={styles.button}>button 2</button>
            <button className={styles.button}>button 3</button>
            <button className={styles.button}>button 4</button>
          </div>
        </div>
        <div className={styles.products}>
        <Products name={"ĐIỆN THOẠI MỚI"}/>
        <Products name={"LAPTOP-MACBOOK"}/>
        <Products name={"SẢN PHẨM KHÁC"}/>
        <Products name={"NHÓM DANH MỤC MỚI"}/>
        </div>
        <div className={styles.divider}><b>SẢN PHẨM TIÊU BIỂU</b></div>
        <div className={styles.productstobuygroup}>
          <div className={styles.productstobuy}>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
          </div>
        </div>
        <div>
          <div className={styles.buttonOption}>
            <button className={styles.buttonOptionStyle}>ĐIỆN THOẠI</button>
            <button className={styles.buttonOptionStyle}>DELL</button>
            <button className={styles.buttonOptionStyle}>MAC BOOK</button>
          </div>
          <div className={styles.newProducts}>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
          </div>
        </div>
        <div>
          <div className={styles.buttonOption}>
            <button className={styles.buttonOptionStyle}>LAPTOP-MAC BOOC</button>
            <button className={styles.buttonOptionStyle}>HP</button>
            <button className={styles.buttonOptionStyle}>ASUS</button>
          </div>
          <div className={styles.newProducts}>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
            <ProductsToBuy name={"Tai nghe 7 plus"} cost={"1000"}/>
          </div>
        </div>
        <div className={styles.partners}>
          <Box className={styles.partnerContainer}>
            <div className={styles.partnerText}><b>CƠ HỘI HỢP TÁC</b></div>
            <div className={styles.partnerContent}>
              <div className={styles.item1}>
                <div><b>Cộng tác viên</b></div>
                <div>Bán hàng không cần vốn với mô hình</div>
                <button>Tìm hiểu thêm</button>
              </div>
              <div className={styles.item2}>
                <div><b>Đại lý</b></div>
                  <div>Kinh doanh với nhiều lợi ích hơn với việc trở thành đại lý không ôm hàng</div>
                  <button>Tìm hiểu thêm</button>
                </div>
              <div className={styles.item3}>
                <div><b>Nhượng quyền</b></div>
                  <div>Hợp tác nhượng quyền toàn vẹn và hổ trợ sử dụng công cụ</div>
                  <button>Tìm hiểu thêm</button>
                </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;

