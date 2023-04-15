/**
 * @desc A http logging middleware
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @param {function} next - next function
 */
function httpconsoleMW(req, res, next) {
    console.info(`${req.method} ${req.originalUrl}`)
    console.info(`IP Address:  ${req.ip}`)
    console.info(`Headers: ${JSON.stringify(req.headers)}`)

    const start = Date.now();
    res.on("finish", () => {
        console.info(`status: ${res.statusCode}`)
        const elapsed = Date.now() - start;
        console.info(`Elapsed time: ${elapsed} ms`)
    })
    next()
}

module.exports = httpconsoleMW