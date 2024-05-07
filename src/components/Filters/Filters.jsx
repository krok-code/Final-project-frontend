
import {
  RadioInput,
  FiltersForm
} from 'components/Filters//Filters.styled';


const Filters = () => {
    return (
        <FiltersForm>
            <RadioInput
                type="radio"
                id="rad_without_priority"
                value="Without priority"
            />
            <RadioInput
                type="radio"
                id="rad_low_priority"
                value="Low"
            />
            <RadioInput
                type="radio"
                id="rad_med_priority"
                value="Medium"
            />
            <RadioInput
                type="radio"
                id="rad_high_priority"
                value="High"
            />
        </FiltersForm>
    );
}
  
export default Filters;