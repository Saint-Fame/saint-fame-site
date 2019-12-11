// Used to turn something like 0xf739c4d15854cab9874e24a4d1ec084dcaf1f13f into something like 0xf7...13f
export const truncate = (fullStr: string, strLen: number) => {
    if (fullStr.length <= strLen) return fullStr

    let separator = '...'

    var sepLen = separator.length,
        charsToShow = strLen - sepLen,
        frontChars = Math.ceil(charsToShow / 2),
        backChars = Math.floor(charsToShow / 2)

    return (
        fullStr.substr(0, frontChars) +
        separator +
        fullStr.substr(fullStr.length - backChars)
    )
}
