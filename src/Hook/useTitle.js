import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - BDTour`;
    }, [title])
};

export default useTitle;