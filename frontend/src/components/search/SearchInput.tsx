/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
//FIXME Look into how to solve lint-issue  | react/prop-types
interface SearchInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({value, onChange}) => {
  return (
    <>
      <input
        className="search-input rounded-lg size-full bg-transparent hover:outline-none focus:outline-none  hover:bg-slate-400 focus:bg-slate-400 text-black text-lg sm:text-2xl "
        type="search"
        value={value || ''}
        onChange={onChange}
        placeholder="Search for a card"
      />
    </>
  );
};

export default SearchInput;
