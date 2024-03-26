const LoadingTable = () => {
  return (
    <div className='overflow-x-auto border border-light border-opacity-10 rounded-md'>
      <table className='w-full table-auto'>
        <thead>
          <tr className='bg-transparent text-light border-b border-b-light border-opacity-10'>
            <th className='px-8 py-8'></th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-transparent'>
            <td className='dot-spinner'>
              <div className='dot-spinner__dot'></div>
              <div className='dot-spinner__dot'></div>
              <div className='dot-spinner__dot'></div>
              <div className='dot-spinner__dot'></div>
              <div className='dot-spinner__dot'></div>
              <div className='dot-spinner__dot'></div>
              <div className='dot-spinner__dot'></div>
              <div className='dot-spinner__dot'></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LoadingTable;
