import React from 'react'
import TextField from '@material-ui/core/TextField'
import NumberFormat from 'react-number-format';

const PhoneInput = ( { label, placeholder, variant, required } ) => {
    return(
        <NumberFormat
            format={"(##) #### #####"}
            placeholder={placeholder}
            label={label}
            variant={variant}
            required={required}
            fullWidth={true}
            customInput={TextField}
            // InputProps={{}}
            // onClick={onClick}
            // allowLeadingZeros={true}
            // helperText={"helper text"}
            // isNumericString={false}
            // value={props.value}
            // onValueChange={props.onValueChange}
            // {...props}
        />
    )
}

export default PhoneInput