/**
 * update object properties
 * @param {*} oldObject 
 * @param {*} updatedProperties 
 */
export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    }
};

/**
 * sort dataArray by column name and order type 'asc' or 'desc' and return new array
 * @param {*} dataArray 
 * @param {*} columnName 
 * @param {*} orderType 'asc' or 'desc'
 */
export const sortData = (dataArray, columnName, orderType) => {
    const orderedData = [...dataArray];

    if (orderType === 'asc') {
        orderedData.sort((l1, l2) => {
            if (l1[columnName] < l2[columnName]) {
                return -1;
            }
            if (l1[columnName] > l2[columnName]) {
                return 1;
            }
            return 0;
        });
    }

    if (orderType === 'desc') {
        orderedData.sort((l1, l2) => {
            if (l1[columnName] < l2[columnName]) {
                return 1;
            }
            if (l1[columnName] > l2[columnName]) {
                return -1;
            }
            return 0;
        });
    }

    return orderedData;
};