import type { FC } from 'react';

interface ProductAvailableColorsProps {
  colors: Array<string>;
}

export const ProductAvailableColors: FC<ProductAvailableColorsProps> = ({
  colors,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        fontSize: '12px',
        color: '#9f9f9f',
      }}
    >
      Color
      <div style={{ display: 'flex', gap: '16px' }}>
        {colors.length === 0 ? (
          <p>No colors available</p>
        ) : (
          colors.map((color, index) => (
            <button
              key={index}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                backgroundColor: color,
                border: '1px solid #ddd',
              }}
              title={color}
            />
          ))
        )}
      </div>
    </div>
  );
};
