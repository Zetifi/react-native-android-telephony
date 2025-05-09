import { requireNativeModule } from "expo";
declare class AndroidTelephonyModule {
  getAllCellInfo(): string;
  execute(action: string): string;
}

// This call loads the native module object from the JSI.
export default requireNativeModule<AndroidTelephonyModule>("AndroidTelephony");
