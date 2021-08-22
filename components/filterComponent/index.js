import {FiFilter} from "react-icons/fi";

export default function FilterComponent(props) {
    return (
        <>
            <div style={{display:"flex",flexDirection:"row",
                justifyContent:"space-between",marginTop:"2em",
                marginBottom:"2em",width:'100%',paddingRight:'1em',paddingLeft:"1em"}}>
                <div style={{display:'flex',flexDirection:"row",justifyContent:'space-between'}}>
                    <FiFilter style={{marginTop:'auto',marginBottom:'auto',marginRight:"0.5em"}}/>
                    <span>Filter</span>
                </div>
                <div style={{display:'flex',flexDirection:"row"}}>
                    Sort By
                </div>
            </div>
        </>
    );
}
