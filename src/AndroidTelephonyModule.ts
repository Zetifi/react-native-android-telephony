import { NativeModule, requireNativeModule } from "expo";
import { Platform } from "react-native";

declare class AndroidTelephonyModule extends NativeModule {
  getAllCellInfo(): string;
  execute(action: string): string;
}

let androidTelephonyModule;

if (Platform.OS === "android") {
    androidTelephonyModule = requireNativeModule<AndroidTelephonyModule>("AndroidTelephony");
} else {
    // If not on Android, we can provide a mock or empty implementation.
    androidTelephonyModule = {
        getAllCellInfo: () => JSON.stringify([]),
        execute: (action: string) => {
            return JSON.stringify({});
        }
    };
}

// This call loads the native module object from the JSI.
export default androidTelephonyModule;
