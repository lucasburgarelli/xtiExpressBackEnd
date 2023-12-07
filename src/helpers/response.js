module.exports = {
    sucess: function(obj) {
        return { status: true, obj: obj }
    },
    fail: function(message) {
        return {status: false, message: message}
    }
}