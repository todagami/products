import Head from "next/head";
import Image from "next/image";

import MainLayout from "../core/layouts/MainLayout";
import {get} from "lodash"
import styles from "./index.module.css";
import {plusDivs} from "../utils"
import Products from "../core/components/Products";
import ProductsToBuy from "../core/components/ProductsToBuy"
import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import axios from "axios";
const Index = () => {
  const [article, setArticle] = useState(null);
  useEffect(()=>{
axios
.get("https://api.stdio.vn/articles/@3DMgG1")
.then((res)=>{
  console.log(res.data);
  setArticle(res.data);
})
.catch((err)=>{

})
  },[]);
  return (
    <MainLayout>
      <div className={styles.index}>
        {/* <h1>{!!article&&article.title}</h1> */}
        <h1>{get(article,"title", "")}</h1>
      {/* <p>{!!article&&!!article.categories&&article.categories[0].name}</p> */}
      <p>{get(article,'categories[0].name')}</p>
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
        <Products name={"??I???N THO???I M???I"}/>
        <Products name={"LAPTOP-MACBOOK"}/>
        <Products name={"S???N PH???M KH??C"}/>
        <Products name={"NH??M DANH M???C M???I"}/>
        </div>
        <div className={styles.divider}><b>S???N PH???M TI??U BI???U</b></div>
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
            <button className={styles.buttonOptionStyle}>??I???N THO???I</button>
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
            <div className={styles.partnerText}><b>C?? H???I H???P T??C</b></div>
            <div className={styles.partnerContent}>
              <div className={styles.item1}>
                <div><b>C???ng t??c vi??n</b></div>
                <div>B??n h??ng kh??ng c???n v???n v???i m?? h??nh</div>
                <button>T??m hi???u th??m</button>
              </div>
              <div className={styles.item2}>
                <div><b>?????i l??</b></div>
                  <div>Kinh doanh v???i nhi???u l???i ??ch h??n v???i vi???c tr??? th??nh ?????i l?? kh??ng ??m h??ng</div>
                  <button>T??m hi???u th??m</button>
                </div>
              <div className={styles.item3}>
                <div><b>Nh?????ng quy???n</b></div>
                  <div>H???p t??c nh?????ng quy???n to??n v???n v?? h??? tr??? s??? d???ng c??ng c???</div>
                  <button>T??m hi???u th??m</button>
                </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;

