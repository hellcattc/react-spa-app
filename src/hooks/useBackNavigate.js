import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useBackNavigate = () => {
  const navigate = useNavigate();
  const back = useCallback(() => {
    navigate(-1);
  }, [navigate]);
  return back;
};

export default useBackNavigate;
