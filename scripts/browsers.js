module.exports = {
  // pc
  sl_chrome: {
    base: 'SauceLabs',
    browserName: 'chrome',
    version: 'latest-2'
  },
  sl_firefox: {
    base: 'SauceLabs',
    browserName: 'firefox',
    version: 'latest-1'
  },
  sl_mac_safari: {
    base: 'SauceLabs',
    browserName: 'safari',
    version: '10.0',
    platform: 'macOS 10.12'
  },
  // sl_edge: {
  //   base: 'SauceLabs',
  //   browserName: 'MicrosoftEdge',
  //   version: 'latest',
  //   platform: 'Windows 10'
  // },
  // mobile
  sl_ios_safari: {
    base: 'SauceLabs',
    browserName: 'Safari',
    appiumVersion: '1.6.4',
    platformName: 'iOS',
    platformVersion: '10.2',
    deviceName: 'iPhone 7 Plus Simulator',
    group: 3
  },
  sl_android_4_4: {
    base: 'SauceLabs',
    browserName: 'Browser',
    appiumVersion: '1.6.4',
    platformName: 'Android',
    platformVersion: '4.4',
    deviceName: 'Android Emulator',
    group: 4
  },
  sl_android_6: {
    base: 'SauceLabs',
    browserName: 'Chrome',
    appiumVersion: '1.6.4',
    platformName: 'Android',
    platformVersion: '6.0',
    deviceName: 'Android Emulator',
    group: 4
  }
}
