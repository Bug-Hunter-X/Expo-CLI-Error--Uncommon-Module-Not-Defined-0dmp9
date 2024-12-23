This error occurs when you try to use a module that's not properly installed or linked in your Expo project. It often happens with native modules that require linking to your project's native code (iOS or Android).  Here's an example involving a hypothetical 'react-native-uncommon-module':

```javascript
import UncommonModule from 'react-native-uncommon-module';

// ... your code using UncommonModule ...
```

This might result in the error: `UncommonModule is not defined` or similar, even if you've installed the module via `expo install react-native-uncommon-module`.