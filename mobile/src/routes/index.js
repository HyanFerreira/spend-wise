import React from "react";
import { View, ActivityIndicator } from "react-native";
import AuthRoutes from "./auth.routes";

function Routes() {
    const loading = false;
    const signed = false;
    const welcome = false;
    const home = false;

    return welcome ? <view></view> : <AuthRoutes />;
}

export default Routes;