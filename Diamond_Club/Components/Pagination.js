import { useContext } from "react";
import { PersonContext } from "../Contexts/PersonProvider";

function Pagination() {
  const { totalPage, page, setPage } = useContext(PersonContext);

  function handleBack() {
    if (page === 1) return;
    setPage((page) => page - 1);
  }

  function handleNext() {
    if (page < totalPage) {
      setPage((page) => page + 1);
    }
  }

  return (
    <div className="pagination">
      {
        <Button className="btn" onClick={handleBack} disabled={page === 1}>
          Back
        </Button>
      }
      <p className="pagination-num">
        {page} / {totalPage}
      </p>
      <Button
        disabled={page === totalPage}
        className="btn"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;

function Button({ children, onClick, className, disabled }) {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children ? children : "Button"}
    </button>
  );
}
