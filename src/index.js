// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) {
        return [];
    }

    if (matrix.length == 0) {
        return [];
    }

    let newArr = matrix
        .map((el, i) => {
            return i % 2 === 1 ? el.reverse() : el;
        })
        .reduce((previousValue, currentValue) =>
            previousValue.concat(currentValue)
        );

    return newArr;
};
