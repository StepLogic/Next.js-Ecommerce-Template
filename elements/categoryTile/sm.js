const category=[
    {   category:"Women",
        thumbnail:"/assets/categoriesImages/woman.png",}
]
import style from "./index.module.css"
export default function CategoryTileSm(props) {
    return (
        <>
            <div style={{width:"100%",height:"auto",
                overflow:"hidden",marginTop:"0.5rem"}}>
                <div className={style.image} style={{position:"relative",backfaceVisibility:"hidden",paddingTop:"100%",paddingBottom:"10%",width:"100%",height:"100%",backgroundImage:`url(${props.thumbnail})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center center"}}>
                    <div style={{display:"flex",flexDirection:"row",width:150,height:44,backgroundColor:"white",marginRight:"auto",marginLeft:"auto",marginTop:"auto"}}>
                    <span style={{width:"fit-content",textTransform:"capitalize",marginRight:"auto",fontWeight:"600",lineSpace:1.428,marginLeft:"auto",marginTop:"auto",marginBottom:"auto"}}>{props.category}</span>
                </div>
                </div>
            </div>
        </>
    );
}
