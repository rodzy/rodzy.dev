import { parseISO, format } from "date-fns";
import PropTypes from "prop-types";

interface DateProps {
    dateString: string | undefined;
}

const Date: React.FC<DateProps> = ({ dateString }) => {
    const date = parseISO(dateString as string);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;

Date.propTypes = {
    dateString: PropTypes.string.isRequired,
};
