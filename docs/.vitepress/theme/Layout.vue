<script setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
const { lang } = useData()
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <!-- TODO: create site footers -->
      <!-- <SiteFooter v-if="lang === 'en'" />
      <SiteFooterNL v-else-if="lang === 'nl'" /> -->
    </template>
  </Layout>
</template>
