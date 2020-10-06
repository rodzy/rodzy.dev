import { parseISO, format } from "date-fns";
import PropTypes, { InferProps } from "prop-types";

interface DateProps {
    dateString: string;
}

const Date: React.FC<DateProps> = ({
    dateString,
}: InferProps<typeof Date.propTypes>) => {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

export default Date;

Date.propTypes = {
    dateString: PropTypes.string.isRequired,
};
