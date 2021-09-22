import React from "react";
import { View, Text } from "react-native";
import Animated from "react-native-reanimated";
import { connect } from "react-redux";
import { COLORS, constants, SIZES } from "../constants";
import { setSelectedTab} from "../stores/tab/tabActions";
import { Header } from "./Components";

const MainLayout = ({
  drawerAnimatedStyle,
  navigation,
  selectedTab,
  setSelectedTab,
}) => {

  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);

  return (
    <Animated.View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.white,
        ...drawerAnimatedStyle,
      }}
    >
      {/* Header` */}
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,
          marginTop: 40,
          alignItems: "center",
        }}
        title={selectedTab.toUpperCase()}
      />
      {/* content` */}
      <View style={{ flex:1}}>
          
      </View>

      <Text>MainLayout</Text>
      {/* footer */}
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (selectedTab) => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
