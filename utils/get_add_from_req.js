function getAddFromReq(req) {
    const {cookieAdds} = req.cookies
    return addons = cookieAdds ? JSON.parse(cookieAdds) : [];
    
}

module.exports = {
    getAddFromReq
}