const LoadingCard = () => {
  return (
    <div className='rounded-xl border border-light border-opacity-10 bg-transparent flex-1'>
      <div className='dot-spinner dot-spinner__card'>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
        <div className='dot-spinner__dot'></div>
      </div>
    </div>
  );
};

export default LoadingCard;
