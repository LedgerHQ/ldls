import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: () => import("react/jsx-runtime").JSX.Element;
    parameters: {
        layout: string;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const WithInteraction: Story;
//# sourceMappingURL=Button.stories.d.ts.map