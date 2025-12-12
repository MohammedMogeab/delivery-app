import "../global.css";                                                                                                               
import { Redirect } from "expo-router";

const IndexScreen = () => {
  return <Redirect href="/(driver)/auth/create-account" />;
};

export default IndexScreen;
