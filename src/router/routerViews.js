import loadable from "react-loadable";
import Loading from "../components/Loading/index";

export const Login =loadable({
    loading:Loading,
    loader:()=>import('./Login/index.jsx') 
})