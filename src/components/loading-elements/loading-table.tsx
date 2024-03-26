const LoadingTable = () => {
  return (
    <div className='overflow-x-auto border border-light border-opacity-10 rounded-md'>
      <table className='w-full table-auto'>
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
