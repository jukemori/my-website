import rehypeHighlight from 'rehype-highlight'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'

/**
 * MDX configuration for blog posts
 * Centralized configuration for syntax highlighting and other MDX plugins
 */
export const MDX_OPTIONS: MDXRemoteProps['options'] = {
  mdxOptions: {
    rehypePlugins: [
      [
        rehypeHighlight,
        {
          detect: true,
          ignoreMissing: true,
          subset: [
            'javascript',
            'typescript',
            'jsx',
            'tsx',
            'css',
            'html',
            'bash',
            'json',
            'markdown',
            'python',
            'ruby',
            'sql',
          ],
        },
      ],
    ],
  },
} as const
