import React from 'react';
import { figma } from '@figma/code-connect';
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuLabel,
  MenuSeparator,
} from './Menu';

// Menu Item Component
figma.connect(
  MenuItem,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=7897-7037',
  {
    props: {
      children: figma.string('Title'),
      disabled: figma.enum('state', {
        disabled: true,
      }),
    },
    example: ({ children, disabled }) => (
      <MenuItem disabled={disabled}>{children}</MenuItem>
    ),
  },
);

// Menu Content
figma.connect(
  MenuContent,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=7983-4755',
  {
    props: {
      showSection2: figma.boolean('showSection2'),
      showSection3: figma.boolean('showSection3'),
      showSection4: figma.boolean('showSection4'),
      showSectionTitle: figma.boolean('showSectionTitle'),
      showDivider: figma.boolean('showDivider'),
    },
    example: ({
      showSection2,
      showSection3,
      showSection4,
      showSectionTitle,
      showDivider,
    }) => (
      <MenuContent className='w-64'>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        {showSection2 && (
          <>
            <MenuSeparator />
            <MenuLabel>Section 2</MenuLabel>
            <MenuItem>Item 3</MenuItem>
          </>
        )}
        {showSection3 && (
          <>
            <MenuSeparator />
            <MenuItem>Item 4</MenuItem>
          </>
        )}
        {showSection4 && (
          <>
            <MenuSeparator />
            <MenuItem>Item 5</MenuItem>
          </>
        )}
      </MenuContent>
    ),
  },
);

// Full Menu Component
figma.connect(
  Menu,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=7983-5431',
  {
    example: () => (
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent className='w-64'>
          <MenuCheckboxItem checked>Item 1</MenuCheckboxItem>
          <MenuItem>Item 2</MenuItem>
          <MenuItem>Item 3</MenuItem>
          <MenuItem>Item 4</MenuItem>
          <MenuItem>Item 5</MenuItem>
        </MenuContent>
      </Menu>
    ),
  },
);

// Menu with Checkboxes and Radio
figma.connect(
  Menu,
  'https://www.figma.com/design/JxaLVMTWirCpU0rsbZ30k7/2.-Components-Library?node-id=10018-1830',
  {
    example: () => (
      <Menu>
        <MenuTrigger>Open Menu</MenuTrigger>
        <MenuContent>
          <MenuRadioGroup value='robin'>
            <MenuRadioItem value='robin'>Robin</MenuRadioItem>
            <MenuRadioItem value='item2'>Item 2</MenuRadioItem>
            <MenuRadioItem value='item3'>Item 3</MenuRadioItem>
          </MenuRadioGroup>
        </MenuContent>
      </Menu>
    ),
  },
);
