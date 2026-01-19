import { View } from 'react-native';
import { resolveTheme, SAMPLE_BG_PRIMARY_COLOR } from '..';

export const BorderWidthTable = () => {
  const borderWidth = resolveTheme().borderWidth;
  const cells = Object.entries(borderWidth);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Theme object</th>
          <th>Value</th>
          <th>Sample</th>
        </tr>
      </thead>
      <tbody>
        {cells.map(([key, value], i) => (
          <tr key={i}>
            <td>
              <strong>{key}</strong>
            </td>
            <td>
              <code>{`theme.borderWidth.${key}`}</code>
            </td>
            <td>
              <code>{`${value}px`}</code>
            </td>
            <td>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderWidth: value,
                  borderColor: SAMPLE_BG_PRIMARY_COLOR,
                  borderRadius: 8,
                  backgroundColor: 'transparent',
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
