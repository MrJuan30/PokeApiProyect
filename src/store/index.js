import { configureStore } from "@reduxjs/toolkit";
import UserName from "../store/slices/username.slice";

export default configureStore({
    reducer: {
        UserName
    }
})