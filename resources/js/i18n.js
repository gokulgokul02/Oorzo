cat > resources/js/i18n.js <<'EOF'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    resources: {},
  })
}

export default i18n
EOF
