import { ContentTypeOption } from '../types/ContentType';

type ContentTypeSelectorProps = {
  value: ContentTypeOption;
  onChange: (value: ContentTypeOption) => void;
};

export const ContentTypeSelector = ({ value, onChange }: ContentTypeSelectorProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as ContentTypeOption)}
      style={{
        width: 'auto',
        padding: '8px',
        borderRadius: '6px',
        border: '1px solid #e2e8f0',
        backgroundColor: 'white',
        fontSize: '16px',
        color: 'black'
      }}
    >
      <option value="movie">Movies</option>
      <option value="tv">TV Shows</option>
      <option value="person">People</option>
    </select>
  );
};