import { style } from "@material-ui/system";
import styles from "./MainFooter.module.css";
const MainFooter = () => {
  return (
    <div className={styles.mainfooter}>
      <div className={styles.footer}>
        <div className={styles.footercontent}>
          <div className={styles.footerlogo}>
            <div className={styles.logo}>
              <a className={styles.logo}>
                <img src="/static/shared/logo.svg" width="44" height="44"/>
              </a>
            </div>
          </div>
          <div className={styles.item1}>
            <ul className={styles.item1list}>
              <li><b>VPPHONE24H</b></li>
              <li>Sản phẩm</li>
              <li>Tin tức</li>
              <li>Tra cứu bảo hành</li>
              <li>Chính sách bảo hành</li>
              <li>Chính sách cá nhân</li>
            </ul>
          </div>
          <div className={styles.item1}>
            <ul className={styles.item1list}>
              <li><b>APP</b></li>
              <li>VPphone Retail</li>
              <li>vCare</li>
            </ul>
          </div>
          <div className={styles.item1}>
            <ul className={styles.item1list}>
              <li><b>Khu vực Bình Dươngggggggggggggggggggg</b></li>
              <li>Chợ Nhân Văn</li>
              <li>0123456789</li>
            </ul>
            <ul className={styles.item1list}>
              <li><b>Khu vực Bình Dươngggggggggggggggggggg</b></li>
              <li>Chợ Nhân Văn</li>
              <li>0123456789</li>
            </ul>
          </div>
          <div className={styles.item1}>
            <ul className={styles.item1list}>
              <li><b>Khu vực Bình Dươngggggggggggggggggggg</b></li>
              <li>Chợ Nhân Văn</li>
              <li>0123456789</li>
            </ul>
            <ul className={styles.item1list}>
              <li><b>Khu vực Bình Dươngggggggggggggggggggg</b></li>
              <li>Chợ Nhân Văn</li>
              <li>0123456789</li>
            </ul>
          </div>
        </div>
        <div className={styles.credit}>
          VPHONE24H 2015-2021
        </div>
      </div>
    </div>
  )
};

export default MainFooter;
