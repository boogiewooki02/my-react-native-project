import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();
  const { width } = useWindowDimensions();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={[styles.title, { fontSize: width * 0.05 }]}>
          환영합니다!
        </Text>
        <Text style={[styles.description, { fontSize: width * 0.04 }]}>
          폴리큐브는 2001년 창립 이후, IT 기술과 모바일 환경에 최적화된 솔루션을
          제공하며 성장해왔습니다.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.title, { fontSize: width * 0.05 }]}>
          끊임없는 도전과 성장
        </Text>
        <Text style={[styles.description, { fontSize: width * 0.04 }]}>
          지난 20여 년간 변화하는 ICT 환경 속에서 다양한 실험과 도전을 통해
          위기를 극복하며, 타 기업의 모범이 될 성과를 이루어냈습니다.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.title, { fontSize: width * 0.05 }]}>
          고객의 삶을 풍요롭게
        </Text>
        <Text style={[styles.description, { fontSize: width * 0.04 }]}>
          스마트폰을 통한 게임, 런처 테마 서비스, SNS와 같은 다양한 서비스를
          통해 고객의 삶에 가치를 더하고 있습니다.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.title, { fontSize: width * 0.05 }]}>
          기술 혁신과 미래
        </Text>
        <Text style={[styles.description, { fontSize: width * 0.04 }]}>
          IoT 플랫폼 Coral과 Push 솔루션 Smart P는 ICT 분야에서 지속적인 혁신을
          이루며, 새로운 기술로 진화하고 있습니다.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.title, { fontSize: width * 0.05 }]}>
          함께하는 미래
        </Text>
        <Text style={[styles.description, { fontSize: width * 0.04 }]}>
          폴리큐브는 앞으로도 끊임없이 도전하며 고객과 함께 더 나은 미래를
          만들어 가겠습니다.
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            { width: width * 0.8, paddingVertical: width * 0.03 },
          ]}
          onPress={() => router.push("/webview")}
        >
          <Text style={[styles.buttonText, { fontSize: width * 0.045 }]}>
            웹사이트 방문하기
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: "#f0f4f7",
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    color: "#0056a6",
    marginBottom: 10,
  },
  description: {
    color: "#333",
    lineHeight: 24,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#649fcc",
    borderRadius: 8,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    marginBottom: 4,
  },
});

export default Onboarding;
