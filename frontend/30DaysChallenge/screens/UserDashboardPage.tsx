import React, { useCallback, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Text, ScrollView, Touchable, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_900Black,
  Inter_800ExtraBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { COLORS } from "../colors";
import ChallengeView from "../components/challengeview";
import LoadingIndicator from "../components/loadingindicator";
interface UserDashBoardProps {
  navigation: any;
}
export default function UserDashboardPage(props: UserDashBoardProps) {
  let [fontsLoaded, error] = useFonts({
    Inter_900Black,
    Inter_800ExtraBold,
    Inter_400Regular,
  });

  const [isLoading, setIsLoading] = React.useState(true);

  //this is start of mock information
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const curentDate = today
  const startDate1 = new Date(curentDate.getTime() - 18 * 24 * 60 * 60 * 1000);
  const startDate2 = new Date(curentDate.getTime() - 10 * 24 * 60 * 60 * 1000);
  const startDate3 = new Date(curentDate.getTime() - 27 * 24 * 60 * 60 * 1000);

  const endDate1 = new Date(startDate1.getTime() + 30 * 24 * 60 * 60 * 1000);
  const endDate2 = new Date(startDate2.getTime() + 30 * 24 * 60 * 60 * 1000);
  const endDate3 = new Date(startDate3.getTime() + 30 * 24 * 60 * 60 * 1000);

  const User = {
    name: "Melissa",
    challenges: [
      {
        title: "Sleep",
        start: startDate1,
        end: endDate1,
        difficulty: 4,
        challengeDay: 19,
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
        friends: [
      {
        name: "Raju",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
      {
        name: "Anusha",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
      {
        name: "Matt",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
      {
        name: "Caleb",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
    ],
      },
      {
        title: "Listen to Music",
        start: startDate2,
        end: endDate2,
        difficulty: 2,
        challengeDay: 10,
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
        friends: [
      {
        name: "Raju",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
      {
        name: "Anusha",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
      {
        name: "Matt",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
    ],
      },
      {title: "Workout/Diet",
        start: startDate3,
        end: endDate3,
        difficulty: 4,
        challengeDay: 28,
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
        friends: [
      {
        name: "Raju",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
      {
        name: "Caleb",
        completedDates: [
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          false,
          false,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
          true,
        ],
      },
    ],
      }
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  },[]);

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
    return null;
  }


  return isLoading ? (<LoadingIndicator/>) :(
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.pageTitle}>30 Days Challenge</Text>
      <Text style={styles.welcomeUser}>Welcome {User.name}</Text>
      <ScrollView style={styles.challenges}>
        {User.challenges.map((challenge, index) => (
          <View style={styles.challengeView} key={index}>
            <TouchableOpacity key={index}style={styles.challengeTitleContainer} onPress={() => props.navigation.navigate("ChallengeDescriptionPage", {
              itemId: index
            })}>
              <Text key={index} style={styles.challengeTitle}>{challenge.title}</Text>
            </TouchableOpacity>

            <View style={styles.calendar}>
              <ChallengeView
                startDate={challenge.start}
                endDate={challenge.end}
                completedDates={challenge.completedDates}
                challengeDay={challenge.challengeDay}
                friends={challenge.friends}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    width: "100%",
    height: "100%",
    flex: 1
  },
  pageTitle: {
    fontSize: 30,
    fontFamily: "Inter_800ExtraBold",
    textAlign: "center",
    top: "5%",
    color: COLORS.black,
  },
  welcomeUser: {
    fontSize: 20,
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    top: "5%",
    color: COLORS.black,
  },
  challenges: {
    marginTop: "12%",
    marginBottom: "5%",
    flex: 1,
    alignSelf: "center",
  },
  challengeView: {
    alignItems: "center",
  },
  challengeTitle: {
    alignSelf: "flex-start",
    alignItems: "center",
    fontFamily: "Inter_800ExtraBold",
    fontSize: 20,
    paddingLeft: 10,
    color: COLORS.white
  },
  challengeTitleContainer: {
    width: 321,
    height: 58,
    backgroundColor: COLORS.green,
    borderRadius: 6,
    marginBottom: 8,
    marginTop: 25,
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
    
  },
  calendar: {
    width: 321,
    height: 300,
  },
});
