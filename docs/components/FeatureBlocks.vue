<template>
    <div class="features-container">
        <h2 v-if="title" class="features-title">{{ title }}</h2>
        <p v-if="description" class="features-description">{{ description }}</p>
        <div class="features-grid">
            <div v-for="feature in features" :key="feature.title" class="feature-card"
                @click="navigateTo(feature.link)">
                <div class="feature-icon">{{ feature.icon }}</div>
                <h3 class="feature-title">{{ feature.title }}</h3>
                <p class="feature-description">{{ feature.description }}</p>
            </div>
        </div>
        <div v-if="link" class="features-link-container">
            <a :href="link.url" class="features-link">{{ link.text }}</a>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vitepress'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    link: {
        type: Object,
        default: () => null,
        // Expected structure: { text: 'Link text', url: '/path/to/page' }
    },
    customFeatures: {
        type: Array,
        default: () => []
    }
})

const router = useRouter()


// Use customFeatures if provided and not empty, otherwise use default features
const features = reactive(props.customFeatures && props.customFeatures.length > 0 ? props.customFeatures : defaultFeatures)

const navigateTo = (path) => {
    router.go(path)
}
</script>

<style scoped>
.features-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
        /* Default: 3 blocks per row for larger screens */
        gap: 2rem;
        max-width: 1200px;
    }
    
    .feature-card {
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        padding: 2rem;
        transition: all 0.3s ease;
        cursor: pointer;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #f0f0f0;
        height: 100%;
    }
    
    .feature-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        border-color: #e0e0e0;
    }
    
    .feature-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .feature-title {
        font-size: 1.8rem;
        font-weight: 600;
        margin: 0.5rem 0;
        color: #333;
    }
    
    .feature-description {
        color: #666;
        line-height: 1.6;
        margin-top: 0.5rem;
    }
    
    /* New styles for the container, title, description, and link */
    .features-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
        max-width: 1200px;
    }
    
    .features-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: #333;
        margin-bottom: 1rem;
        text-align: center;
    }
    
    .features-description {
        font-size: 1.2rem;
        color: #666;
        margin-bottom: 2rem;
        text-align: center;
        max-width: 800px;
    }
    
    .features-link-container {
        margin-top: 2rem;
        text-align: center;
    }
    
    .features-link {
        display: inline-block;
        padding: 0.75rem 1.5rem;
        background-color: #1890ff;
        color: white;
        font-weight: 600;
        border-radius: 4px;
        text-decoration: none;
        transition: all 0.3s ease;
    }
    
    .features-link:hover {
        background-color: #0c7cd5;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    /* Medium screens (< 800px): 2 blocks per row */
    @media (max-width: 800px) {
        .features-grid {
            grid-template-columns: repeat(2, 1fr);
            /* 2 blocks per row */
            gap: 1.5rem;
        }
    
        .feature-card {
            padding: 1.75rem;
        }
    
        .feature-icon {
            font-size: 2.75rem;
        }
    
        .feature-title {
            font-size: 1.6rem;
        }
    
        .features-title {
            font-size: 2rem;
        }
    
        .features-description {
            font-size: 1.1rem;
        }
    }
    
    /* Small screens (< 500px): 2 blocks per row with reduced spacing and text size */
    @media (max-width: 500px) {
        .features-grid {
            grid-template-columns: repeat(2, 1fr);
            /* Still 2 blocks per row */
            gap: 1rem;
            /* Reduced gap */
        }
    
        .feature-card {
            padding: 1.25rem;
            /* Reduced padding */
        }
    
        .feature-icon {
            font-size: 2.25rem;
            /* Smaller icon */
            margin-bottom: 0.5rem;
            /* Reduced margin */
        }
    
        .feature-title {
            font-size: 1.4rem;
            /* Smaller title */
            margin: 0.25rem 0;
            /* Reduced margin */
        }
    
        .feature-description {
            font-size: 0.8rem;
            /* Smaller description text */
            line-height: 1.2;
            /* Tighter line height */
            margin-top: 0;
            /* Reduced margin */
        }
    
        .features-title {
            font-size: 1.75rem;
            /* Smaller section title */
        }
    
        .features-description {
            font-size: 1rem;
            /* Smaller section description */
            margin-bottom: 1.5rem;
            /* Reduced margin */
        }
    
        .features-container {
            margin: 2rem auto;
            /* Reduced margin */
        }
    }
</style>
