import {Accordion} from "react-bootstrap";
import {IoIosInformationCircleOutline} from "react-icons/io";
import {BiSupport} from "react-icons/bi";
import {GrSecure} from "react-icons/gr";
import {FaShippingFast} from "react-icons/fa";


export default function Mobile(props) {
    return (
        <>
            <div style={{display:"flex",flexDirection:"column",margin:"1.4em",marginTop:"2.8em"}}>
                <img src={"/assets/img.png"} alt={"your-logo"} style={{marginRight:'auto',maxWidth:'50%',marginBottom:'1.8em'}}/>

                <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><div style={{display:'flex',flexDirection:'row',}}>
                        <IoIosInformationCircleOutline style={{marginRight:"1em",color:"black"}}/>
                        <span>What we do</span>
                    </div></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header><div style={{display:'flex',flexDirection:'row',}}>
                        <BiSupport style={{marginRight:"1em",color:"black"}}/>
                       <span>Get in touch</span>
                    </div></Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><div style={{display:'flex',flexDirection:'row',}}>
                            <FaShippingFast style={{marginRight:"1em",color:"black"}}/>
                            <span>Shipping and Returns</span>
                        </div></Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><div style={{display:'flex',flexDirection:'row',}}>
                            <GrSecure style={{marginRight:"1em",color:"black"}}/>
                            <span>Terms and Privacy</span>
                        </div></Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
            </div>
        </> )
}
