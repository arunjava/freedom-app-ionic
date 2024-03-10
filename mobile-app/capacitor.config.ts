import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.pras.freedom',
  appName: 'freedom-app',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
