import { requireNativeModule } from "expo";
import { Platform } from "react-native";

let AndroidTelephonyModule;

if (Platform.OS === "android") {
    AndroidTelephonyModule = requireNativeModule("AndroidTelephony");
} else {
    // If not on Android, we can provide a mock or empty implementation.
    AndroidTelephonyModule = {
        getAllCellInfo: () => JSON.stringify([]),
        execute: (action) => {
            return JSON.stringify({});
        }
    };
}

// This call loads the native module object from the JSI.
export default AndroidTelephonyModule;
//# sourceMappingURL=AndroidTelephonyModule.js.map
