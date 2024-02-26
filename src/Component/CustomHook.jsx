import React, { useState } from 'react'

const CustomHook = (data) => {
    const [value, setValue] = useState(data);

    const fun = (count) => {
        setValue(count);
    }

    return [value, fun];
}

export default CustomHook
