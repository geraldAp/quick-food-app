import { View, Text } from "react-native";

export default StarRating = ({ rating }) => {
  const starIcons = Array.from({ length: 5 }, (_, index) => (
    <Text key={index} style={{ color: index < rating ? "gold" : "gray" }}>
      ★
    </Text>
  ));

  return <View style={{ flexDirection: "row" }}>{starIcons}</View>;
};
