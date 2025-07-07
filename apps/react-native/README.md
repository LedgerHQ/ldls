# React Native App

A React Native application built with Nx workspace.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your development machine:

- **Node.js** (>= 18.x)
- **npm**
- **Ruby** (>= 3.1) - Required for iOS development
- **Xcode** - For iOS development (macOS only)
- **Android Studio** - For Android development

## 🚀 Getting Started

### 1. Install Ruby (macOS)

```bash
# Install Ruby using Homebrew
brew install ruby
```

### 2. Configure Ruby PATH

Add the following to your `~/.zshrc` file:

```bash
# Add Ruby to PATH
echo 'export PATH="/opt/homebrew/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
echo 'export PATH="$PATH:$(gem environment gemdir)/bin"' >> ~/.zshrc
```

Reload your shell configuration:

```bash
source ~/.zshrc
```

### 3. Install CocoaPods

```bash
sudo gem install cocoapods
```

### 4. Install iOS Dependencies

```bash
cd apps/react-native/ios
pod install
```

### 5. Install Project Dependencies

From the root of the workspace:

```bash
npm install
```

## 📱 Running the Application

### iOS

```bash
# Run on iOS simulator
npx nx run react-native:start:ios

# Or run directly with React Native CLI
cd apps/react-native
npm run ios
```

### Android

```bash
# Run on Android emulator/device
npx nx run react-native:start:android

# Or run directly with React Native CLI
cd apps/react-native
npm run android
```

### Metro Bundler

Start the Metro bundler separately if needed:

```bash
cd apps/react-native
npx react-native start
```

## 🛠️ Development

### Available Scripts

- `npx nx run react-native:start` - Start Metro bundler
- `npx nx run react-native:build:ios` - Build for iOS
- `npx nx run react-native:build:android` - Build for Android
- `npx nx run react-native:test` - Run tests
- `npx nx run react-native:lint` - Run linting
