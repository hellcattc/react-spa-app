import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

const useLoadSetter = (loading) => {
  const loadSetter = useOutletContext();
  useEffect(() => {
    loadSetter(loading);
  }, [loadSetter, loading]);
};

export default useLoadSetter;
