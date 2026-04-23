# Instagram Clone — React Native (Expo)

A pixel-perfect Instagram feed clone built with React Native & Expo.
Based on real Instagram Lite screenshots from Zimbabwe.

## 📱 Features
- Stories bar with gradient rings (tap to mark as seen)
- Post feed with like, save, comment
- Double-tap to like with heart pop animation
- Suggested Reels section
- Follow buttons
- Bottom tab navigation (Home, Search, New, Reels, Profile)
- Profile screen skeleton

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Start the app
```bash
npx expo start
```

### 3. Run on your phone
- Install **Expo Go** from the App Store or Play Store
- Scan the QR code that appears in your terminal

### 4. Or run on emulator
```bash
# Android
npx expo start --android

# iOS (Mac only)
npx expo start --ios
```

## 📁 Project Structure
```
InstagramApp/
├── App.js                  ← Entry point + bottom tab navigator
├── package.json
├── babel.config.js
├── data/
│   └── mockData.js         ← Stories, posts, reels data
├── components/
│   ├── StoriesBar.js       ← Horizontal stories with gradient rings
│   ├── PostCard.js         ← Full post with like/save/comment/double-tap
│   └── SuggestedReels.js   ← Horizontal reels strip
└── screens/
    ├── HomeScreen.js       ← Main feed screen
    ├── SearchScreen.js     ← Search placeholder
    ├── ReelsScreen.js      ← Reels placeholder
    └── ProfileScreen.js    ← Profile screen
```

## 🔧 Customizing Posts
Edit `data/mockData.js` to change usernames, captions, colors, etc.

To add real images, replace `imageColor` + `imageEmoji` in mockData with:
```js
imageUri: 'https://your-image-url.com/photo.jpg'
```
And in `PostCard.js`, replace the placeholder `<View>` with:
```jsx
<Image source={{ uri: post.imageUri }} style={{ width: '100%', height: '100%' }} />
```

## 📦 Dependencies
- `expo` — app framework
- `expo-linear-gradient` — Instagram gradient rings
- `@expo/vector-icons` — Ionicons for nav & action icons
- `@react-navigation/native` + `@react-navigation/bottom-tabs` — tab navigation
- `react-native-screens` + `react-native-safe-area-context` — navigation support
# Drewtech-Connect
