export const alertMessage = ({ status, message }) => {
  return (
    <div className='container text-center'>
      <div
        className='alert alert-danger alert-dismissible fade show'
        role='alert'
      >
        <strong>{status}</strong> {message}
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
        ></button>
      </div>
    </div>
  )
}
