import Head from 'next/head'
import Layout from "../components/layout";
import BannerComponent from "../components/bannerComponent";
import CategoryTile from "../elements/categoryTile/lg";
import CategoryTileLg from "../elements/categoryTile/lg";
import CategoryTileSm from "../elements/categoryTile/sm";
import CategoryTileMd from "../elements/categoryTile/md";
import style from "./index.module.css"
import Product from "../elements/product";
import {AiOutlineCar} from "react-icons/ai";
import {GrRefresh} from "react-icons/gr";
import {RiSecurePaymentLine} from "react-icons/ri";
import {BiSupport} from "react-icons/bi";
import Policies from "../elements/policies";
const sampleProducts=[{
     rating:4,
     name:"Sweat Pants",
     price:"4.00",
     thumbnails:["/assets/sampleImages/i.png","/assets/sampleImages/i_2.png"]
},
    {
        rating:4,
        name:"Shirt",
        price:"4.00",
        thumbnails:["/assets/sampleImages/j.png","/assets/sampleImages/j_2.png"]
    },
    {
        rating:4,
        name:"Plushsie",
        price:"3.00",
        thumbnails:["/assets/sampleImages/k.png","/assets/sampleImages/k_2.png"]
    }]
const category=[
    {   category:"Women",
        thumbnail:"/assets/categoriesImages/woman.png",},
    {   category:"Watches",
        thumbnail:"/assets/categoriesImages/watch.png",},
    {   category:"Accessories",
        thumbnail:"/assets/categoriesImages/bag.png",},
    {   category:"Sneakers",
        thumbnail:"/assets/categoriesImages/sneaker.jpg",},
]
const getCategoryTiles=()=>{
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let value=getRandomInt(2)
    let array=[{display:"flex",flexDirection:"column",marginTop:'auto',marginBottom:'auto',width:"fit-content",marginRight:"auto",marginLeft: "1em", alignItems:"flex-start"},{display:"flex",flexDirection:"column",marginTop:'auto',marginBottom:'auto',width:"fit-content",marginLeft:'auto',alignItems:"flex-end",marginRight: "1em"}]
    let orientation=array[value]
    return(<></>);
}
export default function Home() {

  return (
      <>
          <Head>
              <title>Ecommerce</title>
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
              <Layout>
               <BannerComponent/>
                  <section>
                  <h2 style={{textAlign:"center",width:"75%",marginRight:"auto",marginLeft:'auto',marginTop:"1em"}}>Best Products</h2>
                      <div className={"container"}>
                          <div className={"row m-10"}>
                              <div className={"col-lg-6"}>
                                  <CategoryTileLg thumbnail={category[0].thumbnail} category={category[0].category}/>
                              </div>
                              <div className={"col-lg-6"}>
                                  <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>
                                      <div className={style.correct} style={{display:"flex",height:"auto",flexDirection:"column"}}>
                                          <CategoryTileSm thumbnail={category[1].thumbnail} category={category[1].category}/>
                                          <CategoryTileSm thumbnail={category[2].thumbnail} category={category[2].category}/>
                                      </div>
                                      <CategoryTileMd thumbnail={category[3].thumbnail} category={category[3].category}/>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </section>
                  <section>
                      <div style={{display:"flex",flexDirection:"column",marginTop:"2.6em",marginBottom:"1em"}}>
                      <div style={{display:"flex",flexDirection:'row',width:"fit-content",marginRight:"auto",marginLeft:'auto'}}>
                          <hr style={{width:"26px",height:"2px",borderColor:"black"}}/>
                          <h3 style={{textTransform:"uppercase",fontWeight:'bold',margin:"0 10px"}}>Trending</h3>
                          <hr style={{width:"26px",height:"2px",borderColor:"black"}}/></div>
                      <span style={{fontFamily:"Libre Baskerville",fontSize:"14px",fontWeight:"400",textAlign:'center',color:"#878787"}}><i>Top View in Week</i></span>
                      </div>
                      <div className={"container"}>
                      <div style={{display:"flex",flexDirection:'row',justifyContent:'space-between',flexWrap:'wrap',overflow:'hidden'}}>
                          {sampleProducts.map((product,i)=>{
                            return ( <Product name={product.name} thumbnails={product.thumbnails} price={product.price}/>)
                          })}
                             </div>
                      </div>
                  </section>
                  <section>
                      <div className={"container"}>
                    <Policies/>
                      </div>
                  </section>
              </Layout>
          </>
  )
}