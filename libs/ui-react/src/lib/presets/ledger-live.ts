import type { Config } from 'tailwindcss'
import { customPlugin } from '../plugins/ledger-live'

export const preset = {
    content: [],
    plugins: [customPlugin],
    darkMode: 'class',

} satisfies Config

