

const middleware = (schema) => {
    return (req, res, next) => {
        const {error} = schema.validate(req.body, { abortEarly: false });
        if (!error) {
            next()
        } else {
            const {details} = error
            const message = details.map(i => i.message);
            let errorMessages = {};
            message.forEach(function (value){
                let key = value.split(' ')[0].replace(/[^a-zA-Z ]/g, "")
                errorMessages[key] = value.replace(/[^a-zA-Z0-9 ]/g, "");
            })

            return res.json({errors:true,error:{type:"validation", messages:errorMessages}})
        }
    }
}
module.exports = middleware;