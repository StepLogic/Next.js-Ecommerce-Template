import style from "./index.module.css"
export default function Desktop(props) {
    return (
        <>
            <div style={{display:"flex",flexDirection:"row",justifyContent:'center',borderTop:"1px solid #dedede"}}>
                <span className={style.menuItem} style={{padding:"10px 15px",fontSize:"14px"}}>Category</span>
            </div>
        </>
    );
}
