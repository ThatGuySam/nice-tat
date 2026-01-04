/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      /**
       * Typography customizations based on NNG UX research:
       * - 50-75 char line width (prose default is 65ch)
       * - Golden ratio line-height (~1.625)
       * - Clear heading hierarchy
       */
      typography: {
        DEFAULT: {
          css: {
            // Line width: 65ch (~50-75 chars)
            maxWidth: '65ch',

            // Base font size: 18px for readability
            fontSize: '1.125rem',

            // Line height: golden ratio (1.625)
            lineHeight: '1.625',

            // High contrast text colors
            '--tw-prose-body': 'var(--tw-prose-invert-body)',
            '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
            '--tw-prose-links': 'var(--tw-prose-invert-links)',
            '--tw-prose-bold': 'var(--tw-prose-invert-bold)',
            '--tw-prose-counters': 'var(--tw-prose-invert-counters)',
            '--tw-prose-bullets': 'var(--tw-prose-invert-bullets)',
            '--tw-prose-hr': 'var(--tw-prose-invert-hr)',
            '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
            '--tw-prose-quote-borders':
              'var(--tw-prose-invert-quote-borders)',
            '--tw-prose-captions': 'var(--tw-prose-invert-captions)',
            '--tw-prose-code': 'var(--tw-prose-invert-code)',
            '--tw-prose-pre-code': 'var(--tw-prose-invert-pre-code)',
            '--tw-prose-pre-bg': 'var(--tw-prose-invert-pre-bg)',
            '--tw-prose-th-borders':
              'var(--tw-prose-invert-th-borders)',
            '--tw-prose-td-borders':
              'var(--tw-prose-invert-td-borders)',

            // Heading hierarchy (layer-cake pattern)
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              lineHeight: '1.2',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              fontSize: '1.75rem',
              fontWeight: '600',
              lineHeight: '1.3',
              marginTop: '2.5rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.375rem',
              fontWeight: '600',
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontSize: '1.125rem',
              fontWeight: '600',
              lineHeight: '1.5',
              marginTop: '1.5rem',
              marginBottom: '0.5rem',
            },

            // Comfortable paragraph spacing
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },

            // Lists with proper spacing
            'ul, ol': {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              paddingLeft: '1.5rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },

            // Blockquotes for callouts
            blockquote: {
              fontStyle: 'normal',
              borderLeftWidth: '4px',
              borderLeftColor: 'rgb(136, 58, 234)',
              paddingLeft: '1.25rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },

            // Code blocks
            code: {
              fontSize: '0.875em',
              fontWeight: '500',
            },
            pre: {
              fontSize: '0.875rem',
              lineHeight: '1.7',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              borderRadius: '0.5rem',
              padding: '1rem 1.25rem',
            },

            // Links with clear affordance
            a: {
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              '&:hover': {
                color: 'rgb(136, 58, 234)',
              },
            },

            // Images with captions
            img: {
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '0.5rem',
            },
            figcaption: {
              textAlign: 'center',
              fontSize: '0.875rem',
              marginTop: '0.75rem',
            },
          },
        },
        // Light mode overrides
        light: {
          css: {
            '--tw-prose-body': 'rgb(55, 65, 81)',
            '--tw-prose-headings': 'rgb(17, 24, 39)',
            '--tw-prose-links': 'rgb(17, 24, 39)',
            '--tw-prose-bold': 'rgb(17, 24, 39)',
            '--tw-prose-counters': 'rgb(107, 114, 128)',
            '--tw-prose-bullets': 'rgb(156, 163, 175)',
            '--tw-prose-hr': 'rgb(229, 231, 235)',
            '--tw-prose-quotes': 'rgb(17, 24, 39)',
            '--tw-prose-quote-borders': 'rgb(136, 58, 234)',
            '--tw-prose-captions': 'rgb(107, 114, 128)',
            '--tw-prose-code': 'rgb(17, 24, 39)',
            '--tw-prose-pre-code': 'rgb(229, 231, 235)',
            '--tw-prose-pre-bg': 'rgb(31, 41, 55)',
            '--tw-prose-th-borders': 'rgb(209, 213, 219)',
            '--tw-prose-td-borders': 'rgb(229, 231, 235)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
