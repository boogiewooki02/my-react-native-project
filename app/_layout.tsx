import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="webview" options={{ title: "WebView" }} />
      <Tabs.Screen name="device" options={{ title: "Device ID" }} />
    </Tabs>
  );
}
