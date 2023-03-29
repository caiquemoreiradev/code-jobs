import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View, ActivityIndicator } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES } from "../constants";
import {
    Nearbyjobs,
    Popularjobs,
    ScreenHeaderBtn,
    Welcome,
} from "../components";
import { StatusBar } from "expo-status-bar";

const Home = () => {

    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    const [reqIsReady, setReqIsReady] = useState(false);

    useEffect(() => {

        setTimeout(() => {

            setReqIsReady(true)
        }, 6000);
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite, paddingTop: 20 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={'https://cdn-icons-png.flaticon.com/512/9091/9091429.png'} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={'https://avatars.githubusercontent.com/u/56305107?v=4'} dimension='100%' />
                    ),
                    headerTitle: "",
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>

                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Welcome
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        handleClick={() => {
                            if (searchTerm) {
                                router.push(`/search/${searchTerm}`)
                            }
                        }}
                    />

                    { /* <Popularjobs /> */}

                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;