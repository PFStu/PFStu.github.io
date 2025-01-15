
import Bowser from 'bowser';

export const detectBrowser = () => {
  const browser = Bowser.getParser(window.navigator.userAgent);
  return browser.getBrowser();
};
