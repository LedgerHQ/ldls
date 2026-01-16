import { ledgerLiveThemes } from '@ledgerhq/lumen-design-core';

type ColorTableProps = {
  category: 'bg' | 'text' | 'border' | 'crypto' | 'discover';
  theme?: 'light' | 'dark';
};

export const ColorTable = ({ category, theme = 'light' }: ColorTableProps) => {
  const colors = ledgerLiveThemes[theme].colors[category];

  if (!colors) {
    return <div>Oops, no colors found for category: {category}</div>;
  }

  const cells = Object.entries(colors);

  const renderSample = (value) => {
    if (category === 'bg') {
      return (
        <div
          style={{
            backgroundColor: value,
            width: 28,
            height: 28,
            borderRadius: 8,
          }}
        />
      );
    }
  };

  const formatTokenName = (key: string): string => {
    return key
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/([a-zA-Z])(\d+)/g, '$1 $2')
      .replace(/^./, (str) => str.toUpperCase());
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Sample</th>
          <th>Name</th>
          <th>Theme object</th>
          <th>lx</th>
        </tr>
      </thead>
      <tbody>
        {cells.map(([key, value]) => (
          <tr>
            <td>{renderSample(value)}</td>
            <td>{formatTokenName(key)}</td>
            <td>{`theme.colors.${category}.${key}`}</td>
            <td>{key}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
