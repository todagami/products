import * as React from 'react';
import Box from '@material-ui/core/Box';
import styles from "./ProductsToBuy.module.css"
const ProductsToBuy=(props:any)=>{
    return(
    <div className={styles.products}>
        <Box className={styles.box}>
            <div className={styles.linkImg}>
            <a href="https://github.com/"><img src="{props.imageSrc}" style={{width:'150px',height:'200px'}}/></a>
            </div>
            <div className={styles.productName}> 
                {props.name}
            </div>
            <div className={styles.productCost}> 
                {props.cost}
            </div>
            <button className={styles.button}>Cho vào giỏ</button>
        </Box>
    </div>
    )
}
export default ProductsToBuy;