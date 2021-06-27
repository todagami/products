import styles from "../components/MainHeader.module.css"
const MainHeader = () => {
  if (process.browser) {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
  return (
    <div className={styles.mainheader}>
      <div id="navbar" className={styles.navbar}>
        <div className={styles.header}>
          <div className={styles.headerlogo}>
            <a className={styles.logo}>
            <img src="/static/shared/logo.svg" width="44" height="44"/>
            </a>
          </div>
          <div className={styles.searchBar}>
            <div className={styles.searchinput}>
              <div className={styles.input}>
                <input className={styles.inputvalue} type="text" placeholder="Tìm kiếm" value=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default MainHeader;
