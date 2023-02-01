const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

const getPgesPaginate = (totalPage) => {
    let result = []
    
    for (let i = 0; i < totalPage; i++) {
        result.push(i + 1)
    }
    return result
}

export { getPageCount, getPgesPaginate }