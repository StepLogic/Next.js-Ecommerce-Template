import dynamic from "next/dynamic";

import Desktop from "./desktop";
import Mobile from "./mobile";
const MediaQuery  = dynamic(() => import('react-responsive/src'), { ssr: false });

export default function NavComponent(props) {

    return (
       <>
           <nav {...props}>
               <MediaQuery minDeviceWidth={428}>
                   {(matches) =>
                       matches ?<Desktop/>: <Mobile/>
                   }
               </MediaQuery>

           </nav>
       </>
    );
}
