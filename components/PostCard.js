import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked);
  const [saved, setSaved] = useState(post.saved);
  const [likeCount, setLikeCount] = useState(post.likes || 0);
  const [comment, setComment] = useState('');

  const heartScale = useRef(new Animated.Value(0)).current;
  const heartOpacity = useRef(new Animated.Value(0)).current;
  const lastTap = useRef(null);

  const handleDoubleTap = () => {
    const now = Date.now();
    if (lastTap.current && now - lastTap.current < 300) {
      // double tap!
      if (!liked) {
        setLiked(true);
        setLikeCount(c => c + 1);
      }
      heartScale.setValue(0);
      heartOpacity.setValue(1);
      Animated.sequence([
        Animated.spring(heartScale, {
          toValue: 1,
          useNativeDriver: true,
          friction: 4,
        }),
        Animated.delay(400),
        Animated.timing(heartOpacity, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start();
      lastTap.current = null;
    } else {
      lastTap.current = now;
    }
  };

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(c => c - 1);
    } else {
      setLiked(true);
      setLikeCount(c => c + 1);
    }
  };

  const likesDisplay = post.likesText
    ? post.likesText
    : `${likeCount.toLocaleString()} likes`;

  return (
    <View style={styles.post}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.userRow} activeOpacity={0.8}>
          <LinearGradient
            colors={['#f09433', '#e6683c', '#dc2743', '#cc2366', '#bc1888']}
            style={styles.avatarRing}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            <View style={styles.avatarInner}>
              <View style={[styles.avatarBg, { backgroundColor: post.avatarColor }]}>
                <Text style={styles.avatarText}>{post.initials}</Text>
              </View>
            </View>
          </LinearGradient>
          <View>
            <Text style={styles.username}>{post.username}</Text>
            {post.location && (
              <Text style={styles.location}>{post.location}</Text>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.headerRight}>
          {post.showFollow && (
            <TouchableOpacity style={styles.followBtn} activeOpacity={0.8}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity>
            <Text style={styles.more}>···</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Image */}
      <TouchableWithoutFeedback onPress={handleDoubleTap}>
        <View style={styles.imageWrap}>
          <View style={[styles.imagePlaceholder, { backgroundColor: post.imageColor }]}>
            <Text style={styles.imageEmoji}>{post.imageEmoji}</Text>
            <Text style={styles.imageLabel}>{post.username}'s photo</Text>
          </View>
          {/* Double tap heart overlay */}
          <Animated.View
            style={[
              styles.heartOverlay,
              { transform: [{ scale: heartScale }], opacity: heartOpacity },
            ]}
            pointerEvents="none"
          >
            <Text style={{ fontSize: 80 }}>❤️</Text>
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity onPress={toggleLike} activeOpacity={0.7}>
          <Ionicons
            name={liked ? 'heart' : 'heart-outline'}
            size={26}
            color={liked ? '#ed4956' : '#262626'}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="chatbubble-outline" size={24} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="paper-plane-outline" size={24} color="#262626" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="logo-whatsapp" size={24} color="#262626" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => setSaved(s => !s)} activeOpacity={0.7}>
          <Ionicons
            name={saved ? 'bookmark' : 'bookmark-outline'}
            size={24}
            color="#262626"
          />
        </TouchableOpacity>
      </View>

      {/* Likes */}
      <Text style={styles.likes}>{likesDisplay}</Text>

      {/* Caption */}
      <View style={styles.captionRow}>
        <Text style={styles.caption}>
          <Text style={styles.captionUser}>{post.username} </Text>
          {post.caption}
        </Text>
      </View>

      {/* Tags */}
      {!!post.tags && (
        <Text style={styles.tags}>{post.tags}</Text>
      )}

      {/* Comments */}
      <TouchableOpacity activeOpacity={0.7}>
        <Text style={styles.comments}>
          View all {post.comments.toLocaleString()} comments
        </Text>
      </TouchableOpacity>

      {/* Time */}
      <Text style={styles.time}>{post.time}</Text>

      {/* Comment input */}
      <View style={styles.commentBar}>
        <View style={styles.commentAvatar}>
          <Text style={styles.commentAvatarText}>Y</Text>
        </View>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a comment…"
          placeholderTextColor="#8e8e8e"
          value={comment}
          onChangeText={setComment}
          returnKeyType="send"
          onSubmitEditing={() => setComment('')}
        />
        {comment.length > 0 && (
          <TouchableOpacity onPress={() => setComment('')}>
            <Text style={styles.postBtn}>Post</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#dbdbdb',
    marginBottom: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarRing: {
    width: 36,
    height: 36,
    borderRadius: 18,
    padding: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInner: {
    width: '100%',
    height: '100%',
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  avatarBg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 11,
  },
  username: {
    fontWeight: '600',
    fontSize: 13,
    color: '#262626',
  },
  location: {
    fontSize: 11,
    color: '#737373',
    marginTop: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  followBtn: {
    backgroundColor: '#0095f6',
    borderRadius: 6,
    paddingHorizontal: 14,
    paddingVertical: 5,
  },
  followText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  more: {
    fontSize: 18,
    color: '#262626',
    letterSpacing: 1,
  },
  imageWrap: {
    width: '100%',
    aspectRatio: 1,
    position: 'relative',
  },
  imagePlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  imageEmoji: {
    fontSize: 48,
  },
  imageLabel: {
    fontSize: 13,
    color: '#888',
  },
  heartOverlay: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -40,
    marginTop: -40,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  likes: {
    fontWeight: '600',
    fontSize: 13,
    color: '#262626',
    paddingHorizontal: 12,
    paddingBottom: 4,
  },
  captionRow: {
    paddingHorizontal: 12,
    paddingBottom: 3,
  },
  caption: {
    fontSize: 13,
    color: '#262626',
    lineHeight: 18,
  },
  captionUser: {
    fontWeight: '600',
  },
  tags: {
    fontSize: 13,
    color: '#00376b',
    paddingHorizontal: 12,
    paddingBottom: 3,
  },
  comments: {
    fontSize: 13,
    color: '#8e8e8e',
    paddingHorizontal: 12,
    paddingBottom: 3,
  },
  time: {
    fontSize: 10,
    color: '#8e8e8e',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  commentBar: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderTopColor: '#efefef',
  },
  commentAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#0095f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commentAvatarText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  commentInput: {
    flex: 1,
    fontSize: 13,
    color: '#262626',
    paddingVertical: 0,
  },
  postBtn: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0095f6',
  },
});
