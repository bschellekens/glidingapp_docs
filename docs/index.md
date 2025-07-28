---
layout: home

title: Docs
description: GlidingApp technical implementation docs

hero:
  name: "Gliding App"
  tagline: "GlidingApp technical implementation docs"

---

<script setup>
import FeatureBlocks from './components/FeatureBlocks.vue'
</script>

<FeatureBlocks
  :customFeatures="[
    {
      title: 'English',
      icon: '🇬🇧',
      link: '/en/index.html',
      description: ''
    },
    {
      title: 'Nederlands',
      icon: '🇳🇱',
      link: '',
      description: '(coming soon)'
    },
    {
      title: 'Deutsch',
      icon: '🇩🇪',
      link: '',
      description: '(coming soon)'
    },
    {
      title: 'Français',
      icon: '🇫🇷',
      link: '',
      description: '(coming soon)'
    }
  ]"
/>