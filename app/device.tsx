import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import * as Application from "expo-application";

const DeviceScreen = () => {
  const [deviceID, setDeviceId] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeviceId = async () => {
      try {
        const id = await Application.getIosIdForVendorAsync();
        setDeviceId(id || "Unknown Device ID");
      } catch (error) {
        console.error("Failed to fetch device ID:", error);
        setDeviceId("Error retrieving Device ID");
      }
    };

    fetchDeviceId();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Information</Text>
      <Text style={styles.text}>Device ID: {deviceID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default DeviceScreen;