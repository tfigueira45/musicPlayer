import { Routes as RoutesDOM, Route } from "react-router";
import UploadPage from "./components/UploadPage/UploadPage";
import HomePage from "./components/HomePage/HomePage";

const Routes = () => {
    return (
        <RoutesDOM>
            <Route path='/' Component={HomePage} />
            <Route path='/upload' Component={UploadPage} />
        </RoutesDOM>
    )
}

export default Routes;