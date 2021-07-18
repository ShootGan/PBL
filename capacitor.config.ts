import { CapacitorConfig } from "@capacitor/cli";
import { address } from "ip";

const config: CapacitorConfig = {
  appId: "io.ionic.slaskawyprawa",
  appName: "Slaska Wyprawa",
  webDir: "dist",
  bundledWebRuntime: true,
  server: {
    url: `http://${address()}:8080`,
    cleartext: true,
  },
};

export default config;
