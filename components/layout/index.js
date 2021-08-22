import NavComponent from "../navComponent";
import Footer from "../footerComponent";

export default function Layout({children}) {
    return (
       <>
       <main style={{display:'flex',flexDirection:'column'}}>
       <NavComponent/>
           {children}

           <Footer/>
       </main>
       </>
    );
}
