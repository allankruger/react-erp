type CustomButtonProps = {
  content: string;
  type: 'filter' | 'create' | 'delete';
};

function CustomButton(props: CustomButtonProps) {
  const { content, type } = props;
  let buttonColor;

  if (type === 'filter') {
    buttonColor = 'bg-slate-500 hover:bg-slate-700';
  } else if (type === 'create') {
    buttonColor = 'bg-green-800 hover:bg-green-950';
  } else {
    buttonColor = 'bg-red-700 hover:bg-red-900';
  }

  return <button className={`${buttonColor} px-4 py-2 text-white rounded-lg transition`}>{content}</button>;
}

export default CustomButton;
