import { parseISO, format } from "date-fns";
import PropTypes from "prop-types";

interface DateProps {
    dateString: string;
}

const Date: React.FC<DateProps> = ({
    dateString,
}) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;

Date.propTypes = {
    dateString: PropTypes.string.isRequired,
};
