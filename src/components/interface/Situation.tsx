type SituationProps = {
  content: string;
};

function Situation(props: SituationProps) {
  const { content } = props;

  return (
    <div className="flex flex-row justify-center items-center">
      <div
        className={
          content != 'Active'
            ? 'bg-red-500' + ' mr-2 w-2 h-2 text-center text-sm rounded-full text-white font-medium'
            : 'bg-green-500' + ' mr-2 w-2 h-2 text-center text-sm rounded-full text-white font-medium'
        }
      />
      <span>{content}</span>
    </div>
  );
}

export default Situation;
