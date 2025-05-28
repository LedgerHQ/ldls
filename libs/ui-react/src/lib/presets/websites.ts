import type { Config } from 'tailwindcss'
import { customPlugin } from '../plugins/websites'

export const preset = {
    content: [],
    plugins: [customPlugin],
    darkMode: 'class',

} satisfies Config

