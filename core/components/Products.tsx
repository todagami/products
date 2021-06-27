import styles from "./Products.module.css"
const Products=(props:any)=>{
    return(
    <div className={styles.products}>
        <div className={styles.linkImg}>
        <a href="https://github.com/"><img src="{props.imageSrc}" style={{width:'190px',height:'200px'}}/></a>
        </div>
        <div className={styles.productName}> 
            {props.name}
        </div>
    </div>
    )
}
export default Products;