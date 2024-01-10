type DropdownProps = {
  label: string;
};

function Dropdown(props: DropdownProps) {
  const { label } = props;

  return (
    <div>
      <label className="absolute top-[8px]" htmlFor={label}>
        {label}
      </label>
      <select className="border px-4 py-2" name={label} id={label}>
        {label.toLowerCase().includes('order') ? (
          <>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </>
        ) : (
          <>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </>
        )}
      </select>
    </div>
  );
}

export default Dropdown;
