
import Mobile from "./mobile";
import Desktop from "./desktop";
import dynamic from "next/dynamic";

const MediaQuery = dynamic(() => import('react-responsive/src'), {ssr: false});
export default function Product(props) {
    return (
        <>
                <MediaQuery minDeviceWidth={428}>
                    {(matches) =>
                        matches ? <Desktop {...props}/> : <Mobile {...props}/>
                    }
                </MediaQuery>
        </>
    );

}

