import { FaSpinner } from "react-icons/fa";


const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '400px' }}>
      <FaSpinner />
    </div>
  )
}

export default Spinner;